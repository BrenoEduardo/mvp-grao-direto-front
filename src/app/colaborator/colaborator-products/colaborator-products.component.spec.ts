import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorProductsComponent } from './colaborator-products.component';

describe('ColaboratorProductsComponent', () => {
  let component: ColaboratorProductsComponent;
  let fixture: ComponentFixture<ColaboratorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboratorProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboratorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
