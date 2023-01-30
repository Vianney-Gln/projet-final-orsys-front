import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationConcessionnaireComponent } from './list-reservation-concessionnaire.component';

describe('ListReservationConcessionnaireComponent', () => {
  let component: ListReservationConcessionnaireComponent;
  let fixture: ComponentFixture<ListReservationConcessionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReservationConcessionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReservationConcessionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
