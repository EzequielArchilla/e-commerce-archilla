import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Repartidor } from 'src/app/clases/repartidor/repartidor';
import { RepartidorFirestoreService } from 'src/app/services/repartidorFirestore/repartidor-firestore.service';
import { ToastFunctionsService } from 'src/app/services/toast/toast-functions.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css'],
})
export class AltaRepartidorComponent implements OnInit {
  paisSeleccionado: string = '';
  nuevoRepartidor: Repartidor = new Repartidor();
  repartidorForm: FormGroup;

  constructor(
    private repartidorFire: RepartidorFirestoreService,
    private fb: FormBuilder,
    private toastService: ToastFunctionsService,
    private router: Router
  ) {
    this.repartidorForm = fb.group({
      dni: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.min(18), Validators.max(65)]],
      capacidadDeTransporte: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  asignarPaisSeleccionado(pais: any) {
    this.nuevoRepartidor.pais = pais;
    this.paisSeleccionado = pais.name.common;
  }

  crearRepartidor() {
    //console.log(this.actorForm.getRawValue());
    this.nuevoRepartidor.dni = this.repartidorForm.controls['dni'].value;
    this.nuevoRepartidor.nombre = this.repartidorForm.controls['nombre'].value;
    this.nuevoRepartidor.edad = this.repartidorForm.controls['edad'].value;
    this.nuevoRepartidor.capacidadDeTransporte =
      this.repartidorForm.controls['capacidadDeTransporte'].value;
    this.repartidorFire
      .crearRepartidor(this.nuevoRepartidor)
      .then(() => {
        this.toastService.showSuccess('Actor creado correctamente');
        this.router.navigate(['bienvenido']);
      })
      .catch((error) => {
        this.toastService.showError('Ocurrio un error inesperado');
        this.router.navigate(['bienvenido']);
      });
  }
}
