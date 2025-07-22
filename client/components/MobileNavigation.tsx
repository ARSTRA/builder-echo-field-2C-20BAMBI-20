import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Car, 
  Home,
  MapPin, 
  Bell,
  User,
  History,
  CreditCard,
  Navigation,
  DollarSign,
  Calendar,
  Settings,
  MessageCircle,
  Shield,
  Menu,
  X
} from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

interface MobileNavigationProps {
  userType: 'passenger' | 'driver' | 'admin';
}

export function MobileNavigation({ userType }: MobileNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const passengerTabs: NavigationItem[] = [
    { name: "Home", href: "/passenger", icon: Home },
    { name: "Book", href: "/passenger/book", icon: MapPin },
    { name: "History", href: "/passenger/history", icon: History },
    { name: "Notifications", href: "/passenger/notifications", icon: Bell, badge: 3 },
    { name: "Profile", href: "/passenger/profile", icon: User },
  ];

  const driverTabs: NavigationItem[] = [
    { name: "Dashboard", href: "/driver", icon: Home },
    { name: "Navigate", href: "/driver/navigate", icon: Navigation },
    { name: "Earnings", href: "/driver/earnings", icon: DollarSign },
    { name: "Requests", href: "/driver/requests", icon: Bell, badge: 2 },
    { name: "Profile", href: "/driver/profile", icon: User },
  ];

  const adminTabs: NavigationItem[] = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Users", href: "/admin/users", icon: User },
    { name: "Trips", href: "/admin/trips", icon: Car },
    { name: "Reports", href: "/admin/reports", icon: Calendar },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const currentTabs = userType === 'passenger' ? passengerTabs : 
                     userType === 'driver' ? driverTabs : adminTabs;

  const isActive = (path: string) => location.pathname === path;

  const topMenuItems = [
    { name: "Passenger App", href: "/passenger", icon: User },
    { name: "Driver App", href: "/driver", icon: Car },
    { name: "Admin Panel", href: "/admin", icon: Shield },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="flex items-center justify-between px-4 h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-600 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <span className="relative text-white font-black text-sm tracking-wider">B</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Car className="w-1.5 h-1.5 text-white" />
              </div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">BAMBI</span>
          </Link>

          {/* Header Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Slide-down menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-200/50 animate-slide-down z-40">
            <div className="px-4 py-3 space-y-2">
              {topMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-xl transition-colors ${
                      location.pathname.startsWith(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-taxi-gray hover:text-taxi-dark hover:bg-taxi-light-gray/50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Tab Bar */}
      <nav className="mobile-tab-bar">
        <div className="flex items-center justify-around h-16">
          {currentTabs.map((tab) => {
            const Icon = tab.icon;
            const active = isActive(tab.href);
            
            return (
              <Link
                key={tab.name}
                to={tab.href}
                className={`flex flex-col items-center justify-center space-y-1 px-2 py-1 rounded-xl transition-all duration-200 relative min-w-0 flex-1 ${
                  active
                    ? "text-primary"
                    : "text-taxi-gray hover:text-taxi-dark"
                }`}
              >
                <div className="relative">
                  <Icon className={`w-6 h-6 ${active ? 'scale-110' : ''} transition-transform duration-200`} />
                  {tab.badge && tab.badge > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 text-xs p-0 flex items-center justify-center"
                    >
                      {tab.badge > 9 ? '9+' : tab.badge}
                    </Badge>
                  )}
                </div>
                <span className={`text-xs font-medium truncate ${active ? 'text-primary' : ''}`}>
                  {tab.name}
                </span>
                {active && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
