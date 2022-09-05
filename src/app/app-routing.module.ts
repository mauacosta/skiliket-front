import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EstadisticasComponent} from './body/estadisticas/estadisticas.component';


const routes: Routes = [
{path:'estadisticas',component:EstadisticasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }