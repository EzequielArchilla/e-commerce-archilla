import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subject } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLogged: Usuario;
  logged: boolean;
  loggedChange: Subject<boolean>;

  constructor(private afAuth: AngularFireAuth) {
    this.userLogged = new Usuario();
    this.logged = false;
    this.loggedChange = new Subject<boolean>();

    this.loggedChange.subscribe((value) => {
      this.logged = value;
    });
  }

  public signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  public signOut() {
    return this.afAuth.signOut();
  }

  setLogged(input: boolean) {
    this.loggedChange.next(input);
  }
}
