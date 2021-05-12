import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

const routes: Routes = [

{path: '' , pathMatch: 'full', redirectTo : 'create-usuario'}, 
{path:  'create-usuario', component: UsuarioCreateComponent}, 
{path: 'edit-usuario/:id', component: UsuarioEditComponent}, 
{path: 'usuarios-list', component: UsuarioListComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
