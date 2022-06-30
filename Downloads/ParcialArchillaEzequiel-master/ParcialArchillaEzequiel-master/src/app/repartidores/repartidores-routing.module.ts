import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from '../components/altaRepartidor/alta-repartidor/alta-repartidor.component';
import { DetalleRepartidorComponent } from '../components/detalleRepartidor/detalle-repartidor/detalle-repartidor.component';
import { AuthGuard } from '../guards/auth.guard';
import { RepartidoresComponent } from './repartidores.component';

const routes: Routes = [
  { path: '', component: RepartidoresComponent },
  {
    path: 'alta',
    component: AltaRepartidorComponent,
    canActivate: [AuthGuard],
  },
  { path: 'detalle', component: DetalleRepartidorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidoresRoutingModule {}
