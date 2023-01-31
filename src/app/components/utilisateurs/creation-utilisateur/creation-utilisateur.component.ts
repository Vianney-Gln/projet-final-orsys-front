import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LienDeParenteService } from 'src/app/services/lien-de-parente.service';
import { PaysService } from 'src/app/services/pays.service';
import { Pays } from 'src/models/Pays';
import { LienDeParente } from '../../../../models/LiendeParente';

@Component({
  selector: 'app-creation-utilisateur',
  templateUrl: './creation-utilisateur.component.html',
  styleUrls: ['./creation-utilisateur.component.css'],
})
export class CreationUtilisateurComponent {
  constructor(
    private paysService: PaysService,
    private lienDeParenteService: LienDeParenteService
  ) {}

  confirmedPassword: string = '';
  pays: Pays[] = [];
  lienDeParente: LienDeParente[] = [];

  /**
   * Fonction qui traite l'envois de l'inscription
   * @param f
   */
  handleSubmit(f: NgForm) {
    console.log(f.value);
  }

  /**
   * Fonction qui récupère la confirmation du password
   * @param e
   */
  getConfirmPassword(e: any) {
    this.confirmedPassword = e.value;
    console.log(this.confirmedPassword);
  }

  getPays(): void {
    this.paysService.getPays().subscribe({
      next: (resp) => {
        this.pays = resp;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getLienDeParentes(): void {
    this.lienDeParenteService.getLienDeParentes().subscribe({
      next: (resp) => {
        this.lienDeParente = resp;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this.getPays();
    this.getLienDeParentes();
  }
}
