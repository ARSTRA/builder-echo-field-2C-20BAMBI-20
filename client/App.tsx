import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { AdminAuthProvider } from "@/components/auth/AdminAuthProvider";
import { ProtectedAdminRoute } from "@/components/auth/ProtectedAdminRoute";
import Index from "./pages/Index";
import PassengerHome from "./pages/passenger/PassengerHome";
import BookingPage from "./pages/passenger/BookingPage";
import HistoryPage from "./pages/passenger/HistoryPage";
import NotificationsPage from "./pages/passenger/NotificationsPage";
import DriverHome from "./pages/driver/DriverHome";
import DriverDashboard from "./pages/driver/DriverDashboard";
import EarningsPage from "./pages/driver/EarningsPage";
import RidePage from "./pages/RidePage";
import DriverPage from "./pages/DriverPage";
import AdminPage from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();

  // Determine user type based on route
  const getUserType = () => {
    if (location.pathname.startsWith("/passenger")) return "passenger";
    if (location.pathname.startsWith("/driver")) return "driver";
    if (location.pathname.startsWith("/admin")) return "admin";
    return "passenger"; // default
  };

  // Show mobile navigation for app routes
  const shouldShowMobileNav =
    location.pathname.startsWith("/passenger") ||
    location.pathname.startsWith("/driver") ||
    location.pathname.startsWith("/admin");

  return (
    <>
      {shouldShowMobileNav && <MobileNavigation userType={getUserType()} />}
      <main className={shouldShowMobileNav ? "pt-14 pb-16" : ""}>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Passenger App Routes */}
          <Route path="/passenger" element={<PassengerHome />} />
          <Route path="/passenger/book" element={<BookingPage />} />
          <Route path="/passenger/schedule" element={<BookingPage />} />
          <Route path="/passenger/share" element={<BookingPage />} />
          <Route path="/passenger/packages" element={<BookingPage />} />
          <Route path="/passenger/history" element={<HistoryPage />} />
          <Route
            path="/passenger/notifications"
            element={<NotificationsPage />}
          />
          <Route path="/passenger/profile" element={<PassengerHome />} />
          <Route path="/passenger/offers" element={<PassengerHome />} />

          {/* Driver App Routes */}
          <Route path="/driver" element={<DriverDashboard />} />
          <Route path="/driver/dashboard" element={<DriverDashboard />} />
          <Route path="/driver/navigate" element={<DriverDashboard />} />
          <Route path="/driver/earnings" element={<DriverDashboard />} />
          <Route path="/driver/requests" element={<DriverDashboard />} />
          <Route path="/driver/profile" element={<DriverDashboard />} />
          <Route path="/driver/home" element={<DriverHome />} />

          {/* Admin Panel Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedAdminRoute>
              <AdminPage />
            </ProtectedAdminRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedAdminRoute>
              <AdminPage />
            </ProtectedAdminRoute>
          } />
          <Route path="/admin/trips" element={
            <ProtectedAdminRoute>
              <AdminPage />
            </ProtectedAdminRoute>
          } />
          <Route path="/admin/reports" element={
            <ProtectedAdminRoute>
              <AdminPage />
            </ProtectedAdminRoute>
          } />
          <Route path="/admin/settings" element={
            <ProtectedAdminRoute>
              <AdminPage />
            </ProtectedAdminRoute>
          } />

          {/* Legacy Routes */}
          <Route path="/ride" element={<RidePage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AdminAuthProvider>
          <AppContent />
        </AdminAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
