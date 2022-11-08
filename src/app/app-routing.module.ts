import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



import { EstadisticasComponent } from './body/estadisticas/estadisticas.component';
import { TableroComponent } from './body/tablero/tablero.component';
import { NoticiasComponent } from './body/noticias/noticias.component';
import { MainComponent } from './body/main/main.component';
import { PerfilComponent } from './body/perfil/perfil.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { HeaderComponent } from './body/header/header.component';
import { ReportesComponent } from './body/reportes/reportes.component';
import { ListadoNoticiasComponent } from './body/listado-noticias/listado-noticias.component';
import { ListadoQuejasComponent } from './body/listado-quejas/listado-quejas.component';



const routes: Routes = [
	{ path: 'estadisticas', component: EstadisticasComponent },
	{ path: 'estadisticas/:Mes', component: EstadisticasComponent },
	{ path: 'tablero', component: TableroComponent },
	{ path: 'noticias', component: NoticiasComponent },
	{ path: 'main', component: MainComponent },
	{ path: 'sidebar', component: SidebarComponent },
	{ path: 'header', component: HeaderComponent },
	{ path: 'perfil', component: PerfilComponent },
	{ path: 'reportes', component: ReportesComponent },
	{ path: 'listadoQuejas', component: ListadoQuejasComponent },
	{ path: 'listadoNoticias', component: ListadoNoticiasComponent }
	
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
