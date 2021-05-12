import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCervezaComponent } from './agregar-cerveza.component';

describe('AgregarCervezaComponent', () => {
  let component: AgregarCervezaComponent;
  let fixture: ComponentFixture<AgregarCervezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCervezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCervezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
