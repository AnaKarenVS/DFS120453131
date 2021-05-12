import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-create',
  templateUrl: './empleado-create.component.html',
  styleUrls: ['./empleado-create.component.css']
})
export class EmpleadoCreateComponent implements OnInit {

  constructor(public fb : FormBuilder, private router : Router,private actRoute : ActivatedRoute, private modalService: NgbModal, private empleadoService: EmpleadoService ){ }

  nuevoEmpleado: FormGroup;
  EmpleadoType: any = ['Administrador', 'Licenciado', 'Vendedor', 'Cajero']
  @Output() contentAlta: EventEmitter<any> = new EventEmitter();  //Salida de evento para cerrar modal

  ngOnInit(): void {
    this.nuevoEmpleado = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      position: ['', Validators.required],
      numberEmpleado: ['', Validators.required],
      cellphone: [''],
    });
  }

  altaEmpleado(){
    if(this.nuevoEmpleado.valid){
      console.log(this.nuevoEmpleado.value);
      this.empleadoService.createEmpleado(this.nuevoEmpleado.value).subscribe( response=>{
      });
    }else{
      alert('Ingresa Datos');
    }
      
    }
  }


