import axios from 'axios';

export default class Backend {
  post(url, payload) {
    return axios.post(this.state.apiDomain + url, payload, this.config);
  }

  get(url) {
    return axios.get(this.state.apiDomain + url, this.config);
  }
}
