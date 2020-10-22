import {BaseService} from './baseService.js';

export class UserService extends BaseService{
  constructor({UserRepository}){
    super(UserRepository);
    this.UserRepository = UserRepository;
  }

  async getUserByEmail(email){
    return await this.UserRepository.getUserByEmail(email);
  }
}