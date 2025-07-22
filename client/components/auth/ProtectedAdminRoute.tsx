import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAdminAuth } from "./AdminAuthProvider";
import { Loader2 } from "lucide-react";

interface ProtectedAdminRouteProps {
  children: ReactNode;
}

export function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
  const { isAuthenticated, checkAuth } = useAdminAuth();
  const location = useLocation();

  // Check authentication status
  const authStatus = checkAuth();

  // Show loading spinner while checking auth
  if (authStatus === undefined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-taxi-gray">Verifying credentials...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // Render protected content
  return <>{children}</>;
}
