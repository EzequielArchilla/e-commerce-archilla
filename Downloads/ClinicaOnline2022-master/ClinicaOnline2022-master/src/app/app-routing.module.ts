import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida/bienvenida.component';
import { ErrorComponent } from './componentes/error/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'autenticacion', loadChildren: () => import('./modulos/autenticacion/autenticacion.module').then(m => m.AutenticacionModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
