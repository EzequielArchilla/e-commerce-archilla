import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './components/altaRepartidor/alta-repartidor/alta-repartidor.component';
import { IngresoComponent } from './components/autenticacion/ingreso/ingreso.component';
import { RegistroComponent } from './components/autenticacion/registro/registro.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida/bienvenida.component';
import { DetalleRepartidorComponent } from './components/detalleRepartidor/detalle-repartidor/detalle-repartidor.component';
import { TerminosYCondicionesComponent } from './components/terminos-ycondiciones/terminos-ycondiciones.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidaComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'terminosYCondiciones', component: TerminosYCondicionesComponent},
  {
    path: 'repartidores',
    loadChildren: () =>
      import('./repartidores/repartidores.module').then(
        (m) => m.RepartidoresModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
