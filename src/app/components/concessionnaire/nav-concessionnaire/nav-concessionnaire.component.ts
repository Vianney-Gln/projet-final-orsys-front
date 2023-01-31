import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-concessionnaire',
  templateUrl: './nav-concessionnaire.component.html',
  styleUrls: ['./nav-concessionnaire.component.css'],
})
export class NavConcessionnaireComponent {
  constructor(private router: Router) {}

  deconnexion() {
    localStorage.removeItem('utilisateurId');
    this.router.navigateByUrl('/');
  }
}
