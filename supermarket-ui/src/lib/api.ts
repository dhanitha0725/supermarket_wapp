import axios, { AxiosError } from 'axios';
import { err, ok, ErrorCode } from './result';
import type { Result } from './result';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for Better Auth sessions
});

/**
 * Common handler for Axios requests to return Result type
 */
export async function request<T>(
  config: Parameters<typeof api.request>[0]
): Promise<Result<T>> {
  try {
    const response = await api.request<T>(config);
    return ok(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message?: string; details?: Record<string, unknown> }>;
      
      const message = axiosError.response?.data?.message || axiosError.message;
      const details = axiosError.response?.data?.details;
      
      switch (axiosError.response?.status) {
        case 401:
          return err(ErrorCode.UNAUTHORIZED, message, details);
        case 403:
          return err(ErrorCode.FORBIDDEN, message, details);
        case 404:
          return err(ErrorCode.NOT_FOUND, message, details);
        case 422:
          return err(ErrorCode.VALIDATION_ERROR, message, details);
        case 500:
          return err(ErrorCode.INTERNAL_ERROR, message, details);
        default:
          return err(ErrorCode.UNKNOWN_ERROR, message, details);
      }
    }
    
    return err(
      ErrorCode.UNKNOWN_ERROR, 
      error instanceof Error ? error.message : 'An unexpected error occurred'
    );
  }
}

export default api;
