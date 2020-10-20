import express from "express";

class Server {
  constructor({ Config, Docs }) {
    this.app = express();
    this.config = Config;
    this.documentation = Docs;

    this.app.use(
      "/api-docs",
      this.documentation.swaggerUi.serve,
      this.documentation.swaggerUi.setup(this.documentation.swaggerDocument)
    );
  }

  start() {
    return new Promise((resolve, reject) => {
      this.app
        .listen(this.config.parms.PORT, () => {
          resolve();
        })
        .on("error", function (err) {
          reject(err);
        });
    });
  }
}

export default Server;
