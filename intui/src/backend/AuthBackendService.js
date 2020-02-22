import Backend from './Backend'
export default class AuthBackendService extends Backend {
  saveUser(user) {
    return this.post('/contract-services/api/user/register', user);
  }

  getUsers(cdrItemId) {
    return this.get(
      `/contract-services/api/user/users`,
    );
  }
}