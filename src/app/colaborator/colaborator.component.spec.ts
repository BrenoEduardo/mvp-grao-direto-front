import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorComponent } from './colaborator.component';

describe('ColaboratorComponent', () => {
  let component: ColaboratorComponent;
  let fixture: ComponentFixture<ColaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
