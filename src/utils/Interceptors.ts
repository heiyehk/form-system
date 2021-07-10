import axios, { AxiosInstance, AxiosResponse } from 'axios';

class Interceptors {
  instance!: AxiosInstance;
  codeMessage: Record<number, string> = {
    200: '成功',
    400: '请求错误',
    401: '没有权限',
    403: '访问被禁止',
    404: '请求不存在',
    500: '服务器错误',
    502: '网关错误',
    503: '服务不可用',
    504: '网关超时'
  };

  constructor() {
    this.createInstance();
  }

  createInstance() {
    const baseURL = import.meta.env.MODE === 'development' ? '/api' : 'http://';
    this.instance = axios.create({
      baseURL,
      timeout: 3000
    });
    this.instanceRequest();
    this.instanceResponse();
  }

  instanceRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  instanceResponse() {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const { status, data } = response;
        if (status !== 200 || data.code !== 200) {
          return Promise.reject(data);
        }
        return response;
      },
      () => {
        if (import.meta.env.MODE === 'development') {
          return Promise.reject();
        }
      }
    );
  }
}

export default new Interceptors();
