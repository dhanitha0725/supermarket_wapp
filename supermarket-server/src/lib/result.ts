/**
 * Industry standard error codes
 */
export const ErrorCode = {
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;

export type ErrorCode = typeof ErrorCode[keyof typeof ErrorCode];

/**
 * Structured error object
 */
export interface AppError {
  code: ErrorCode;
  message: string;
  status: number;
  details?: Record<string, unknown>;
}

/**
 * Result pattern structure
 */
export type Result<T> =
  | { ok: true; value: T; error: null }
  | { ok: false; value: null; error: AppError };

export const ok = <T>(value: T): Result<T> => ({ 
  ok: true, 
  value, 
  error: null 
});

export const err = (
  code: ErrorCode, 
  message: string, 
  status: number = 500, 
  details?: Record<string, unknown>
): Result<never> => ({
  ok: false,
  value: null,
  error: { code, message, status, details }
});

// Helper for common errors
export const Errors = {
  notFound: (message: string = 'Resource not found') => err(ErrorCode.NOT_FOUND, message, 404),
  unauthorized: (message: string = 'Unauthorized') => err(ErrorCode.UNAUTHORIZED, message, 401),
  forbidden: (message: string = 'Forbidden') => err(ErrorCode.FORBIDDEN, message, 403),
  badRequest: (message: string, details?: Record<string, unknown>) => err(ErrorCode.BAD_REQUEST, message, 400, details),
  internal: (message: string = 'Internal server error') => err(ErrorCode.INTERNAL_ERROR, message, 500),
  conflict: (message: string) => err(ErrorCode.CONFLICT, message, 409),
};
