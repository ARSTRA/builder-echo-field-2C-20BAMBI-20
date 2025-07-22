import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Shield, Lock, User, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAdminAuth } from "@/components/auth/AdminAuthProvider";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Demo credentials for admin access
  const ADMIN_CREDENTIALS = {
    email: "admin@bambi.com",
    password: "admin123"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        // Store admin session
        localStorage.setItem("bambi_admin_authenticated", "true");
        localStorage.setItem("bambi_admin_user", JSON.stringify({
          email: email,
          name: "Admin User",
          role: "admin",
          loginTime: new Date().toISOString()
        }));

        toast({
          title: "Login Successful",
          description: "Welcome to BAMBI Admin Dashboard",
        });

        navigate("/admin");
      } else {
        setError("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-taxi-dark mb-2">BAMBI Admin</h1>
          <p className="text-taxi-gray">Secure Access Portal</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-taxi-dark">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <Alert className="mb-6 border-destructive/50 text-destructive dark:border-destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Demo Credentials Info */}
            <Alert className="mb-6 border-primary/50 bg-primary/5">
              <User className="h-4 w-4" />
              <AlertDescription>
                <strong>Demo Credentials:</strong><br />
                Email: admin@bambi.com<br />
                Password: admin123
              </AlertDescription>
            </Alert>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-taxi-gray" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@bambi.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-taxi-gray" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 btn-primary" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    Sign In to Admin Panel
                  </>
                )}
              </Button>
            </form>

            {/* Additional Security Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center text-sm text-taxi-gray">
                <Lock className="w-4 h-4 mr-2" />
                Secured with enterprise-grade encryption
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-taxi-gray">
            Need help? Contact{" "}
            <a href="mailto:support@bambi.com" className="text-primary hover:underline">
              support@bambi.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
