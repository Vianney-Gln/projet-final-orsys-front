import { LienDeParente } from './LiendeParente';
import { Pays } from './Pays';
export class Inscription {
  constructor(
    public nom: string,
    public prenom: string,
    public email: string,
    public pays: Pays,
    public password: string,
    public lienDeParente?: LienDeParente
  ) {}
}
