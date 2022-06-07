import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from 'src/app/componentes/ingreso/ingreso/ingreso.component';
import { RegistroComponent } from 'src/app/componentes/registro/registro/registro.component';
import { AutenticacionComponent } from './autenticacion.component';

const routes: Routes = [
  { path: '', redirectTo: 'ingreso', pathMatch: 'full' },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutenticacionRoutingModule {}
