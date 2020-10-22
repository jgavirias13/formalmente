export class NotAuthorizedException extends Error{
  constructor(){
    this.name = 'NotAuthorizedException';
    this.message = 'No estas autorizado para usar este recurso';
    this.status = 401;
  }
}
