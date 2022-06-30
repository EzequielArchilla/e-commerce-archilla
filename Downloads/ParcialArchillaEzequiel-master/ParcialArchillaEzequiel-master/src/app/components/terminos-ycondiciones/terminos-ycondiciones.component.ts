import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-terminos-ycondiciones',
  templateUrl: './terminos-ycondiciones.component.html',
  styleUrls: ['./terminos-ycondiciones.component.css']
})
export class TerminosYCondicionesComponent implements OnInit {

  mail:string = '';

  constructor(private toastr:ToastrService,
    private router:Router,
    private userAuth:AuthService) { }

  ngOnInit(): void {
  }

  validarEmail(mail: string) {
    const email: string = mail;
    const tieneEspacios = email.includes(' ');

    if (email.length == 0) {
      return false;
    }
    else if (tieneEspacios) {
      return  false;
    }
    return true;
  }

  aceptarCondiciones()
  {
    if(this.validarEmail(this.mail) == true)
    {
      this.toastr.success("Terminos y condiciones aceptados");
      this.router.navigate(['bienvenido']);
    }
    else{
      this.toastr.error("Mail invalido");
    }
  }
}
