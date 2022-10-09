import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuejasComponent } from './form-quejas.component';

describe('FormQuejasComponent', () => {
  let component: FormQuejasComponent;
  let fixture: ComponentFixture<FormQuejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormQuejasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormQuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
