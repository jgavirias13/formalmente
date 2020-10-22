import express from 'express';
const { Router, json } = express;
import cors from 'cors';

class IndexRoute {
  constructor({ Docs, Config }) {
    this.documentation = Docs;
    this.Config = Config;
  }

  config() {
    let router = Router();
    router.use(cors({ origin: '*' }));

    router.use(
      '/api-docs',
      this.documentation.swaggerUi.serve,
      this.documentation.swaggerUi.setup(this.documentation.swaggerDocument)
    );

    return router;
  }
}

export default IndexRoute;
