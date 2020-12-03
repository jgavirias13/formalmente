import {User} from './user.model';

export interface DecodedToken{
  exp: number,
  iat: number,
  user: User
}