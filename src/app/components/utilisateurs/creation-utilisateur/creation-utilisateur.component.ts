import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-creation-utilisateur',
  templateUrl: './creation-utilisateur.component.html',
  styleUrls: ['./creation-utilisateur.component.css'],
})
export class CreationUtilisateurComponent {
  handleSubmit(f: NgForm) {
    console.log(f.valid);
  }
}
