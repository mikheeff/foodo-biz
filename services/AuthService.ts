import axios from 'axios';

export default class AuthService {
  static login(username: string, password: string) {
    // $auth.loginWith('local', { data: { username, password }});
    return axios.post('user', { username, password });
  }
}
