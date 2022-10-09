import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { TableroComponent } from './body/tablero/tablero.component';
import { EstadisticasComponent } from './body/estadisticas/estadisticas.component';
import { AppRoutingModule } from './app-routing.module';
import { NoticiasComponent } from './body/noticias/noticias.component';
import { PerfilComponent } from './body/perfil/perfil.component';
import { AdministarCuentasComponent } from './body/administrarCuentas/administrarCuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    TableroComponent,
    EstadisticasComponent,
    NoticiasComponent,
    PerfilComponent,
    AdministarCuentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
