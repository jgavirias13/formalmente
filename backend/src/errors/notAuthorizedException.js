export class NotAuthorizedException extends Error{
  constructor(){
    super('No estas autorizado para usar este recurso');
    this.name = 'NotAuthorizedException';
    this.status = 401;
  }
}
