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
  X,
} from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

interface MobileNavigationProps {
  userType: "passenger" | "driver" | "admin";
}

export function MobileNavigation({ userType }: MobileNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const passengerTabs: NavigationItem[] = [
    { name: "Home", href: "/passenger", icon: Home },
    { name: "Book", href: "/passenger/book", icon: MapPin },
    { name: "History", href: "/passenger/history", icon: History },
    {
      name: "Notifications",
      href: "/passenger/notifications",
      icon: Bell,
      badge: 3,
    },
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

  const currentTabs =
    userType === "passenger"
      ? passengerTabs
      : userType === "driver"
        ? driverTabs
        : adminTabs;

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
              {/* Compact Mobile SVG Logo */}
              <div className="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
                >
                  <defs>
                    <linearGradient id="mobileBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B9D" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="mobileBGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F8FAFC" />
                    </linearGradient>
                  </defs>

                  {/* Background Circle */}
                  <circle cx="16" cy="16" r="14" fill="url(#mobileBgGradient)" stroke="#FFFFFF" strokeWidth="1"/>

                  {/* Simple Road */}
                  <path d="M4 17 Q12 14 16 17 Q20 20 28 17" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"/>

                  {/* Compact Car */}
                  <ellipse cx="22" cy="16" rx="4" ry="2" fill="#FBBF24"/>
                  <circle cx="20" cy="17" r="0.5" fill="#1F2937"/>
                  <circle cx="24" cy="17" r="0.5" fill="#1F2937"/>

                  {/* Letter B */}
                  <g transform="translate(8, 8)">
                    <path
                      d="M0 0 L0 16 L8 16 Q12 16 12 12 Q12 10 10 9 Q12 8 12 6 Q12 0 8 0 Z M3 3 L8 3 Q8 3 8 6 Q8 8 6 8 L3 8 Z M3 10 L8 10 Q10 10 10 12 Q10 14 8 14 L3 14 Z"
                      fill="url(#mobileBGradient)"
                      stroke="#3B82F6"
                      strokeWidth="0.3"
                    />
                  </g>

                  {/* Speed dot */}
                  <circle cx="26" cy="8" r="0.5" fill="#FBBF24" className="animate-pulse"/>
                </svg>
              </div>

              {/* Mobile Badge */}
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center border border-white">
                <Car className="w-1.5 h-1.5 text-white" />
              </div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              BAMBI
            </span>
          </Link>

          {/* Header Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
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
                  <Icon
                    className={`w-6 h-6 ${active ? "scale-110" : ""} transition-transform duration-200`}
                  />
                  {tab.badge && tab.badge > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 h-5 w-5 text-xs p-0 flex items-center justify-center"
                    >
                      {tab.badge > 9 ? "9+" : tab.badge}
                    </Badge>
                  )}
                </div>
                <span
                  className={`text-xs font-medium truncate ${active ? "text-primary" : ""}`}
                >
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
