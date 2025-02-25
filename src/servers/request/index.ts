import axios, { AxiosHeaders } from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios"

interface MyInterceptors<T> {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailFn?: (err: any) => any
}

interface MyAxiosRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyInterceptors<T>
}

export class MyAxiosRequest {
  private instance: AxiosInstance

  constructor(config: MyAxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const headers: AxiosHeaders = new AxiosHeaders();
        headers.set("Content-Type", "application/json;charset=UTF-8");
        headers.set("Authorization", localStorage.getItem("token") || "");
        headers.set("Accept", "application/json");
        config.headers = headers;
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );

    this.instance.interceptors.response.use(res => {
      return res;
    }, err => {
      return Promise.reject(err);
    });

    if (config?.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors?.requestSuccessFn,
        config.interceptors?.requestFailFn
      );
      this.instance.interceptors.response.use(
        config.interceptors?.responseSuccessFn,
        config.interceptors?.responseFailFn
      );
    }
  }

  request<T = any>(config: MyAxiosRequestConfig) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config as InternalAxiosRequestConfig) as MyAxiosRequestConfig;
    }
    return new Promise<T>((resolve, reject) => {
      this.instance.request<T>(config).then(res => {
        if (config.interceptors?.responseSuccessFn) {
          res = config.interceptors.responseSuccessFn(res);
        }
        resolve(res.data);
      }).catch(err => {
        if (config.interceptors?.responseFailFn) {
          err = config.interceptors.responseFailFn(err);
        }
        reject(err);
      });
    });
  }

  get<T = any>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: "get" });
  }

  post<T = any>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: "post" });
  }

  put<T = any>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: "put" });
  }

  delete<T = any>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: "delete" });
  }

  options<T = any>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: "options" });
  }
}
