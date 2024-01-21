import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteShowProductsComponent } from './cliente-show-products.component';

describe('ClienteShowProductsComponent', () => {
  let component: ClienteShowProductsComponent;
  let fixture: ComponentFixture<ClienteShowProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteShowProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteShowProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
