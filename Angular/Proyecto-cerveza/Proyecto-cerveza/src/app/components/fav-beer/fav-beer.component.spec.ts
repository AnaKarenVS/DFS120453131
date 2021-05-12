import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavBeerComponent } from './fav-beer.component';

describe('FavBeerComponent', () => {
  let component: FavBeerComponent;
  let fixture: ComponentFixture<FavBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavBeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
