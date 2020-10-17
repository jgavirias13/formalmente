const awilix = require('awilix');
const {asClass, asValue, asFunction} = awilix;

const container = awilix.createContainer();

const App = require('./server');
const config = require('../config/config');
const Logger = require('../util/logger');

//Configurations
container.register({
    App: asClass(App).singleton(),
    Config: asClass(config).singleton(),
    Logger: asClass(Logger).singleton()
});

module.exports = container;