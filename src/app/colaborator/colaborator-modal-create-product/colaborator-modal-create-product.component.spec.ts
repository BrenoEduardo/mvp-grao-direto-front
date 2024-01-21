import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorModalCreateProductComponent } from './colaborator-modal-create-product.component';

describe('ColaboratorModalCreateProductComponent', () => {
  let component: ColaboratorModalCreateProductComponent;
  let fixture: ComponentFixture<ColaboratorModalCreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboratorModalCreateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboratorModalCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
