import {DuplicatedException} from '../errors/duplicatedException.js';
import {NotFoundException} from '../errors/notFoundException.js';
import {InvalidPasswordException} from '../errors/invalidPasswordException.js';

export class AuthService{
  constructor({UserService, JwtHelper}){
    this.UserService = UserService;
    this.JwtHelper = JwtHelper;
  }

  async signUp(user){
    const email = user.email;
    const userExist = await this.UserService.getUserByEmail(email);
    if(userExist){
      throw new DuplicatedException('Email');
    }

    return await this.UserService.create(user);
  }

  async signIn(user){
    const email = user.email;
    const password = user.password;

    const currentUser = await this.UserService.getUserByEmail(email);
    if(!currentUser){
      throw new NotFoundException('User');
    }

    const validPassword = await currentUser.comparePassword(password);

    if(!validPassword){
      throw new InvalidPasswordException();
    }

    const userInfo = {
      email: currentUser.email,
      id: currentUser.id
    };

    const token = this.JwtHelper.sign(userInfo);

    return token;
  }
}