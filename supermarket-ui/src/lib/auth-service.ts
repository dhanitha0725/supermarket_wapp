import { authClient } from "./auth-client";
import { ok, err, ErrorCode } from "./result";
import type { Result } from "./result";

export type Session = typeof authClient.$Infer.Session;

interface BetterAuthError {
  status: number;
  message?: string;
}

/**
 * Maps Better Auth error codes to our standard ErrorCodes
 */
function mapAuthError(error: BetterAuthError): ErrorCode {
  const status = error.status;
  switch (status) {
    case 401: return ErrorCode.UNAUTHORIZED;
    case 403: return ErrorCode.FORBIDDEN;
    case 422: return ErrorCode.VALIDATION_ERROR;
    default: return ErrorCode.UNKNOWN_ERROR;
  }
}

export const authService = {
  login: async (email: string, password: string): Promise<Result<Awaited<ReturnType<typeof authClient.signIn.email>>['data']>> => {
    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });

      if (result.error) {
        return err(
          mapAuthError(result.error),
          result.error.message ?? 'Login failed'
        );
      }

      if (!result.data) {
        return err(ErrorCode.UNKNOWN_ERROR, 'Login succeeded but no data returned');
      }

      return ok(result.data);
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
          error.message ?? 'Logout failed'
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

  getSession: async (): Promise<Result<Session>> => {
    try {
      const result = await authClient.getSession();
      if (result.error) {
        return err(
          mapAuthError(result.error),
          result.error.message ?? 'Failed to fetch session'
        );
      }
      
      if (!result.data) {
        return err(ErrorCode.UNAUTHORIZED, 'No active session found');
      }

      return ok(result.data);
    } catch (e) {
      return err(
        ErrorCode.INTERNAL_ERROR,
        e instanceof Error ? e.message : 'Internal server error'
      );
    }
  }
};
