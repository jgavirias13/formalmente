export class AuthService{
  constructor({UserService, DuplicatedException, NotFoundException, InvalidPasswordException, JwtHelper}){
    this.UserService = UserService;
    this.DuplicatedException = DuplicatedException;
    this.NotFoundException = NotFoundException;
    this.InvalidPasswordException = InvalidPasswordException;
    this.JwtHelper = JwtHelper;
  }

  async signUp(user){
    const email = user.email;
    const userExist = await this.UserService.getUserByEmail(email);
    if(userExist){
      throw new this.DuplicatedException('Email');
    }

    return await this.UserService.create(user);
  }

  async signIn(user){
    const email = user.email;
    const password = user.password;

    const currentUser = await this.UserService.getUserByEmail(email);
    if(!currentUser){
      throw new this.NotFoundException('User');
    }

    const validPassword = await userExist.comparePassword(password);

    if(!validPassword){
      throw new this.InvalidPasswordException();
    }

    const userInfo = {
      email: currentUser.email,
      id: currentUser.id
    };

    const token = this.JwtHelper.sign(userInfo);

    return token;
  }
}