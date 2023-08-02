import request from '@/utils/request';

export function goodsList<T>(params?: any) {
  return request<T>({
    method: 'get',
    url: '/alphant/api/tourist/product/queryActivities',
    params
  });
}

export function creatOrder<T>(data: any) {
  return request<T>({
    method: 'post',
    url: '/alphant/api/order/store/pay/order',
    data: data
  });
}
