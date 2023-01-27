import { Pays } from './Pays';

export class Locataire {
  constructor(
    public id: number,
    public prenom: string,
    public nom: string,
    public motDePasse: string,
    public email: string,
    public dateHeureInscription: string,
    public pays: Pays
  ) {}
}
