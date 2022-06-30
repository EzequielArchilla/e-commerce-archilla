import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidoresRoutingModule } from './repartidores-routing.module';
import { RepartidoresComponent } from './repartidores.component';


@NgModule({
  declarations: [
    RepartidoresComponent
  ],
  imports: [
    CommonModule,
    RepartidoresRoutingModule
  ]
})
export class RepartidoresModule { }
