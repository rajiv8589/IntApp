import Backend from './Backend'
export default class AuthBackendService extends Backend {
  saveUser(user) {
    return this.post('/user/register', user);
  }

  getUsers() {
    return this.get(`/user/users`);
  }
}