import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioService } from './../../services/servicio.service';

@Component({
  selector: 'app-servicio-edit',
  templateUrl: './servicio-edit.component.html',
  styleUrls: ['./servicio-edit.component.css']
})
export class ServicioEditComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private _route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private servicioService: ServicioService
  ) {}
  editServicio: FormGroup;
  servicioId: any;
  servicio: any;
  
  ngOnInit(): void {
    this.editServicio = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      descripcion: [''],
    });


    this._route.params.subscribe((params) => {
      this.servicioId = params['id'];
      this.servicioService
        .getServicio(this.servicioId)
        .subscribe((response) => {
          this.servicio = response;

          this.editServicio.patchValue(this.servicio);
          console.log(this.servicio);
          console.log(this.servicioId);
        });
    });
  }


  onSubmitEdit() {
    console.log(this.editServicio.value);
    if (this.editServicio.valid) {
      this.servicioService
        .actualizarServicio(this.editServicio.value, this.servicioId)
        .subscribe((response) => {});
    } else {
      alert('Ingresa Datos');
    }
  }

}
