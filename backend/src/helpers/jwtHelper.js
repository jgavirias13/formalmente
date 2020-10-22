import jwt from 'jsonwebtoken';

export class JwtHelper{
  constructor({Config}){
    this.Config = Config;
  }

  sign(user){
    data = {
      user: user
    }
    return jwt.sign(data, this.Config.JWT_SECRET, {expiresIn: '4h'});
  }
}