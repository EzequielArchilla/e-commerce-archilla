import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsuarioFirestoreService } from 'src/app/services/usuarioFirestore/usuario-firestore.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  usuario: Usuario;
  password: string;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private userFire: UsuarioFirestoreService,
    private userAuthService: AuthService
  ) {
    this.usuario = new Usuario();
    this.password = '';
  }

  ngOnInit(): void {}

  fastLogIn(tipo: string) {
    if (tipo == 'admin') {
      this.usuario.email = 'admin@test.com';
      this.usuario.tipo = 'admin';
      this.password = '123456';
    } else {
      this.usuario.email = 'empleado@test.com';
      this.usuario.tipo = 'empleado';
      this.password = '123456';
    }
  }

  showSuccess() {
    this.toastr.success('Ingreso correcto!');
  }

  showError(error: string) {
    this.toastr.error('Error: ' + error);
  }

  logIn() {
    this.userAuthService
      .signIn(this.usuario.email, this.password)
      .then((userCredential) => {
        this.userAuthService.userLogged = this.usuario;
        this.userAuthService.setLogged(true);
        //this.localStorageService.setData('userEmail', this.usuario.email);
        this.showSuccess();
        setTimeout(() => {
          this.router.navigate(['bienvenido']);
        }, 1000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        this.showError(errorMessage);
      });
  }
}
