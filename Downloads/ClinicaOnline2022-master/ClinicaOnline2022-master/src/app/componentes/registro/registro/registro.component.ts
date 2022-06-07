import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { LocalStorageService } from 'src/app/servicios/localStorage/local-storage.service';
import { UsuarioAuthService } from 'src/app/servicios/usuarioAuth/usuario-auth.service';
import { UsuarioFirestoreService } from 'src/app/servicios/usuarioFirestore/usuario-firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  user: Usuario;
  password: string;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private userAuthService: UsuarioAuthService,
    private userFire: UsuarioFirestoreService,
    private localStorageService: LocalStorageService
  ) {
    this.user = new Usuario();
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
      .signUp(this.user.mail, this.password)
      .then((userCredential) => {
        this.userFire.crearUsuario(this.user);
        this.userAuthService.userLogged = this.user;
        this.userAuthService.setLogged(true);
        this.localStorageService.setData('userEmail', this.user.mail);
        this.showSuccess();
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.showError(errorMessage);
      });
  }
}
