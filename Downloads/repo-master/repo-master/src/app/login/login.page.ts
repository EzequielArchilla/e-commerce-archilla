import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

const auth = getAuth();

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  email:string;
  password:string;

  constructor(private toastController: ToastController,
    private router:Router) { }

  ngOnInit() {
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Logueado correctamente',
      duration: 2000,
      position: 'top',
      color: 'success'
    });

    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Mail o contraseña incorrecto',
      duration: 2000,
      position: 'top',
      color: 'warning'
    });

    toast.present();
  }

  signIn(){
    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    this.successToast();
    setTimeout(() => {
      this.router.navigateByUrl('main');
    }, 1000);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.errorToast();
    this.email="";
    this.password="";
  });
}
}
