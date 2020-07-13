import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitulosComponent } from './titulos/titulos.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AgregarusuarioComponent } from './usuario/agregarusuario/agregarusuario.component';
import { EditarusuarioComponent } from './usuario/editarusuario/editarusuario.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticulodetalleComponent } from './articulodetalle/articulodetalle.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';


const routes: Routes = [
  {path: '', component: TitulosComponent},
  {path: 'page2', component: DirectivaComponent},
  {path: 'new', component: PipesComponent},
  {path: 'buy', component: ArticuloComponent},
  {path: 'info', component: ArticulodetalleComponent},
  {path: 'users', component: UsuarioComponent, children: [
    {path: 'add', component: AgregarusuarioComponent},
    {path: 'edit', component: EditarusuarioComponent}
  ]},
  {path: '**', component: EjemploComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
