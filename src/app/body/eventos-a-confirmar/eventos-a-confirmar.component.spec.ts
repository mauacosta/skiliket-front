import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAConfirmarComponent } from './eventos-a-confirmar.component';

describe('EventosAConfirmarComponent', () => {
  let component: EventosAConfirmarComponent;
  let fixture: ComponentFixture<EventosAConfirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosAConfirmarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosAConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
