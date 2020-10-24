import AccessControl from 'accesscontrol';

export class Roles {
  constructor({}) {
    this.ac = new AccessControl();

    this.ac.grant('noauth');

    this.ac.grant('basic').extend('noauth');
    this.ac.grant('basic').readOwn('user').updateOwn('user');

    this.ac.grant('supervisor').extend('basic');
    this.ac.grant('supervisor').readAny('user');

    this.ac.grant('admin').extend('basic');
    this.ac
      .grant('admin')
      .extend('supervisor')
      .updateAny('user')
      .deleteAny('user');
  }

  getAccessControl() {
    return this.ac;
  }
}
