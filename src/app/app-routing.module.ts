import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



import {EstadisticasComponent} from './body/estadisticas/estadisticas.component';
import {TableroComponent} from './body/tablero/tablero.component';
import {NoticiasComponent} from './body/noticias/noticias.component';
import {MainComponent} from './body/main/main.component';

const routes: Routes = [
	{path:'estadisticas',component:EstadisticasComponent},
	{path:'tablero',component:TableroComponent},
	{path:'noticias',component:NoticiasComponent},
  {path:'main', component:MainComponent}
	
	
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
