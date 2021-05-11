export function isPlainObject(arg: any): boolean {
  return Object.prototype.toString.call(arg) === '[object Object]';
}
