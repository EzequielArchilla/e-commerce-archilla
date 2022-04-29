import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastController } from '@ionic/angular';


const auth = getAuth();

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {

  email:string;
  password:string;

  constructor(private toastController: ToastController,
    private router:Router) { }

  ngOnInit() {
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Registrado correctamente',
      duration: 2000,
      position: 'top',
      color: 'success'
    });

    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Error al registrarse',
      duration: 2000,
      position: 'top',
      color: 'warning'
    });

    toast.present();
  }


  signUp(){
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    this.successToast();

    setTimeout(() => {
      this.router.navigateByUrl('home');
    }, 1500);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.email="";
    this.password="";
    this.errorToast();
  });
  }
}
