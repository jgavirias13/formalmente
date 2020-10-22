export class InvalidPasswordException extends Error{
  constructor(){
    this.name = 'InvalidPasswordException';
    this.message = 'Password Incorrecto';
    this.status = 401;
  }
}