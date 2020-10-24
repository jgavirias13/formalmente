import container from './src/server/container.js';
const server = container.resolve('App');
const logger = container.resolve('Logger');
const config = container.resolve('Config');
const db = container.resolve('Db');

logger.writeInfo('Iniciando el servidor...');

logger.writeInfo('Conectando con base de datos...');
db.connect().then(
  () => {
    logger.writeSuccess('Conexion a Base de datos exitosa');
  }, (err) => {
    logger.writeError('No se ha podido establecer conexion con la base de datos');
    logger.writeError(err.message);
    logger.writeError('Finalizando el servidor');
    process.exit(1);
  }
)

server.start().then(
  () => {
    logger.writeSuccess(
      `Backend de ${config.parms.APPLICATION_NAME} ejecutandose en el puerto ${config.parms.PORT}`
    );
  },
  (err) => {
    logger.writeError('Error presentado al iniciar el servidor');
    logger.writeError(err.message);
  }
);
