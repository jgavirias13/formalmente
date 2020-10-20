import awilix from 'awilix';
const {asClass, asValue, asFunction} = awilix;

const container = awilix.createContainer();

//Configurations imports
import App from './server.js';
import config from '../config/config.js';
import Logger from '../util/logger.js';
import Docs from '../config/documentation.js';

//Routes imports
import IndexRoute from '../routes/indexRoute.js';

//Configurations registration
container.register({
    App: asClass(App).singleton(),
    Config: asClass(config).singleton(),
    Logger: asClass(Logger).singleton(),
    Docs: asValue(Docs)
});

//Routes registration
container.register({
    IndexRoute: asClass(IndexRoute).singleton()
});

export default container;