import container from "./src/server/container.js";
const server = container.resolve("App");
const logger = container.resolve("Logger");
const config = container.resolve("Config");

server.start().then(
  () => {
    logger.writeSuccess(
      `Backend de ${config.parms.APPLICATION_NAME} ejecutandose en el puerto ${config.parms.PORT}`
    );
  },
  (err) => {
    logger.writeError("Error presentado al iniciar el servidor");
    logger.writeError(err.message);
  }
);
