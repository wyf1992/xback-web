import request from '@/utils/request';

export function login<T>(data: any) {
  return request<T>({
    method: 'post',
    url: '/alphant/api/base/V2Login',
    data: data
  });
}

export function signup<T>(data: any) {
  return request<T>({
    method: 'post',
    url: '/alphant/api/base/register/check',
    data: data
  });
}

export function sendEmailCode(data: any) {
  return request({
    url: '/alphant/api/base/register/email/sendCode',
    method: 'post',
    data: data
  });
}

export function resetPwd<T>(data: any) {
  return request<T>({
    method: 'post',
    url: '/alphant/api/base/clientUser/forgetPwd/check',
    data: data
  });
}

export function sendEmailCodeForReset(data: any) {
  return request({
    url: '/alphant/api/base/clientUser/forgetPwd/send',
    method: 'post',
    data: data
  });
}

export function verifyInviteCode(data: any) {
  return request({
    url: '/alphant/api/base/inviteCode/verify',
    method: 'post',
    data: data
  });
}

export function getUserInfo<T>() {
  return request<T>({
    method: 'get',
    url: '/alphant/api/clientUser/getInfo'
  });
}
export function getOrderList<T>() {
  return request<T>({
    method: 'get',
    url: '/alphant/api/order/list'
  });
}

export function getBaseToken<T>(token: string, flag: string) {
  return request<T>({
    method: 'post',
    url: '/alphant/api/base/V2GetToken',
    data: {
      deviceCode: 'officialWeb',
      deviceName: 'officialWeb',
      deviceOs: 'officialWeb',
      deviceType: 'officialWeb',
      fcmToken: 'officialWeb',
      flag: flag,
      token: token
    }
  });
}
