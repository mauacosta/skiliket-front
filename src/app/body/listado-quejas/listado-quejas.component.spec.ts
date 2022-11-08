import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoQuejasComponent } from './listado-quejas.component';

describe('ListadoQuejasComponent', () => {
  let component: ListadoQuejasComponent;
  let fixture: ComponentFixture<ListadoQuejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoQuejasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoQuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
