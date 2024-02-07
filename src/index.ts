// eslint-disable-next-line no-unused-vars
const returnFunc = (logFunc: ((...data: any[]) => void)) => (...data: any[]): any => {
  logFunc(...data);
  return data.length > 1 ? data : data[0];
};

export const debug = returnFunc(console.debug);
export const error = returnFunc(console.error);
export const info = returnFunc(console.info);
export const log = returnFunc(console.log);
export const warn = returnFunc(console.warn);
