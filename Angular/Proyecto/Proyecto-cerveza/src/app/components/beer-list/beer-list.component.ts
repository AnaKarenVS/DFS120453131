import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    }
  ]
}
