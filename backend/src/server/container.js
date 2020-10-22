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

//Models imports
import User from '../models/user.js';

//Repositories imports
import {BaseRepository} from '../repositories/baseRepository.js';
import {UserRepository} from '../repositories/userRepository.js';

//Errors
import {DuplicatedException} from '../errors/duplicatedException.js';
import {NotAuthorizedException} from '../errors/notAuthorizedException.js';
import {NotFoundException} from '../errors/notFoundException.js';
import {RequiredFieldException} from '../errors/requiredFieldException.js';

//Services
import {BaseService} from '../services/baseService.js';
import {UserService} from '../services/userService.js';

//Controllers
import {UserController} from '../controllers/userController';

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

//Models registration
container.register({
    User: asValue(User)
});

//Repositories registration
container.register({
    BaseRepository: asClass(BaseRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton()
});

//Errors registration
container.register({
    DuplicatedException: DuplicatedException,
    NotAuthorizedException: NotAuthorizedException,
    NotFoundException: NotFoundException,
    RequiredFieldException: RequiredFieldException
});

//Services registration
container.register({
    BaseService: BaseService,
    UserService: UserService
});

//Controllers registration
container.register({
    UserController: UserController
});

export default container;