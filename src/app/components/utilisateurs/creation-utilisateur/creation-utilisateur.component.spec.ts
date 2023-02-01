import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationUtilisateurComponent } from './creation-utilisateur.component';

describe('CreationUtilisateurComponent', () => {
  let component: CreationUtilisateurComponent;
  let fixture: ComponentFixture<CreationUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
