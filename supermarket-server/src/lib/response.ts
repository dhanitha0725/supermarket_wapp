import { Response } from 'express';
import { Result } from './result';

/**
 * Sends an Express response based on a Result object
 */
export function sendResult<T>(res: Response, result: Result<T>) {
  if (result.ok) {
    return res.status(200).json(result.value);
  }

  const { status, ...errorBody } = result.error;
  return res.status(status).json(errorBody);
}
