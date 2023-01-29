import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavConcessionnaireComponent } from './nav-concessionnaire.component';

describe('NavConcessionnaireComponent', () => {
  let component: NavConcessionnaireComponent;
  let fixture: ComponentFixture<NavConcessionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavConcessionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavConcessionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
