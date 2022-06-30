import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Repartidor } from 'src/app/clases/repartidor/repartidor';

@Injectable({
  providedIn: 'root',
})
export class RepartidorFirestoreService {
  private repartidorRef: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.repartidorRef = this.db.collection('repartidores');
  }

  public crearRepartidor(repartidor: Repartidor) {
    return this.repartidorRef.add({ ...repartidor });
  }

  public obtenerRepartidor() {
    return this.repartidorRef.valueChanges() as Observable<Repartidor[]>;
  }

  public update(id: string, data: any) {
    return this.repartidorRef.doc(id).update(data);
  }

  public delete(id: string) {
    return this.repartidorRef.doc(id).delete();
  }
}
