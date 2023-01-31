import { File } from 'src/models/File';
export class Parasol {
  constructor(
    public id: number,
    public numeroEmplacement: number,
    public file: File
  ) {}
}
