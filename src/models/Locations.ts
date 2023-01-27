import { Locataire } from './Locataire';
import { Parasol } from './Parasol';
import { Concessionnaire } from './Concessionnaire';
import { Statut } from './Statut';
export class Reservation {
  constructor(
    public id: number,
    public dateHeureDebut: string,
    public dateHeureFin: string,
    public montantEnEuros: number,
    public remarques: string,
    public locataire: Locataire,
    public parasols: Parasol[],
    public concessionnaire: Concessionnaire,
    public statut: Statut,
    public lienDeParente?: string
  ) {}
}
