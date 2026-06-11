/**
 * Industry standard error codes
 */
export const ErrorCode = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
} as const;

export type ErrorCode = typeof ErrorCode[keyof typeof ErrorCode];

/**
 * Structured error object for industry standard reporting
 */
export interface AppError {
  code: ErrorCode;
  message: string;
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

export const err = (code: ErrorCode, message: string, details?: Record<string, unknown>): Result<never> => ({
  ok: false,
  value: null,
  error: { code, message, details }
});

/**
 * Type guard for Result
 */
export const isOk = <T>(result: Result<T>): result is { ok: true; value: T; error: null } => result.ok;
export const isErr = <T>(result: Result<T>): result is { ok: false; value: null; error: AppError } => !result.ok;
