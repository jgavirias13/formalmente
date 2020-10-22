import express from 'express';

export class Server {
  constructor({ Config, IndexRoute }) {
    this.app = express();
    this.config = Config;
    let router = IndexRoute.config();
    this.app.use(router);
  }

  start() {
    return new Promise((resolve, reject) => {
      this.app
        .listen(this.config.parms.PORT, () => {
          resolve();
        })
        .on('error', function (err) {
          reject(err);
        });
    });
  }
}

