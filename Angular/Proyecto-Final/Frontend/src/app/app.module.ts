import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoCreateComponent } from './components/empleado-create/empleado-create.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicioListaComponent } from './components/servicio-lista/servicio-lista.component';
import { ServicioEditComponent } from './components/servicio-edit/servicio-edit.component';
import { ServicioCreateComponent } from './components/servicio-create/servicio-create.component';
import { ProductoCreateComponent } from './components/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    UsuarioCreateComponent,
    UsuarioEditComponent,
    EmpleadoListComponent,
    EmpleadoCreateComponent,
    EmpleadoEditComponent,
    ServicioListaComponent,
    ServicioEditComponent,
    ServicioCreateComponent,
    ProductoCreateComponent,
    ProductoEditComponent,
    ProductoListComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxBootstrapConfirmModule,
    RouterModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
