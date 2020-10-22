import jwt from 'jsonwebtoken';

export class JwtHelper{
  constructor({Config}){
    this.Config = Config;
  }

  sign(user){
    const data = {
      user: user
    }
    return jwt.sign(data, this.Config.parms.JWT_SECRET, {expiresIn: '4h'});
  }
}