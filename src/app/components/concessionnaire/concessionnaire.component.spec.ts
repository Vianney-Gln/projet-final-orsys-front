import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionnaireComponent } from './concessionnaire.component';

describe('ConcessionnaireComponent', () => {
  let component: ConcessionnaireComponent;
  let fixture: ComponentFixture<ConcessionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcessionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
