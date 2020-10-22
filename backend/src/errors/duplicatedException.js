export class DuplicatedException extends Error{
  constructor(campo){
    this.name = 'DuplicatedException';
    this.message = `Error, ${campo} ya existe`;
    this.status = 401;
  }
}
