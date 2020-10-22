import {BaseRepository} from './baseRepository.js';

export class UserRepository extends BaseRepository{
  constructor({User}){
    super(User);
    this.User = User;
  }

  async getUserByEmail(email){
    return await this.User.findOne({email: email});
  }
}
