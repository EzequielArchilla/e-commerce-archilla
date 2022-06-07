import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { IngresoComponent } from './componentes/ingreso/ingreso/ingreso.component';
import { RegistroComponent } from './componentes/registro/registro/registro.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida/bienvenida.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ErrorComponent } from './componentes/error/error/error.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirebaseModule } from './modulos/firebase/firebase.module';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavBarComponent,
    ErrorComponent,
    IngresoComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    FormsModule,
    FirebaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
