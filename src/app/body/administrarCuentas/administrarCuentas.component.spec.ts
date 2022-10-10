import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministarCuentasComponent } from './administrarCuentas.component';

describe('AdministarCuentasComponent', () => {
  let component: AdministarCuentasComponent;
  let fixture: ComponentFixture<AdministarCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministarCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministarCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
