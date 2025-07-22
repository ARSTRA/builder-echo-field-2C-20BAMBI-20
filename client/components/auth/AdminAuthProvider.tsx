import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface AdminUser {
  email: string;
  name: string;
  role: string;
  loginTime: string;
}

interface AdminAuthContextType {
  isAuthenticated: boolean;
  user: AdminUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined,
);

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}

interface AdminAuthProviderProps {
  children: ReactNode;
}

export function AdminAuthProvider({ children }: AdminAuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AdminUser | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Demo credentials
  const ADMIN_CREDENTIALS = {
    email: "admin@bambi.com",
    password: "admin123",
  };

  const checkAuth = (): boolean => {
    const isAuth = localStorage.getItem("bambi_admin_authenticated") === "true";
    const userStr = localStorage.getItem("bambi_admin_user");

    if (isAuth && userStr) {
      const userData = JSON.parse(userStr);
      // Check if session is still valid (24 hours)
      const loginTime = new Date(userData.loginTime);
      const now = new Date();
      const hoursDiff =
        (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60);

      if (hoursDiff < 24) {
        return true;
      } else {
        // Session expired - clear storage but don't call logout to avoid navigation during render
        localStorage.removeItem("bambi_admin_authenticated");
        localStorage.removeItem("bambi_admin_user");
        return false;
      }
    }

    return false;
  };

  const initializeAuth = () => {
    const isAuth = localStorage.getItem("bambi_admin_authenticated") === "true";
    const userStr = localStorage.getItem("bambi_admin_user");

    if (isAuth && userStr) {
      const userData = JSON.parse(userStr);
      // Check if session is still valid (24 hours)
      const loginTime = new Date(userData.loginTime);
      const now = new Date();
      const hoursDiff =
        (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60);

      if (hoursDiff < 24) {
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        // Session expired
        localStorage.removeItem("bambi_admin_authenticated");
        localStorage.removeItem("bambi_admin_user");
        setUser(null);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (
          email === ADMIN_CREDENTIALS.email &&
          password === ADMIN_CREDENTIALS.password
        ) {
          const userData: AdminUser = {
            email: email,
            name: "Admin User",
            role: "admin",
            loginTime: new Date().toISOString(),
          };

          localStorage.setItem("bambi_admin_authenticated", "true");
          localStorage.setItem("bambi_admin_user", JSON.stringify(userData));

          setUser(userData);
          setIsAuthenticated(true);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem("bambi_admin_authenticated");
    localStorage.removeItem("bambi_admin_user");
    setUser(null);
    setIsAuthenticated(false);
    navigate("/admin/login");
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  // Redirect to login if not authenticated and trying to access admin routes
  useEffect(() => {
    if (
      location.pathname.startsWith("/admin") &&
      location.pathname !== "/admin/login" &&
      !isAuthenticated
    ) {
      navigate("/admin/login");
    }
  }, [location.pathname, isAuthenticated, navigate]);

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    checkAuth,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}
