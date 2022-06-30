import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor/repartidor';

@Component({
  selector: 'app-detalle-repartidor-seleccionado',
  templateUrl: './detalle-repartidor-seleccionado.component.html',
  styleUrls: ['./detalle-repartidor-seleccionado.component.css'],
})
export class DetalleRepartidorSeleccionadoComponent implements OnInit {
  @Input() repartidorSeleccionado: Repartidor = new Repartidor();

  constructor() {}

  ngOnInit(): void {}
}
