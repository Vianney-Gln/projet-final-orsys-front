import { Locataire } from './Locataire';
import { Parasol } from './Parasol';
import { Concessionnaire } from './Concessionnaire';
import { Statut } from './Statut';
export class Location {
  constructor(
    private id: number,
    private dateHeureDebut: string,
    private dateHeureFin: string,
    private montantEnEuros: number,
    private remarques: string,
    private locataire: Locataire,
    private parasols: Parasol[],
    private concessionnaire: Concessionnaire,
    private statut: Statut,
    private lienDeParente?: string
  ) {}
}
