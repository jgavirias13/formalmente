import AccessControl from 'accesscontrol';

export class Roles {
  constructor({}) {
    this.ac = new AccessControl();

    this.ac.grant('noauth');

    this.ac.grant('basic').extend('noauth');
    this.ac.grant('basic').readOwn('user').updateOwn('user');
    this.ac.grant('basic').readOwn('document').createOwn('document');

    this.ac.grant('supervisor').extend('basic');
    this.ac.grant('supervisor').readAny('user');
    this.ac.grant('supervisor').readAny('document');

    this.ac.grant('admin').extend('basic');
    this.ac.grant('admin').extend('supervisor')
    this.ac.grant('admin').updateAny('user').deleteAny('user');
    this.ac.grant('admin').createAny('document');
  }

  getAccessControl() {
    return this.ac;
  }
}
