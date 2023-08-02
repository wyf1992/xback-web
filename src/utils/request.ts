/* eslint-disable @typescript-eslint/ban-types */
/**
 * 通用请求函数
 */
import axios, { AxiosRequestConfig, Canceler } from 'axios';
import { clearToken, getToken } from './cookie';
import { message } from 'antd';

interface RequestRes<T> {
  success: boolean;
  msg: string;
  data: T;
  code: string;
  ret: number;
}

let respInterceptor: number;
let reqInterceptor: number;

console.log(process.env);
const _axios = axios.create({
  withCredentials: true, // 携带cookie
  timeout: 40000, // 请求超时时间（ms）
  validateStatus: (status) => !!status, // 定义求情异常状态
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    'accept-language': 'en'
  }
});

// 服务器维护时刷新页面，nginx重定向到系统维护页面
_axios.interceptors.response.use(
  function (response) {
    const { status, data } = response;
    if (status === 503) {
      window.location.reload();
    }
    switch (status) {
      case 503:
        window.location.reload();
        break;
      case 401:
        // case 400:
        message.error(data.msg);
        setTimeout(() => {
          clearToken();
          location.replace('/auth/login');
        }, 1500);
        break;
      case 200:
        if (!data.success) {
          message.error(data.msg);
        }
        break;
      default:
        message.error(data.msg);
    }
    return response;
  },
  (err: any) => {
    if (!(err && err.response)) {
      err.message = 'Not connected to the Internet';
    }
    message.error(err.message);
    return Promise.reject(err);
  }
);

_axios.interceptors.request.use(function (req) {
  // 是否需要设置 token
  const isToken = (req.headers || {}).isToken === false;
  if (getToken() && !isToken) {
    req.headers['x-token'] = getToken();
  }
  return req;
});

export const axiosCancel: { cancelers: Canceler[] } = {
  cancelers: []
};

//注册响应拦截器
export const registerRespInterceptor = (onSuccess: Function) => {
  respInterceptor = _axios.interceptors.response.use(function (response) {
    if (onSuccess) {
      return onSuccess(response);
    }
  });
};
export const registerReqInterceptor = (beforeSend: Function) => {
  reqInterceptor = _axios.interceptors.request.use(function (req) {
    if (!req.cancelToken) {
      req.cancelToken = new axios.CancelToken((canceler) => {
        axiosCancel.cancelers.push(canceler);
      });
    }
    return beforeSend(req);
  });
};

export const unregisterReqInterceptor = () => {
  _axios.interceptors.request.eject(reqInterceptor);
};
// 卸载响应拦截器
export const unregisterRespInterceptor = () => {
  if (reqInterceptor) {
    _axios.interceptors.response.eject(respInterceptor);
  }
};

function request<T = any>(params: AxiosRequestConfig) {
  return _axios.request<RequestRes<T>>(params).then((res) => {
    const resD = res?.data ?? <RequestRes<T>>{};
    return {
      ...resD,
      data: resD?.data ?? <T>{}
    };
  });
}

export default request;

export const requestFactory = function (prefix: string) {
  return function <T>(params: AxiosRequestConfig) {
    return request<T>({ ...params, url: prefix + params.url });
  };
};
