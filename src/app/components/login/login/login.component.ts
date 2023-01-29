import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UtilisateurDto } from '../../../../models/UtilisateurDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  utilisateurDto?: UtilisateurDto;

  handleSubmit(f: NgForm): void {
    this.loginService.login(f.value).subscribe({
      next: (resp) => {
        this.utilisateurDto = resp;
        if (this.utilisateurDto['role'] == 'concessionnaire') {
          localStorage.setItem('utilisateurId', this.utilisateurDto['id']);
          this.router.navigateByUrl('/concessionnaire');
        } else {
          localStorage.setItem('utilisateurId', this.utilisateurDto['id']);
          this.router.navigateByUrl('/reservations');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
