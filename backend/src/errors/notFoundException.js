export class NotFoundException extends Error{
  constructor(id){
    this.name = 'NotFoundException';
    this.message = `Error, ${id} no fue encontrado`;
    this.status = 404;
  }
}
