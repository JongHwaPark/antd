import axios from 'axios';

const HttpClient = (() => {
  const request = Symbol('request');
  return class {
    constructor(options) {
      if (!this.instance) {
        try {
          this.instance = axios.create({
            maxRedirects: 0,
            timeout: 1 * 60 * 1000,
            baseURL: 'http://127.0.0.1:80',
            ...options,
            // baseURL: 'http://192.168.1.26:8080',
          });
        } catch (err) {
          throw err;
        }
      }
    }

    async [request](type, url, config) {
      try {
        const response = await this.instance[type](url, config);
        return response.data;
      } catch (err) {
        const error = err.response && err.response.data ? err.response.data : err;
        throw error;
      }
    }

    async get(url, config) {
      return this[request]('get', url, config);
    }

    async post(url, config) {
      return this[request]('post', url, config);
    }

    async put(url, config) {
      return this[request]('put', url, config);
    }

    async delete(url, config) {
      return this[request]('delete', url, config);
    }
  };
})();

export default HttpClient;
