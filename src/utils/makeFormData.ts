import { isPlainObject } from './isPlainObject';

export function makeFormData(
  object: any,
  formData: FormData = new FormData(),
  prefix?: string,
): FormData {
  if (object === undefined) {
    return formData;
  }
  if (Array.isArray(object)) {
    if (!object.length) {
      makeFormData('', formData, `${prefix}`);
    } else {
      object.forEach((value, index) => makeFormData(value, formData, `${prefix}[${index}]`));
    }
  } else if (isPlainObject(object)) {
    Object.entries(object).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        while (name.length > 2 && name.lastIndexOf('[]') === name.length - 2) {
          // eslint-disable-next-line no-param-reassign
          name = name.substring(0, name.length - 2);
        }
      }
      makeFormData(value, formData, prefix ? `${prefix}[${name}]` : name);
    });
  } else if (object !== null) {
    let value = object;
    if (typeof value === 'boolean') {
      value = Number(value);
    }
    formData.append(`${prefix}`, value);
  }
  return formData;
}
