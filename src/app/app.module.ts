import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FormsModule }  from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PipesComponent } from './pipes/pipes.component';
import { HeaderComponent } from './header/header.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AgregarusuarioComponent } from './usuario/agregarusuario/agregarusuario.component';
import { EditarusuarioComponent } from './usuario/editarusuario/editarusuario.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticulodetalleComponent } from './articulodetalle/articulodetalle.component'

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    DirectivaComponent,
    EjemploComponent,
    PipesComponent,
    HeaderComponent,
    UsuarioComponent,
    AgregarusuarioComponent,
    EditarusuarioComponent,
    ArticuloComponent,
    ArticulodetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
