export class Usuario {
  nombre: string;
  apellido: string;
  edad: number;
  dni: string;
  mail: string;
  tipo: string;

  constructor() {
    this.nombre = '';
    this.apellido = '';
    this.edad = 0;
    this.dni = '';
    this.mail = '';
    this.tipo = '';
  }
}
