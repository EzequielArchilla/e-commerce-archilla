export class Repartidor {
  dni: string;
  nombre: string;
  edad: number;
  capacidadDeTransporte: number;
  pais: any;
  unidadPropia: boolean;

  constructor() {
    this.dni = '';
    this.nombre = '';
    this.edad = 0;
    this.capacidadDeTransporte = 0;
    this.pais = '';
    this.unidadPropia = false;
  }
}
