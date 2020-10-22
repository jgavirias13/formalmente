import express from 'express';

export class AuthRoutes{
  constructor({AuthController}){
    this.AuthController = AuthController;
  }

  config(){
    let router = express.Router();
    router.post('/signup', this.AuthController.signUp);
    router.post('/signin', this.AuthController.signIn);

    return router;
  }
}