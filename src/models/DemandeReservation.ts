import { Locataire } from './Locataire';
import { Concessionnaire } from './Concessionnaire';
import { Statut } from './Statut';
import { RequestedFile } from './RequestedFile';
export class DemandeReservation {
  constructor(
    public dateHeureDebut?: string,
    public dateHeureFin?: string,
    public remarques?: string,
    public requestedFiles?: RequestedFile[],
    public idLocataire?: number
  ) {}
}
