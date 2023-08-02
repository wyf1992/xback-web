import Cookies from 'js-cookie';
import { TOKEN_KEY } from './constant';

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

export function setToken(token: string) {
  return Cookies.set(TOKEN_KEY, token);
}

export function clearToken() {
  return Cookies.remove(TOKEN_KEY);
}
