import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { MainComponent } from './body/main/main.component';
import { HeaderComponent } from './body/header/header.component';
import { FooterComponent } from './body/footer/footer.component';
import { BodyComponent } from './body/body.component';
import { TableroComponent } from './body/tablero/tablero.component';
import { EstadisticasComponent } from './body/estadisticas/estadisticas.component';
import { AppRoutingModule } from './app-routing.module';
import { NoticiasComponent } from './body/noticias/noticias.component';
import { PerfilComponent } from './body/perfil/perfil.component';
import { ReportesComponent } from './body/reportes/reportes.component';
import { FormQuejasComponent } from './body/form-quejas/form-quejas.component';
import { FormNoticiasComponent } from './body/form-noticias/form-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
	MainComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    TableroComponent,
    EstadisticasComponent,
    NoticiasComponent,
    PerfilComponent,
    ReportesComponent,
    FormQuejasComponent,
    FormNoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
