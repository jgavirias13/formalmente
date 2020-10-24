import express from 'express';

export class UserRoutes {
  constructor({ UserController, AuthMiddleware }) {
    this.UserController = UserController;
    this.AuthMiddleware = AuthMiddleware;
  }

  config() {
    let router = express.Router();
    router.get(
      '/:userId',
      this.AuthMiddleware.authenticateUser,
      this.AuthMiddleware.authorizeUser(['readAny', 'readOwn'], this.UserController.resource),
      this.UserController.get
    );
    router.get(
      '/',
      this.AuthMiddleware.authenticateUser,
      this.AuthMiddleware.authorizeUser(['readAny'], this.UserController.resource),
      this.UserController.getAll
    );
    router.patch(
      '/:userId',
      this.AuthMiddleware.authenticateUser,
      this.AuthMiddleware.authorizeUser(['updateAny', 'updateOwn'], this.UserController.resource),
      this.UserController.update
    );
    router.delete(
      '/:userId',
      this.AuthMiddleware.authenticateUser,
      this.AuthMiddleware.authorizeUser(['deleteAny'], this.UserController.resource),
      this.UserController.delete
    );

    return router;
  }
}
