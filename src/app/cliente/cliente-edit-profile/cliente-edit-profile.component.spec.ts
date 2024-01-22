import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditProfileComponent } from './cliente-edit-profile.component';

describe('ClienteEditProfileComponent', () => {
  let component: ClienteEditProfileComponent;
  let fixture: ComponentFixture<ClienteEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
