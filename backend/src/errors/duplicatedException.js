export class DuplicatedException extends Error{
  constructor(campo){
    super(`Error, ${campo} ya existe`)
    this.name = 'DuplicatedException';
    this.status = 401;
  }
}
