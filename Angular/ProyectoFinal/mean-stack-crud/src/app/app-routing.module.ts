import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsaurioComponent } from './components/create-usaurio/create-usaurio.component';
import { EditUsuarioComponent } from './components/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './components/list-usuario/list-usuario.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'create-usuario'},
  {path: 'create-usuario', component: CreateUsaurioComponent },
  {path: 'edit-usuario', component: EditUsuarioComponent},
  {path: 'usuarios-list', component: ListUsuarioComponent}

];


@NgModule({
exports: [RouterModule]
})
export class AppRoutingModule { }
