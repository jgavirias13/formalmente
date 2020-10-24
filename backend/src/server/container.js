import awilix from 'awilix';
const {asClass, asValue, asFunction} = awilix;

const container = awilix.createContainer();

//Configurations imports
import {Server} from './server.js';
import {Config} from '../config/config.js';
import {Logger} from '../util/logger.js';
import {Db} from './db.js';
import Docs from '../config/documentation.js';
import {Roles} from '../config/roles.js';

//Routes imports
import {IndexRoute} from '../routes/indexRoute.js';
import {UserRoutes} from '../routes/userRoutes.js';
import {AuthRoutes} from '../routes/authRoutes.js'

//Models imports
import User from '../models/user.js';

//Repositories imports
import {BaseRepository} from '../repositories/baseRepository.js';
import {UserRepository} from '../repositories/userRepository.js';

//Services
import {BaseService} from '../services/baseService.js';
import {UserService} from '../services/userService.js';
import {AuthService} from '../services/authService.js';

//Controllers
import {UserController} from '../controllers/userController.js';
import {AuthController} from '../controllers/authController.js';

//Helpers
import {JwtHelper} from '../helpers/jwtHelper.js';

//Middlewares
import {ErrorMiddleware} from '../middlewares/errorMiddleware.js';
import {AuthMiddleware} from '../middlewares/authMiddleware.js';

//Configurations registration
container.register({
    App: asClass(Server).singleton(),
    Config: asClass(Config).singleton(),
    Logger: asClass(Logger).singleton(),
    Docs: asValue(Docs),
    Db: asClass(Db).singleton(),
    Roles: asClass(Roles).singleton()
});

//Routes registration
container.register({
    IndexRoute: asClass(IndexRoute).singleton(),
    UserRoutes: asClass(UserRoutes).singleton(),
    AuthRoutes: asClass(AuthRoutes).singleton()
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

//Services registration
container.register({
    BaseService: asClass(BaseService).singleton(),
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton()
});

//Controllers registration
container.register({
    UserController: asClass(UserController).singleton(),
    AuthController: asClass(AuthController).singleton()
});

//Helpers registration
container.register({
    JwtHelper: asClass(JwtHelper).singleton()
});

//Middlewares registration
container.register({
    ErrorMiddleware: asClass(ErrorMiddleware).singleton(),
    AuthMiddleware: asClass(AuthMiddleware).singleton()
});

export default container;