import CryptoJS from 'crypto-js';

const keyHex = CryptoJS.enc.Utf8.parse('sun9e8r7t6y5a4sd'); // 密匙
const ivHex = CryptoJS.enc.Utf8.parse('j5d2h7jfg3j1d1g3'); // 偏移量

export const encrypt = (text: string) => {
  const textHex = CryptoJS.enc.Utf8.parse(text);
  return CryptoJS.AES.encrypt(textHex, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
};

//解密方法
export const decrypt = (data: string) => {
  const decrypt = CryptoJS.AES.decrypt(data, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr;
};
