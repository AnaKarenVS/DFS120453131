import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {

  constructor(public fb : FormBuilder, private router : Router,private actRoute : ActivatedRoute, private modalService: NgbModal, private productoService : ProductoService) { }
  nuevoProducto : FormGroup;

  ngOnInit(): void {
    this.nuevoProducto = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['']
    });
  }

  altaProducto(){
    console.log(this.nuevoProducto.value);
   if(this.nuevoProducto.valid){
    this.productoService.createProducto(this.nuevoProducto.value).subscribe( response=>{
    });
   }
   alert('Ingresa Datos');

  }

}
