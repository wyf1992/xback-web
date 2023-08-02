import { AccountAndPassword } from './constant';

export const getAccountInfo = (key: string) => {
  const config = localStorage.getItem(AccountAndPassword);

  return config ? JSON.parse(config)[key] : '';
};

export const setAccountInfo = (key: string, value: string | boolean) => {
  let config: any = localStorage.getItem(AccountAndPassword);
  if (config) {
    config = JSON.parse(config);
  } else {
    config = {};
  }
  config[key] = value;
  localStorage.setItem(AccountAndPassword, JSON.stringify(config));
};

export function clearAccountInfo() {
  localStorage.removeItem(AccountAndPassword);
}
