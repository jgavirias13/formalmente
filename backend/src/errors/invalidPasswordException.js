export class InvalidPasswordException extends Error{
  constructor(){
    super('Password Incorrecto');
    this.name = 'InvalidPasswordException';
    this.status = 401;
  }
}