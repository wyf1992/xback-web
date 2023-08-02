export const AccountAndPassword = 'AccountAndPassword';
export const TOKEN_KEY = 'Admin-Token';

interface IThirdUrl {
  GOOGLE?: string;
  FACEBOOK?: string;
  APPLE?: string;
  MICROSOFT?: string;
}
const THIRD_URL: IThirdUrl = {};
if (process.env.REACT_APP_RUN_TYPE === 'prod') {
  THIRD_URL.GOOGLE =
    'https://accounts.google.com/o/oauth2/v2/auth?client_id=604516704322-9pt9l6ttuvomh7aiv7voqqlsjful4sdo.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/userinfo.email&redirect_uri=https://auth.xback.io/oauth/callback/google&response_mode=form_post&response_type=code&prompt=select_account&service=lso&o2v=2&flowName=GeneralOAuthFlow';
  THIRD_URL.APPLE =
    'https://appleid.apple.com/auth/authorize?client_id=com.xback.xback-signinwithapple&redirect_uri=https://auth.xback.io/oauth/callback/apple&response_mode=form_post&response_type=code&scope=email%20name';
  THIRD_URL.MICROSOFT =
    'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=718387b2-0672-44df-9291-2b22e1abb54e&response_type=code&redirect_uri=https://auth.xback.io/oauth/callback/microsoft&response_mode=form_post&scope=https://graph.microsoft.com/user.read&prompt=select_account';
} else {
  THIRD_URL.GOOGLE =
    'https://accounts.google.com/o/oauth2/v2/auth?client_id=604516704322-oupce4qu3nojv3dgkoqdjmallprtju93.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/userinfo.email&redirect_uri=https://auth-test.xback.io/oauth/callback/google&response_mode=form_post&response_type=code&prompt=select_account&service=lso&o2v=2&flowName=GeneralOAuthFlow';
  THIRD_URL.APPLE =
    'https://appleid.apple.com/auth/authorize?client_id=com.xback.xback-dev-signinwithapple&redirect_uri=https://auth-test.xback.io/oauth/callback/apple&response_mode=form_post&response_type=code&scope=email%20name';
  THIRD_URL.MICROSOFT =
    'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=c6b5b2bb-db0e-420d-a036-0fcedfa35a31&response_type=code&redirect_uri=https://auth-test.xback.io/oauth/callback/microsoft&response_mode=form_post&scope=https://graph.microsoft.com/user.read&prompt=select_account';
}
export { THIRD_URL };
