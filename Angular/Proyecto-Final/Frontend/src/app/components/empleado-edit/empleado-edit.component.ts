import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from './../../services/empleado.service';
import { Empleado } from './../../model/empleado.model';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css'],
})
export class EmpleadoEditComponent implements OnInit {
  editEmpleado: FormGroup;
  EmpleadoType: any = ['Administrador', 'Licenciado', 'Vendedor', 'Cajero'];
  public is_edit: boolean;
  public empleado: any;
  empleadoID: any;
  constructor(
    public fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private empleadoService: EmpleadoService
  ) {
    this.is_edit = true;
  }

  ngOnInit(): void {
    this.editEmpleado = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      position: ['', [Validators.required]],
      numberEmpleado: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
      cellphone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });

    this._route.params.subscribe((params) => {
      this.empleadoID = params['id'];
      this.empleadoService
        .getEmpleado(this.empleadoID)
        .subscribe((response) => {
          this.empleado = response;

          this.editEmpleado.patchValue(this.empleado);
          console.log(this.empleado);
          console.log(this.empleadoID);
        });
    });
  }

  onSubmitEdit() {
    console.log(this.editEmpleado.value);
    if (this.editEmpleado.valid) {
      this.empleadoService
        .actualizarEmpleado(this.editEmpleado.value, this.empleadoID)
        .subscribe((response) => { 
          this.editEmpleado.reset();
        });
    } else {
      alert('Ingresa Datos');
    }
  }
}
