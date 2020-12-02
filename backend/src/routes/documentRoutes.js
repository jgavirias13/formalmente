import express from 'express';

export class DocumentRoutes {
  constructor({ DocumentController, AuthMiddleware }) {
    this.DocumentController = DocumentController;
    this.AuthMiddleware = AuthMiddleware;
  }

  config() {
    let router = express.Router();
    router.get(
      '/:docId',
      this.AuthMiddleware.authenticateUser,
      this.AuthMiddleware.authorizeUser(
        ['readAny', 'readOwn'],
        this.DocumentController.resource
      ),
      this.DocumentController.get
    );

    router.get(
      '/',
      this.AuthMiddleware.authenticateUser,
      this.AuthMiddleware.authorizeUser(
        ['readAny'],
        this.DocumentController.resource
      ),
      this.DocumentController.getAll
    );

    router.post(
      '/',
      this.AuthMiddleware.authenticateUser,
      this.AuthMiddleware.authorizeUser(
        ['createAny', 'createOwn'],
        this.DocumentController.resource
      ),
      this.DocumentController.create
    );

    return router;
  }
}
