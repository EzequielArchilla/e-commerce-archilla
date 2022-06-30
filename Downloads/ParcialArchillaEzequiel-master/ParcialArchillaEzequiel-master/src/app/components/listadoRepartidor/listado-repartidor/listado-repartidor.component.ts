import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor/repartidor';
import { RepartidorFirestoreService } from 'src/app/services/repartidorFirestore/repartidor-firestore.service';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.css'],
})
export class ListadoRepartidorComponent implements OnInit {
  @Output() detalleProducto: EventEmitter<Repartidor> = new EventEmitter();

  listaRepartidores: Repartidor[] = [];

  constructor(private repartidorFireService: RepartidorFirestoreService) {}

  ngOnInit(): void {
    this.repartidorFireService
      .obtenerRepartidor()
      .subscribe((repartidores: any) => {
        this.listaRepartidores = repartidores;
      });
  }

  mostrarDetalle(repartidor: Repartidor) {
    this.detalleProducto.emit(repartidor);
  }
}
