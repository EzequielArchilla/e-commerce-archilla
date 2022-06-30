import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsuarioFirestoreService } from 'src/app/services/usuarioFirestore/usuario-firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: Usuario;
  password: string;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private userAuthService: AuthService,
    private userFire: UsuarioFirestoreService
  ) {
    this.usuario = new Usuario();
    this.password = '';
  }

  ngOnInit(): void {}

  showSuccess() {
    this.toastr.success('Registrado correcto!');
  }

  showError(error: string) {
    this.toastr.error('Error: ' + error);
  }

  signUp() {
    this.userAuthService
      .signUp(this.usuario.email, this.password)
      .then((userCredential) => {
        this.userFire.crearUsuario(this.usuario);
        this.userAuthService.userLogged = this.usuario;
        this.userAuthService.setLogged(true);
        this.showSuccess();
        setTimeout(() => {
          this.router.navigate(['terminosYCondiciones']);
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.showError(errorMessage);
      });
  }
}
