import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/clases/usuario/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioFirestoreService {
  private usuariosRef: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.usuariosRef = this.db.collection('usuarios');
  }

  public crearUsuario(user: Usuario) {
    return this.usuariosRef.add({ ...user });
  }

  public update(id: string, data: any) {
    return this.usuariosRef.doc(id).update(data);
  }

  public delete(id: string) {
    return this.usuariosRef.doc(id).delete();
  }
}
