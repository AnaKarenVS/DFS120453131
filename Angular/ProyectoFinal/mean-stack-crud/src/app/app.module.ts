import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUsaurioComponent } from './components/create-usaurio/create-usaurio.component';
import { EditUsuarioComponent } from './components/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './components/list-usuario/list-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateUsaurioComponent,
    EditUsuarioComponent,
    ListUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
