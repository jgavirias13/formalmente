export class AuthController{
  constructor({AuthService}){
    this.AuthService = AuthService;
  }

  signUp = async (req, res) => {
    const body = req.body;
    const user = await this.AuthService.signUp(body);
    res.status(201).send(user);
  }

  signIn = async (req, res) => {
    const body = req.body;
    const token = await this.AuthService.signIn(body);
    return res.send({token});
  }
}