export class NotFoundException extends Error{
  constructor(id){
    super(`Error, ${id} no fue encontrado`);
    this.name = 'NotFoundException';
    this.status = 404;
  }
}
