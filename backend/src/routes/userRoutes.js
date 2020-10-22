import express from 'express';

export class UserRoutes{
  constructor({UserController}){
    this.UserController = UserController;
  }

  config(){
    let router = express.Router();
    router.get('/:userId', this.UserController.get);
    router.get('/', this.UserController.getAll);
    router.patch('/:userId', this.UserController.update);
    router.delete('/:userId', this.UserController.delete);
    
    return router;
  }
}