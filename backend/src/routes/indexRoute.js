import express from 'express';
const { Router, json } = express;
import cors from 'cors';
import pkg from 'express-async-errors';

export class IndexRoute {
  constructor({ Docs, Config, UserRoutes, ErrorMiddleware }) {
    this.documentation = Docs;
    this.Config = Config;
    this.UserRoutes = UserRoutes;
    this.ErrorMiddleware = ErrorMiddleware;
  }

  config() {
    let router = Router();
    let apiRoutes = Router();

    router.use(cors({ origin: '*' }));
    apiRoutes.use(express.json());
    
    apiRoutes.use('/user', this.UserRoutes.config());

    router.use('/api/v1', apiRoutes);

    router.use(
      '/api-docs',
      this.documentation.swaggerUi.serve,
      this.documentation.swaggerUi.setup(this.documentation.swaggerDocument)
    );

    router.use(this.ErrorMiddleware.handleError);

    return router;
  }
}
