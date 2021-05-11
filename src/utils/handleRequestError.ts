import { AxiosError } from 'axios';

import { ResponseErrors } from '~/types';

export const globalErrorName = 'globalError';

export function handleRequestError(
  error: AxiosError,
  options: { handleRawErrors?: (errors: Record<string, any>) => void } = {},
): ResponseErrors {
  const { handleRawErrors } = options;

  const errors: ResponseErrors = {};
  if (error.response) {
    switch (error.response.status) {
      case 400: {
        const { data } = error.response;
        if (!('detail' in data)) {
          errors[globalErrorName] = 'Server error';
          break;
        }
        if (handleRawErrors) {
          handleRawErrors(data.detail);
        }
        Object.keys(data.detail).forEach(key => {
          errors[key] = data.detail[key][0];
        });
        break;
      }
      case 401: {
        break;
      }
      default:
        // 500, 502
        errors[globalErrorName] = 'Server error';
        break;
    }
  } else if (error.request) {
    if (error.request.status === 0) {
      errors[globalErrorName] = 'Network error';
    }
  } else {
    errors[globalErrorName] = 'Something went wrong';
  }

  if ('object_error' in errors) {
    errors[globalErrorName] = errors.object_error;
    delete errors.object_error;
  }

  return errors;
}
