export class UserController{

  constructor({UserService, AuthMiddleware}){
    this.UserService = UserService;
    this.resource = 'user';
    this.AuthMiddleware = AuthMiddleware;
  }

  get = async (req, res) => {
    const userId = req.params.userId;
    this.AuthMiddleware.authorizeToResource(req, userId, 'read', this.resource);
    const user = await this.UserService.get(userId);

    return res.send(user);
  }

  getAll = async (req, res) => {
    const users = await this.UserService.getAll();
    
    return res.send(users);
  }

  update = async (req, res) => {
    const body = req.body;
    const userId = req.params.userId;
    this.AuthMiddleware.authorizeToResource(req, userId, 'update', this.resource);
    const updateUser = await this.UserService.update(userId, body);

    return res.send(updateUser);
  }

  delete = async (req, res) => {
    const userId = req.params.userId;
    const deletedUser = await this.UserService.delete(userId);

    return res.send(deletedUser);
  }
}