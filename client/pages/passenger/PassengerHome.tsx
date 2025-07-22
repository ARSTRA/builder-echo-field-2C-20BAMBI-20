import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AuthModal } from "@/components/auth/AuthModal";
import {
  MapPin,
  Navigation,
  Clock,
  CreditCard,
  Star,
  Car,
  Shield,
  Gift,
  Bell,
  User,
  Search,
  Heart,
  Zap,
  ArrowRight,
  Percent,
  Calendar,
  Users,
  DollarSign,
} from "lucide-react";

export default function PassengerHome() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const quickActions = [
    {
      title: "Book Now",
      description: "Get a ride in minutes",
      icon: Car,
      href: "/passenger/book",
      color: "bg-primary",
      textColor: "text-primary-foreground",
    },
    {
      title: "Schedule",
      description: "Plan for later",
      icon: Calendar,
      href: "/passenger/schedule",
      color: "bg-accent",
      textColor: "text-accent-foreground",
    },
    {
      title: "Share Ride",
      description: "Split the cost",
      icon: Users,
      href: "/passenger/share",
      color: "bg-success",
      textColor: "text-success-foreground",
    },
    {
      title: "Packages",
      description: "Send & receive",
      icon: Gift,
      href: "/passenger/packages",
      color: "bg-warning",
      textColor: "text-warning-foreground",
    },
  ];

  const vehicleTypes = [
    {
      name: "Economy",
      description: "Affordable everyday rides",
      price: "From $8",
      eta: "2-5 min",
      icon: "🚗",
      passengers: "1-4",
      popular: false,
    },
    {
      name: "Comfort",
      description: "More space and comfort",
      price: "From $12",
      eta: "3-7 min",
      icon: "🚙",
      passengers: "1-4",
      popular: true,
    },
    {
      name: "Premium",
      description: "Luxury vehicles",
      price: "From $20",
      eta: "5-10 min",
      icon: "🚘",
      passengers: "1-4",
      popular: false,
    },
    {
      name: "Share",
      description: "Split costs with others",
      price: "From $4",
      eta: "5-15 min",
      icon: "🚐",
      passengers: "1-6",
      popular: false,
    },
  ];

  const promoOffers = [
    {
      title: "50% OFF",
      description: "First 3 rides",
      code: "WELCOME50",
      validUntil: "Dec 31",
      color: "bg-gradient-to-r from-primary to-accent",
    },
    {
      title: "Free Ride",
      description: "Refer a friend",
      code: "REFER2024",
      validUntil: "Limited time",
      color: "bg-gradient-to-r from-success to-accent",
    },
  ];

  const recentDestinations = [
    { name: "Home", address: "123 Main Street", icon: "🏠" },
    { name: "Work", address: "456 Business Ave", icon: "🏢" },
    { name: "Airport", address: "Terminal 1", icon: "✈️" },
    { name: "Mall", address: "Downtown Shopping", icon: "🛍️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray pb-20">
      {/* Hero Section */}
      <div className="px-4 pt-6 pb-8">
        {/* Welcome Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-taxi-dark">
              {isLoggedIn ? "Welcome back, John!" : "Where to?"}
            </h1>
            <p className="text-taxi-gray mt-1">
              {isLoggedIn
                ? "Your ride is just a tap away"
                : "Sign in for a better experience"}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-destructive">
                3
              </Badge>
            </Button>
            {!isLoggedIn && (
              <Button
                size="sm"
                onClick={() => setShowAuthModal(true)}
                className="btn-mobile btn-primary"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>

        {/* Quick Booking Card */}
        <Card className="mobile-card glass-effect-strong mb-6">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-taxi-dark">Quick Book</h3>
                <p className="text-sm text-taxi-gray">
                  Tap to select destination
                </p>
              </div>
              <Zap className="w-5 h-5 text-primary" />
            </div>

            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-taxi-gray" />
                <Input
                  placeholder="Where are you going?"
                  className="pl-10 h-12 bg-white/80"
                />
              </div>

              <Link to="/passenger/book">
                <Button className="w-full btn-mobile btn-primary">
                  <Navigation className="w-5 h-5 mr-2" />
                  Find Available Rides
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link key={index} to={action.href}>
                <Card className="mobile-card-interactive h-full">
                  <CardContent className="p-4 text-center">
                    <div
                      className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                    >
                      <Icon className={`w-6 h-6 ${action.textColor}`} />
                    </div>
                    <h3 className="font-semibold text-taxi-dark text-sm mb-1">
                      {action.title}
                    </h3>
                    <p className="text-xs text-taxi-gray">
                      {action.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Promotional Offers */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-taxi-dark">
              Special Offers
            </h2>
            <Link to="/passenger/offers">
              <Button variant="link" className="text-sm p-0 h-auto">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {promoOffers.map((offer, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`${offer.color} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Percent className="w-5 h-5" />
                        <span className="text-lg font-bold">{offer.title}</span>
                      </div>
                      <p className="text-sm opacity-90 mb-1">
                        {offer.description}
                      </p>
                      <p className="text-xs opacity-75">
                        Code: {offer.code} • Valid until {offer.validUntil}
                      </p>
                    </div>
                    <Gift className="w-8 h-8 opacity-80" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Vehicle Types */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-taxi-dark mb-3">
            Choose Your Ride
          </h2>
          <div className="space-y-3">
            {vehicleTypes.map((vehicle, index) => (
              <Card key={index} className="mobile-card-interactive">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{vehicle.icon}</div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-taxi-dark">
                            {vehicle.name}
                          </h3>
                          {vehicle.popular && (
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-taxi-gray">
                          {vehicle.description}
                        </p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-xs text-taxi-gray">
                            <Users className="w-3 h-3 inline mr-1" />
                            {vehicle.passengers}
                          </span>
                          <span className="text-xs text-taxi-gray">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {vehicle.eta}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {vehicle.price}
                      </div>
                      <ArrowRight className="w-4 h-4 text-taxi-gray ml-auto" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Destinations */}
        {isLoggedIn && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-taxi-dark mb-3">
              Recent Destinations
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {recentDestinations.map((destination, index) => (
                <Card key={index} className="mobile-card-interactive">
                  <CardContent className="p-3 text-center">
                    <div className="text-2xl mb-2">{destination.icon}</div>
                    <h3 className="font-medium text-taxi-dark text-sm mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-xs text-taxi-gray truncate">
                      {destination.address}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="mobile-card text-center">
            <CardContent className="p-3">
              <Shield className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-xs font-medium text-taxi-dark">Safe</p>
              <p className="text-xs text-taxi-gray">Verified drivers</p>
            </CardContent>
          </Card>

          <Card className="mobile-card text-center">
            <CardContent className="p-3">
              <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-xs font-medium text-taxi-dark">Fast</p>
              <p className="text-xs text-taxi-gray">Quick pickup</p>
            </CardContent>
          </Card>

          <Card className="mobile-card text-center">
            <CardContent className="p-3">
              <Star className="w-8 h-8 text-warning mx-auto mb-2" />
              <p className="text-xs font-medium text-taxi-dark">Rated</p>
              <p className="text-xs text-taxi-gray">4.9/5 average</p>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="mobile-card bg-red-50 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-red-800">Emergency</h3>
                <p className="text-sm text-red-600">
                  24/7 safety support available
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-red-300 text-red-600"
              >
                Call 911
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        userType="passenger"
      />
    </div>
  );
}
