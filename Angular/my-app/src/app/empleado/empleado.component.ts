import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre = 'Ana'
  edad =  29;
  email = 'ana.angeles12@gmail.com';
  activo = true;
  ventas = [1150, 550, 300, 890];

  isActive(){
    if(this.activo == true){
      return 'Esta activo'
    }else{
      return 'No esta activo'
    }
  }

}
