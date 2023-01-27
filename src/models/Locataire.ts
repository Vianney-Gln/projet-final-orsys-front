import { Pays } from './Pays';

export class Locataire {
  constructor(
    private id: number,
    private prenom: string,
    private nom: string,
    private motDePasse: string,
    private email: string,
    private dateHeureInscription: string,
    private pays: Pays
  ) {}
}
