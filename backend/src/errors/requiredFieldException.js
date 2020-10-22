export class RequiredFieldException extends Error{
  constructor(campo){
    super(`No se ha enviado el campo ${campo} que es obligatorio`);
    this.name = 'RequieredFieldException';
    this.status = 404;
  }
}
