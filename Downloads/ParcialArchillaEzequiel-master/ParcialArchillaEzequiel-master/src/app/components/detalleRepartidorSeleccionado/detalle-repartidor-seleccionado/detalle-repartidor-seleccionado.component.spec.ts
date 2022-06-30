import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRepartidorSeleccionadoComponent } from './detalle-repartidor-seleccionado.component';

describe('DetalleRepartidorSeleccionadoComponent', () => {
  let component: DetalleRepartidorSeleccionadoComponent;
  let fixture: ComponentFixture<DetalleRepartidorSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRepartidorSeleccionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRepartidorSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
