import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from './../../services/servicio.service';

@Component({
  selector: 'app-servicio-create',
  templateUrl: './servicio-create.component.html',
  styleUrls: ['./servicio-create.component.css']
})
export class ServicioCreateComponent implements OnInit {

  constructor(public fb : FormBuilder, private servicioService :ServicioService) { }
  nuevoServicio: FormGroup;

  ngOnInit(): void {
    this.nuevoServicio = this.fb.group({
      nombre: ['', Validators.required],  
      descripcion: [''],
      costo: ['', Validators.required]
    });
  }

  altaServicio(){
   if(this.nuevoServicio.valid){
    this.servicioService.createServicio(this.nuevoServicio.value).subscribe( response=>{
    });
   }else{
     alert('Ingresa Datos');
   }

  }

}
