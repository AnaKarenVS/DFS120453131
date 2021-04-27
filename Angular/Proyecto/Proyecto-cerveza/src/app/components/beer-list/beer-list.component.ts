import { Component, OnInit } from '@angular/core';
import { CervezaService } from 'src/app/services/cervezas.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  constructor(private cervezaService : CervezaService, private modalService: NgbModal) { }

  beer : Array<any>;
  addButton: boolean = false;
 

  ngOnInit(): void {

    this.cervezaService.getCervezas().subscribe(
      response =>{
        if(response.usuarios){
          this.beer = response.usuarios;
          console.log(this.beer);
        }
      }, 
      error => { 
        console.log(error);
      });

  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
  beers = [
    {
      imagen: 'https://images.punkapi.com/v2/69.png',
      nombre: 'Abtract',
      precio: 35,
      descripcion: 'Cerveza Artesanal, refrescante'
    },
    {
      imagen: 'https://images.punkapi.com/v2/60.png',
      nombre: 'BrewDog Dogma',
      precio: 45,
      descripcion: 'Cerveza Artesanal, refrescante'

    },
    {
      imagen: 'https://images.punkapi.com/v2/48.png',
      nombre: 'BrewDog Golding',
      precio: 85,
      descripcion: 'Cerveza Artesanal, refrescante'
    },
    {
      imagen: 'https://images.punkapi.com/v2/10.png',
      nombre: 'BrewDog Natural',
      precio: 105,
      descripcion: 'Cerveza Artesanal, refrescante'
    }

  ]
}
