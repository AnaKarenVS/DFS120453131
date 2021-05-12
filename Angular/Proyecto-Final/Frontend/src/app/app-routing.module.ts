import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ServicioListaComponent } from './components/servicio-lista/servicio-lista.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { ServicioEditComponent } from './components/servicio-edit/servicio-edit.component';
import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';

const routes: Routes = [
    {path: '' , pathMatch: 'full', redirectTo : 'create-usuario'}, 
    {path:  'create-usuario', component: UsuarioCreateComponent}, 
    {path: 'edit-usuario/:id', component: UsuarioEditComponent}, 
    {path: 'usuarios-list', component: UsuarioListComponent},
    {path: 'edit-empleado/:id' , component: EmpleadoEditComponent},
    {path: 'edit-producto/:id' , component: ProductoEditComponent},
    {path: 'edit-servicio/:id' , component: ServicioEditComponent},
    {path: 'empleado-lista', component: EmpleadoListComponent},
    {path: 'producto-lista', component: ProductoListComponent},
    {path: 'servicio-lista', component: ServicioListaComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
