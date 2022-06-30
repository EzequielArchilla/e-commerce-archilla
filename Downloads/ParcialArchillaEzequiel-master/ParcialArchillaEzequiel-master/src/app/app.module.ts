import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseModule } from './firebase/firebase.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IngresoComponent } from './components/autenticacion/ingreso/ingreso.component';
import { RegistroComponent } from './components/autenticacion/registro/registro.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida/bienvenida.component';
import { NavBarComponent } from './components/navBar/nav-bar/nav-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { AltaRepartidorComponent } from './components/altaRepartidor/alta-repartidor/alta-repartidor.component';
import { TablaPaisesComponent } from './components/tablaPaises/tabla-paises/tabla-paises.component';
import { DetalleRepartidorComponent } from './components/detalleRepartidor/detalle-repartidor/detalle-repartidor.component';
import { ListadoRepartidorComponent } from './components/listadoRepartidor/listado-repartidor/listado-repartidor.component';
import { DetalleRepartidorSeleccionadoComponent } from './components/detalleRepartidorSeleccionado/detalle-repartidor-seleccionado/detalle-repartidor-seleccionado.component';
import { DetallePaisComponent } from './components/detallePais/detalle-pais/detalle-pais.component';
import { TerminosYCondicionesComponent } from './components/terminos-ycondiciones/terminos-ycondiciones.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    RegistroComponent,
    BienvenidaComponent,
    NavBarComponent,
    AltaRepartidorComponent,
    TablaPaisesComponent,
    DetalleRepartidorComponent,
    ListadoRepartidorComponent,
    DetalleRepartidorSeleccionadoComponent,
    DetallePaisComponent,
    TerminosYCondicionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
    }), // ToastrModule added
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
