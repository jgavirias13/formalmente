import { NotAuthorizedException } from '../errors/notAuthorizedException.js';
import jwt from 'jsonwebtoken';

export class AuthMiddleware {
  constructor({ Config, Roles }) {
    this.Config = Config;
    this.Roles = Roles;
  }

  authenticateUser = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
      throw new NotAuthorizedException();
    }

    jwt.verify(token, this.Config.parms.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        throw new NotAuthorizedException();
      }
      req.user = decodedToken.user;
      next();
    });
  }

  authorizeUser(actions, resource) {
    return async (req, res, next) => {
      if(!req.user || !req.user.role){
        req.user = {
          role: 'noauth'
        }
      }

      const permission = this.getPermissionForResource(actions, req.user.role, resource);
      
      if(!permission){
        throw new NotAuthorizedException();
      }
      next();
    }
  }

  authorizeToResource(request, ownerId, action, resource){
    const permission = (request.user.id === ownerId)
      ? this.Roles.getAccessControl().can(request.user.role)[`${action}Own`](resource).granted
      : this.Roles.getAccessControl().can(request.user.role)[`${action}Any`](resource).granted;
    
    if(!permission){
      throw new NotAuthorizedException();
    }
  }

  getPermissionForResource(actions, role, resource){
    let permission = false;
    actions.forEach(action => {
      permission = permission || this.Roles.getAccessControl().can(role)[action](resource).granted;
    });
    return permission;
  }
}
