import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



import {EstadisticasComponent} from './body/estadisticas/estadisticas.component';
import {TableroComponent} from './body/tablero/tablero.component';

const routes: Routes = [
	{path:'estadisticas',component:EstadisticasComponent},
	{path:'tablero',component:TableroComponent},
	
	
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
