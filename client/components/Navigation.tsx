import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Car, Menu, X, MapPin, Shield, Users, Settings } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: MapPin },
    { name: "Ride", href: "/ride", icon: Car },
    { name: "Drive", href: "/driver", icon: Users },
    { name: "Admin", href: "/admin", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              {/* Desktop SVG Logo */}
              <div className="w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
                >
                  <defs>
                    <linearGradient
                      id="desktopBgGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FF6B9D" />
                      <stop offset="40%" stopColor="#8B5CF6" />
                      <stop offset="80%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <linearGradient
                      id="desktopCarGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                    <linearGradient
                      id="desktopBGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F1F5F9" />
                    </linearGradient>
                  </defs>

                  {/* Background Circle */}
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="url(#desktopBgGradient)"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  />

                  {/* Inner Ring */}
                  <circle
                    cx="20"
                    cy="20"
                    r="15"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                  />

                  {/* Road Path */}
                  <path
                    d="M6 21 Q14 18 20 21 Q26 24 34 21"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.8"
                  />

                  {/* Road markings */}
                  <path
                    d="M10 21 L12 21 M18 21 L20 21 M26 21 L28 21"
                    stroke="#FFFFFF"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    opacity="0.7"
                  />

                  {/* Car */}
                  <g transform="translate(26, 19)">
                    <ellipse
                      cx="0"
                      cy="0"
                      rx="6"
                      ry="3"
                      fill="url(#desktopCarGradient)"
                    />
                    <circle cx="-3" cy="1.5" r="1" fill="#1F2937" />
                    <circle cx="3" cy="1.5" r="1" fill="#1F2937" />
                    <rect
                      x="-4"
                      y="-1.5"
                      width="3"
                      height="1.5"
                      rx="0.5"
                      fill="#F3F4F6"
                      opacity="0.9"
                    />
                  </g>

                  {/* Letter B */}
                  <g transform="translate(11, 10)">
                    <path
                      d="M0 0 L0 20 L10 20 Q14 20 14 15 Q14 12.5 12 11.25 Q14 10 14 7.5 Q14 0 10 0 Z M3.5 3.5 L10 3.5 Q10 3.5 10 7.5 Q10 9.5 8 9.5 L3.5 9.5 Z M3.5 11.5 L10 11.5 Q12 11.5 12 15 Q12 16.5 10 16.5 L3.5 16.5 Z"
                      fill="url(#desktopBGradient)"
                      stroke="#3B82F6"
                      strokeWidth="0.4"
                    />
                  </g>

                  {/* Motion Effects */}
                  <g className="animate-pulse">
                    <circle
                      cx="32"
                      cy="12"
                      r="0.8"
                      fill="#FBBF24"
                      opacity="0.8"
                    />
                    <circle cx="8" cy="28" r="1" fill="#FF6B9D" opacity="0.8" />
                    <circle
                      cx="32"
                      cy="28"
                      r="0.8"
                      fill="#8B5CF6"
                      opacity="0.8"
                    />
                  </g>
                </svg>
              </div>

              {/* Desktop Badge */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-md border border-white">
                <Car className="w-2 h-2 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              BAMBI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-taxi-gray hover:text-taxi-dark hover:bg-taxi-light-gray"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="btn-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-taxi-gray hover:text-taxi-dark hover:bg-taxi-light-gray"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 pb-2 border-t border-gray-200">
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    Sign In
                  </Button>
                  <Button size="sm" className="w-full btn-primary">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
