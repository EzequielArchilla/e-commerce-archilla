import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css'],
})
export class TablaPaisesComponent implements OnInit {
  @Output() paisOut: EventEmitter<Object> = new EventEmitter();

  paises?: any[];
  radioButton?: HTMLElement | null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.ObtenerPaises().subscribe((data: any) => {
      this.paises = data.filter(
        (pais: any) =>
          pais.name.common == 'Nigeria' ||
          pais.name.common == 'Spain' ||
          pais.name.common == 'Germany'
      );
    });
  }

  valueChange(paisSeleccionado: Object) {
    this.paisOut.emit(paisSeleccionado);
  }
}
