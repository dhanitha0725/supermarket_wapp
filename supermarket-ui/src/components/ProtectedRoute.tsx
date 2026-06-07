import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '@/lib/auth-client';

interface ProtectedRouteProps {
  requiredRole?: 'admin' | 'user';
  redirectTo?: string;
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  requiredRole = 'admin',
  redirectTo = '/admin/login',
  children,
}) => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div className="min-h-screen flex items-center justify-center bg-[#f2f0eb]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00754A]"></div>
    </div>;
  }

  const isAllowed = session && (session.user.role === requiredRole);

  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
