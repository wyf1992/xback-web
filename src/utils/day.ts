/**
 * 时间计算工具
 */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

dayjs.extend(relativeTime);
dayjs.extend(utc);

/**
 * 时间转utc时间
 * @param t
 * @param f
 */
export const time2utc = (t: string | number, f?: string) => {
  return t ? dayjs.utc(t).format(f || 'YYYY-MM-DD HH:mm:ss') : '';
};

/**
 * utc时间转本地时间
 * @param t
 * @param f
 */
export const utc2local = (t: string | number, f?: string) => {
  return t
    ? dayjs
        .utc(t)
        .local()
        .format(f || 'YYYY-MM-DD HH:mm:ss')
    : '-';
};

export const fromNow = (t: string | number) => {
  return t ? dayjs.utc(t).local().fromNow() : '';
};

export const fromNowAccurate = (t: string | number) => {
  if (!t) {
    return '';
  }
  const difference = dayjs().diff(dayjs.utc(t).local(), 'minute');
  let d = 0;
  let h = 0;
  let m = 0;
  if (difference >= 60 * 24) {
    d = Math.floor(difference / (60 * 24));
  }
  if (difference >= 60) {
    h = Math.floor((difference - d * 60 * 24) / 60);
  }
  m = difference - d * 24 * 60 - h * 60;
  return (
    (d > 0 ? `${d}d ` : '') + (h > 0 ? `${h}h ` : d > 0 ? `0h ` : '') + `${m}m`
  );
};

export default dayjs;
