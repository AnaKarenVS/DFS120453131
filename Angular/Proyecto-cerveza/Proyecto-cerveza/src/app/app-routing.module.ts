import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'registro', component: RegisterComponent, pathMatch: 'full'},
  {path : "cervezas" , component:BeerListComponent,  canActivate: [AuthGuardGuard]},
  { path: '**', component: NotFoundComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
