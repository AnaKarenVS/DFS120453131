import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CervezaService } from 'src/app/services/cervezas.service';
import { Cerveza } from './../../models/cerveza.model';

@Component({
  selector: 'app-agregar-cerveza',
  templateUrl: './agregar-cerveza.component.html',
  styleUrls: ['./agregar-cerveza.component.css']
})
export class AgregarCervezaComponent implements OnInit {
  cervezaForm: FormGroup;
  dataCerveza : Cerveza[] = [];
  constructor(private cervezaService: CervezaService) { }

  ngOnInit(): void {
    this.cervezaForm = new FormGroup({
      imagen: new FormControl(''),
      codigo: new FormControl(''),
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      precio: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required,Validators.minLength(5)]),
    });
  }

  guardar(){
    console.log(this.cervezaForm.value);
    this.dataCerveza = this.cervezaForm.value;
    this.cervezaService.addCervezas(this.dataCerveza).subscribe(
      response=>{
        console.log(response);
      });
  }

  }

