import { AxiosInstance, AxiosRequestConfig } from 'axios';
import Interceptors from './Interceptors';

class HttpService {
  instance: AxiosInstance;

  constructor() {
    this.instance = Interceptors.instance;
  }

  request<T = any, R = T>(config: AxiosRequestConfig): Promise<R> {
    return this.instance.request(config).then((res) => res?.data);
  }

  get<T = any, R = T>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.get(url, config).then((res) => res?.data);
  }

  delete<T = any, R = T>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.delete(url, config).then((res) => res?.data);
  }

  post<T = any, R = T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.post(url, data, config).then((res) => res?.data);
  }

  put<T = any, R = T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.put(url, data, config).then((res) => res?.data);
  }

  patch<T = any, R = T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.patch(url, data, config).then((res) => res?.data);
  }
}

export default new HttpService();
