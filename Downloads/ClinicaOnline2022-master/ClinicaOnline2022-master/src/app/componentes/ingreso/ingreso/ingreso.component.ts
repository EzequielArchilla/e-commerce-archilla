import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { LocalStorageService } from 'src/app/servicios/localStorage/local-storage.service';
import { UsuarioAuthService } from 'src/app/servicios/usuarioAuth/usuario-auth.service';
import { UsuarioFirestoreService } from 'src/app/servicios/usuarioFirestore/usuario-firestore.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss'],
})
export class IngresoComponent implements OnInit {
  usuario: Usuario;
  password: string;
  tipo: String;
  formularioLogueo: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private userFire: UsuarioFirestoreService,
    private userAuthService: UsuarioAuthService,
    private spinner: NgxSpinnerService,
    private localStorageService: LocalStorageService
  ) {
    this.usuario = new Usuario();
    this.password = '';
    this.tipo = '';

    this.formularioLogueo = fb.group(
      {
        email: ["", [Validators.required, this.validarEmail]],
        password: ["", [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  ingresoRapido(tipo: string) {
    if (tipo == 'paciente') {
      this.usuario.mail = 'admin@test.com';
      this.usuario.tipo = 'admin';
      this.password = '123456';
    } else if (tipo == 'especialista') {
      this.usuario.mail = 'empleado@test.com';
      this.usuario.tipo = 'empleado';
      this.password = '123456';
    }
  }

  /*
    ingresoRapido() {
    this.formularioLogueo.setValue({
      email: "admin@admin.com",
      password: "administrator"
    });
  }*/

  validarEmail(control: AbstractControl) {
    const email: string = control.value;
    const tieneEspacios = email.includes(' ');

    if (email.length == 0) {
      return { emailVacio: true };
    }
    else if (tieneEspacios) {
      return { tieneEspacios: true }
    }
    return null;
  }

  showSuccess() {
    this.toastr.success('Ingreso correcto!');
  }

  showError(error: string) {
    this.toastr.error('Error: ' + error);
  }

  logIn() {
    this.userAuthService
      .signIn(this.usuario.mail, this.password)
      .then((userCredential) => {
        this.userFire.obtenerUsuario().subscribe((data: any) => {
          this.usuario = data.filter((user: Usuario) => user.mail == this.usuario.mail)[0];
          if (this.usuario.tipo == "especialista") {
            if ((<Especialista>this.usuario).validado == true) {
              this.userAuthService.userLogged = this.usuario;
              this.userAuthService.setLogged(true);
              this.localStorageService.setData('userEmail', this.usuario.mail);
              this.localStorageService.setData('tipo', this.usuario.tipo);
              this.localStorageService.setData('validado', (<Especialista>this.usuario).validado);
              this.showSuccess();
              setTimeout(() => {
                this.router.navigate(['bienvenido']);
              }, 1000);
              }else{
                this.showError("Especialista no validado");
              }
          }
      if (this.usuario.tipo == "paciente") {
        this.userAuthService.userLogged = this.usuario;
        this.userAuthService.setLogged(true);
        this.localStorageService.setData('userEmail', this.usuario.mail);
        this.localStorageService.setData('tipo', this.usuario.tipo);
      }
      if (this.usuario.tipo == "administrador") {
        this.userAuthService.userLogged = this.usuario;
        this.userAuthService.setLogged(true);
        this.localStorageService.setData('userEmail', this.usuario.mail);
        this.localStorageService.setData('tipo', this.usuario.tipo);
      }})})

      .catch((error) => {
        const errorMessage = error.message;
        this.showError(errorMessage);
      });
  }
}

/*
error: string = "";
  tipo: String;
  formularioLogueo: FormGroup;
  usuario: Usuario;

  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private usuarioService: UsuarioService,
    private router: Router) {
    this.usuario = new Usuario();
    this.tipo = "";

    this.formularioLogueo = fb.group(
      {
        email: ["", [Validators.required, this.validarEmail]],
        password: ["", [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  validarEmail(control: AbstractControl) {
    const email: string = control.value;
    const tieneEspacios = email.includes(' ');

    if (email.length == 0) {
      return { emailVacio: true };
    }
    else if (tieneEspacios) {
      return { tieneEspacios: true }
    }
    return null;
  }

  ngOnInit(): void {
  }

  loguearUsuario() {
    this.usuario.mail = this.formularioLogueo.get("email")?.value;
    this.usuario.password = this.formularioLogueo.get("password")?.value;

    this.auth.signIn(this.usuario).then(
      ok => {
        this.usuarioService.obtenerUsuario().subscribe((data: any) => {
          this.usuario = data.filter((user: Usuario) => user.mail == this.usuario.mail)[0];
          if (this.usuario.tipo == "especialista") {
            if ((<Especialista>this.usuario).validado == true) {
              this.auth.usuarioLogueado = this.usuario;
              this.auth.logueado = true;
              console.log(this.auth.usuarioLogueado);
              this.goToHome();
            } else {
              console.log("USUARIO NO AUTORIZADO");
            }
          }
          if (this.usuario.tipo == "paciente") {
            this.auth.usuarioLogueado = this.usuario;
            this.auth.logueado = true;
            console.log(this.auth.usuarioLogueado);
            this.goToHome();
          }
          if (this.usuario.tipo == "administrador") {
            this.auth.usuarioLogueado = this.usuario;
            this.auth.logueado = true;
            console.log(this.auth.usuarioLogueado);
            this.goToHome();
          }
        });
      }
    ).catch(
      error => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // if (this.errorMessage) this.errorMessage.innerText = error.message;
        // this.errorMessage?.classList.remove("hidden");
      }
    );
  }

  goToHome() {
    setTimeout(() => {
      this.router.navigate(['bienvenida']);
    }, 1000)
  }

  ingresoRapido() {
    this.formularioLogueo.setValue({
      email: "admin@admin.com",
      password: "administrator"
    });
  }
*/