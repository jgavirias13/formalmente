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
import {AuthRoutes} from '../routes/authRoutes.js';
import {DocumentRoutes} from '../routes/documentRoutes.js';

//Models imports
import User from '../models/user.js';
import Document from '../models/document.js';

//Repositories imports
import {BaseRepository} from '../repositories/baseRepository.js';
import {UserRepository} from '../repositories/userRepository.js';
import {DocumentRepository} from '../repositories/documentRepository.js';

//Services
import {BaseService} from '../services/baseService.js';
import {UserService} from '../services/userService.js';
import {AuthService} from '../services/authService.js';
import {DocumentService} from '../services/documentService.js';

//Controllers
import {UserController} from '../controllers/userController.js';
import {AuthController} from '../controllers/authController.js';
import {DocumentController} from '../controllers/documentController.js';

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
    AuthRoutes: asClass(AuthRoutes).singleton(),
    DocumentRoutes: asClass(DocumentRoutes).singleton()
});

//Models registration
container.register({
    User: asValue(User),
    Document: asValue(Document)
});

//Repositories registration
container.register({
    BaseRepository: asClass(BaseRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
    DocumentRepository: asClass(DocumentRepository).singleton()
});

//Services registration
container.register({
    BaseService: asClass(BaseService).singleton(),
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    DocumentService: asClass(DocumentService).singleton()
});

//Controllers registration
container.register({
    UserController: asClass(UserController).singleton(),
    AuthController: asClass(AuthController).singleton(),
    DocumentController: asClass(DocumentController).singleton()
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