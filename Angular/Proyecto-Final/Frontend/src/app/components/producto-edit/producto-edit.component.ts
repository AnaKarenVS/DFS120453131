import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'src/app/model/producto.model';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css'],
})
export class ProductoEditComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    private _route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private productoService: ProductoService
  ) {}
  editProducto: FormGroup;
  productoId: any;
  producto: any;
  ngOnInit(): void {
    this.editProducto = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: [''],
    });

    this._route.params.subscribe((params) => {
      this.productoId = params['id'];
      this.productoService
        .getProducto(this.productoId)
        .subscribe((response) => {
          this.producto = response;
          this.editProducto.patchValue(this.producto);
        });
    });
  }

  onSubmitEdit() {
    console.log(this.editProducto.value);
    if (this.editProducto.valid) {
      this.productoService
        .actualizarProducto(this.editProducto.value, this.productoId)
        .subscribe((response) => {});
    } else {
      alert('Ingresa Datos');
    }
  }
}
