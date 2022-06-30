import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class ArchivosFireStorageService {
  constructor(private fireStorage: AngularFireStorage) {}

  public subirArchivo(archivo: File) {
    return this.fireStorage.upload('/portadas/' + archivo.name, archivo);
  }

  public obtenerReferencia(archivo: string) {
    return this.fireStorage.ref('/portadas/' + archivo);
  }

  public getAllFiles() {
    let asd = this.fireStorage.ref('/portadas/').listAll();
    return asd;
  }

  public get(archivo: string) {
    const ref = this.fireStorage.ref(archivo);
    return ref.getDownloadURL();
  }
}
