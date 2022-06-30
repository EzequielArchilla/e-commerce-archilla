import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor/repartidor';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.css'],
})
export class DetalleRepartidorComponent implements OnInit {
  repartidor: Repartidor = new Repartidor();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  async mostrarDetalle(repartidor: Repartidor) {
    this.repartidor = repartidor;
    console.log(repartidor);
  }
}
