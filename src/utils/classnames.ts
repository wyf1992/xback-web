/**
 * className合并工具
 */
type FunctionType = () => boolean;
type ObjectType = { [key: string]: boolean | FunctionType };

/**
 * 参数类型
 */
export type ClassNameType =
  | string
  | ObjectType
  | (string | ObjectType)[]
  | undefined;

const format = (obj: ObjectType): string[] => {
  const arr: string[] = [];
  Object.keys(obj).forEach((key: string) => {
    if (typeof obj[key] === 'boolean' && obj[key]) {
      arr.push(key);
    }
    if (typeof obj[key] === 'function') {
      const func = obj[key] as FunctionType;
      func() && arr.push(key);
    }
  });
  return arr;
};

const classnames = (...args: ClassNameType[]): string => {
  const classes = args.reduce((pre: string[], cur: ClassNameType) => {
    if (typeof cur === 'string' && cur) {
      pre.push(cur);
    }
    if (Array.isArray(cur)) {
      cur.forEach((item) => {
        if (typeof item === 'string' && item) {
          pre.push(item);
        }
        if (typeof item === 'object') {
          pre = pre.concat(format(item));
        }
      });
    }
    if (typeof cur === 'object') {
      pre = pre.concat(format(cur as ObjectType));
    }
    return pre;
  }, []);
  return classes.join(' ');
};

export default classnames;
