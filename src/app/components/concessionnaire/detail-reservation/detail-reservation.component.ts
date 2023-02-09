import { ReservationsService } from 'src/app/services/reservations.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../../../../models/Locations';
import { ParasolService } from 'src/app/services/parasol.service';
import { Parasol } from 'src/models/Parasol';
import { Observable, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { TraitementReservation } from 'src/models/TraitementReservation';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css'],
})
export class DetailReservationComponent {
  constructor(
    private serviceReservation: ReservationsService,
    private activatedRoute: ActivatedRoute,
    private parasolService: ParasolService
  ) {}

  detailReservation?: Reservation;
  listParasolByFile: Map<string, Parasol[]> = new Map();
  selectedParasol: Map<number, string> = new Map();
  currentIdReservation: string | null = '';

  ngOnInit() {
    this.getRouteParam();
  }

  /**
   * Envois les ids des emplacements de parasols au back pour update les emplacements de la réservation
   */
  validerReservation() {
    const listIdsParasolToUpdate: number[] = [];
    this.selectedParasol.forEach((val) => {
      listIdsParasolToUpdate.push(Number(val));
    });
    const acceptation = new TraitementReservation(2, listIdsParasolToUpdate);

    this.serviceReservation
      .traitementReservation(Number(this.currentIdReservation), acceptation)
      .subscribe({
        next: () => {
          alert('Demande de réservation mise à jour.');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  /**
   * Recupère l'ensemble clé/valeur depuis le select
   * @param parasolId
   * @param index
   */
  selectedValue(parasolId: string, index: number) {
    this.selectedParasol.set(index, parasolId);
  }

  getParasols(): Subscription {
    const fileIds: number[] = this.detailReservation!.parasols.map(
      (para) => para.file.id!
    );

    return this.parasolService
      .getParasolsByFile(fileIds, this.detailReservation!.dateHeureDebut)
      .subscribe({
        next: (resp) => {
          Object.entries(resp).forEach(([key, value]) => {
            this.listParasolByFile.set(key, value);
          });
        },
      });
  }

  getParasolByFileId(fileId: string): Parasol[] {
    return this.listParasolByFile.get(fileId)!;
  }

  /**
   * Fonction qui récupère le paramètre id de la route
   */
  getRouteParam(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.currentIdReservation = p.get('id');
        this.serviceReservation.getLocationById(Number(p.get('id'))).subscribe({
          next: (resp) => {
            this.detailReservation = resp;
            this.getParasols();
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }
}
