import axios from 'axios';

export default class Backend {
  headers;
  
  constructor(){
    this.headers = new Headers();
    this.headers.append('content-type', 'application/json');
    this.state = {
      apiDomain: 'http://localhost:8080/api',
      config: this.headers
    }
  }
  post(url, payload) {
    return axios.post(this.state.apiDomain + url, payload, this.config);
  }

  get(url) {
    return axios.get(this.state.apiDomain + url, this.config);
  }
}
