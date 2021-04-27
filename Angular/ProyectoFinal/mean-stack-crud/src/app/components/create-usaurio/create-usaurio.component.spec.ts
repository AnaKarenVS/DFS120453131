import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsaurioComponent } from './create-usaurio.component';

describe('CreateUsaurioComponent', () => {
  let component: CreateUsaurioComponent;
  let fixture: ComponentFixture<CreateUsaurioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUsaurioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUsaurioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
