import { authClient } from "./auth-client";
import { ok, err, ErrorCode } from "./result";
import type { Result } from "./result";

/**
 * Maps Better Auth error codes to our standard ErrorCodes
 */
function mapAuthError(error: { status: number }): ErrorCode {
  if (!error) return ErrorCode.UNKNOWN_ERROR;
  
  const status = error.status;
  switch (status) {
    case 401: return ErrorCode.UNAUTHORIZED;
    case 403: return ErrorCode.FORBIDDEN;
    case 422: return ErrorCode.VALIDATION_ERROR;
    default: return ErrorCode.UNKNOWN_ERROR;
  }
}

export const authService = {
  login: async (email: string, password: string): Promise<Result<any>> => {
    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        return err(
          mapAuthError(error),
          error.message || 'Login failed'
        );
      }

      return ok(data);
    } catch (e) {
      return err(
        ErrorCode.INTERNAL_ERROR,
        e instanceof Error ? e.message : 'Internal server error'
      );
    }
  },

  logout: async (): Promise<Result<void>> => {
    try {
      const { error } = await authClient.signOut();
      if (error) {
        return err(
          mapAuthError(error),
          error.message || 'Logout failed'
        );
      }
      return ok(undefined);
    } catch (e) {
      return err(
        ErrorCode.INTERNAL_ERROR,
        e instanceof Error ? e.message : 'Internal server error'
      );
    }
  },

  getSession: async (): Promise<Result<any>> => {
    try {
      const { data, error } = await authClient.getSession();
      if (error) {
        return err(
          mapAuthError(error),
          error.message || 'Failed to fetch session'
        );
      }
      return ok(data);
    } catch (e) {
      return err(
        ErrorCode.INTERNAL_ERROR,
        e instanceof Error ? e.message : 'Internal server error'
      );
    }
  }
};
