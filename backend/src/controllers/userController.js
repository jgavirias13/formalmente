export class UserController{
  constructor({UserService}){
    this.UserService = UserService;
  }

  get = async(req, res) => {
    const userId = req.params.userId;
    const user = await this.UserService.get(userId);

    return res.send(user);
  }

  getAll = async(req, res) => {
    const users = await this.UserService.getAll();

    return res.send(users);
  }

  update = async(req, res) => {
    const body = req.body;
    const userId = req.params.userId;
    const updateUser = await this.UserService.update(userId, body);
  }

  delete = async(req, res) => {
    const userId = req.params.userId;
    const deletedUser = await this.UserService.delete(userId);

    return res.send(deletedUser);
  }
}