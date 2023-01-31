import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LienDeParenteService } from 'src/app/services/lien-de-parente.service';
import { PaysService } from 'src/app/services/pays.service';
import { Pays } from 'src/models/Pays';
import { LienDeParente } from '../../../../models/LiendeParente';
import { Inscription } from '../../../../models/Inscription';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-creation-utilisateur',
  templateUrl: './creation-utilisateur.component.html',
  styleUrls: ['./creation-utilisateur.component.css'],
})
export class CreationUtilisateurComponent {
  constructor(
    private paysService: PaysService,
    private lienDeParenteService: LienDeParenteService,
    private inscriptionService: InscriptionService
  ) {}

  confirmedPassword: string = '';
  pays: Pays[] = [];
  lienDeParente: LienDeParente[] = [];
  paysId: string = '';
  lienDeParenteId!: number;
  currentSelectedLienDeP!: LienDeParente;
  currentSelectedPays!: Pays;
  inscription!: Inscription;
  message: string = '';

  /**
   * Fonction qui traite l'envois de l'inscription
   * @param f
   */
  handleSubmit(f: NgForm) {
    this.inscription = f.value;
    this.inscription.lienDeParente = this.currentSelectedLienDeP;
    this.inscription.pays = this.currentSelectedPays;

    if (
      this.inscription.password === this.confirmedPassword &&
      this.inscription.password.length >= 8
    ) {
      this.inscriptionService.addNewUser(this.inscription).subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.message =
        'Le mot de passe et la confirmation doivent être identique et comporter au moins 8 caractères';
    }
  }

  /**
   * Fonction qui récupère la confirmation du password
   * @param e
   */
  getConfirmPassword(e: any): void {
    this.confirmedPassword = e.value;
  }

  /**
   * Recuperation des pays depuis le back
   */
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
  /**
   * Recuperation des liens de parentes depuis le back
   */
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

  /**
   * Recuperation de l'id de lien de parente depuis le select du template html
   * @param selectedLienDeParenteId
   */
  selectedValueParente(selectedLienDeParenteId: string) {
    this.lienDeParenteId = Number(selectedLienDeParenteId);
    this.getLienDePById();
  }

  /**
   * Recuperation de l'id du pays depuis le template html
   * @param selectedPaysId
   */
  selectedValuePays(selectedPaysId: string) {
    this.paysId = selectedPaysId;
    this.getPaysbyId();
  }

  /**
   * Fonction qui récupère un pays par son id depuis le back
   */
  getPaysbyId() {
    this.paysService.getPaysById(this.paysId).subscribe({
      next: (resp) => {
        this.currentSelectedPays = resp;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  /**
   * Fonction qui récupère un lien de parenté par son id depuis le back
   */
  getLienDePById() {
    this.lienDeParenteService
      .getLienDeParenteById(this.lienDeParenteId)
      .subscribe({
        next: (resp) => {
          this.currentSelectedLienDeP = resp;
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
