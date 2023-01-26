import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UtilisateurDto } from '../../../../models/UtilisateurDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  utilisateurDto?: UtilisateurDto;

  handleSubmit(f: NgForm): void {
    this.loginService.login(f.value).subscribe({
      next: (resp) => {
        this.utilisateurDto = resp;
        if (this.utilisateurDto['role'] == 'concessionnaire') {
          console.log('cons');
        } else {
          console.log('utilisateur');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
