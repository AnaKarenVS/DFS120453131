import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-beer',
  templateUrl: './fav-beer.component.html',
  styleUrls: ['./fav-beer.component.css']
})
export class FavBeerComponent implements OnInit {

  isActive : boolean = true;
  beerImg = 'https://images.punkapi.com/v2/50.png'
  imgHeight = 650;
  imgWidth = 250;

  constructor() { }

  ngOnInit(): void {
  }

}
