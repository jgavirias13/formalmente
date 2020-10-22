export class RequiredFieldException extends Error{
  constructor(campo){
    this.name = 'RequieredFieldException';
    this.message = `No se ha enviado el campo ${campo} que es obligatorio`;
    this.status = 404;
  }
}
