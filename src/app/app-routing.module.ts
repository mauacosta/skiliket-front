import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EstadisticasComponent} from './body/estadisticas/estadisticas.component';

const routes: Routes = [
	{path:'estadisticas',component:EstadisticasComponent}
	
	
	];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
