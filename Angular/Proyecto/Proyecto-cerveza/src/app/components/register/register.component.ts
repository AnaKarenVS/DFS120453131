import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password:  string;
  nombre: string;
  
  constructor() { }

  login(){
    console.log(this.email);
    console.log(this.password);
    console.log(this.nombre);
  }
  ngOnInit(): void {
  }

}
