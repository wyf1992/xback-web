import Big from 'big.js';

/**
 * 加法
 */
const add = (...args: number[]) => {
  try {
    return args.reduce((x, y) => {
      return Number(Big(x).plus(y).valueOf());
    });
  } catch (error) {
    console.error(error);
    return NaN;
  }
};

/**
 * 减法
 */
const sub = (...args: number[]) => {
  try {
    return args.reduce((x, y) => {
      return Number(Big(x).minus(y).valueOf());
    });
  } catch (error) {
    console.error(error);
    return NaN;
  }
};

/**
 * 乘法
 */
const mul = (...args: number[]) => {
  try {
    return args.reduce((x, y) => {
      return Number(Big(x).times(y).valueOf());
    });
  } catch (error) {
    console.error(error);
    return NaN;
  }
};

/**
 * 除法
 */
const div = (...args: number[]) => {
  try {
    return args.reduce((x, y) => {
      return Number(Big(x).div(y).valueOf());
    });
  } catch (error) {
    console.error(error);
    return NaN;
  }
};

const pow = (x: number, n: number) => {
  try {
    return Number(Big(x).pow(n).valueOf());
  } catch (error) {
    console.error(error);
    return NaN;
  }
};

const toFixed = (
  value: number,
  option?: {
    precision?: number;
    mode?: 'ceil' | 'floor' | 'round';
  }
) => {
  const p = 10 ** (option?.precision ?? 2);
  let num = mul(value, p);
  switch (option?.mode) {
    case 'floor':
      num = Math.floor(num);
      break;
    case 'ceil':
      num = Math.ceil(num);
      break;
    default:
      num = Math.round(num);
      break;
  }
  return div(num, p);
};

export const calc = {
  add,
  sub,
  mul,
  div,
  pow,
  toFixed
};
