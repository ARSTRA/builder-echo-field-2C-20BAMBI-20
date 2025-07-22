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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Car,
  DollarSign,
  Clock,
  MapPin,
  Navigation,
  Star,
  TrendingUp,
  Zap,
  Users,
  Fuel,
  Shield,
  Phone,
  MessageCircle,
  Calendar,
  Target,
  Award,
  Battery,
  Wifi,
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  Bell,
  Settings,
  User,
  Heart,
  Coffee,
} from "lucide-react";

export default function DriverHome() {
  const [isOnline, setIsOnline] = useState(false);
  const [shiftType, setShiftType] = useState("day"); // day, night
  const [shareRideEnabled, setShareRideEnabled] = useState(true);

  const todayEarnings = {
    total: 247.5,
    trips: 12,
    hours: 8.5,
    avgPerTrip: 20.63,
    tips: 45.25,
    bonuses: 15.0,
  };

  const weeklyStats = {
    earnings: 1850.75,
    trips: 67,
    hours: 42.5,
    rating: 4.9,
    acceptance: 95,
    completion: 98,
  };

  const currentRequests = [
    {
      id: "REQ001",
      passengerName: "Sarah Johnson",
      rating: 4.8,
      pickup: "Downtown Mall",
      destination: "Airport Terminal 1",
      distance: "12.4 km",
      estimatedEarnings: 28.5,
      estimatedTime: "25 min",
      priority: "premium",
      specialRequests: ["Luggage Help"],
    },
    {
      id: "REQ002",
      passengerName: "Mike Chen",
      rating: 4.9,
      pickup: "Tech Park",
      destination: "City Center",
      distance: "8.1 km",
      estimatedEarnings: 18.25,
      estimatedTime: "15 min",
      priority: "standard",
      specialRequests: [],
    },
  ];

  const achievements = [
    {
      title: "Top Rated",
      description: "4.9+ rating this week",
      icon: Star,
      color: "text-yellow-500",
    },
    {
      title: "Eco Driver",
      description: "Fuel efficient driving",
      icon: Fuel,
      color: "text-green-500",
    },
    {
      title: "Safety First",
      description: "Zero incidents",
      icon: Shield,
      color: "text-blue-500",
    },
    {
      title: "Peak Performer",
      description: "15+ peak hour trips",
      icon: Zap,
      color: "text-purple-500",
    },
  ];

  const quickActions = [
    {
      title: "Navigate",
      icon: Navigation,
      href: "/driver/navigate",
      color: "bg-primary",
    },
    {
      title: "Earnings",
      icon: DollarSign,
      href: "/driver/earnings",
      color: "bg-success",
    },
    {
      title: "Messages",
      icon: MessageCircle,
      href: "/driver/messages",
      color: "bg-accent",
    },
    {
      title: "Support",
      icon: Phone,
      href: "/driver/support",
      color: "bg-warning",
    },
  ];

  const handleGoOnline = () => {
    setIsOnline(!isOnline);
  };

  const acceptRideRequest = (requestId: string) => {
    console.log("Accepting ride:", requestId);
  };

  const declineRideRequest = (requestId: string) => {
    console.log("Declining ride:", requestId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray pb-20">
      <div className="px-4 py-6">
        {/* Status Header */}
        <Card
          className={`mobile-card mb-6 ${isOnline ? "border-success bg-success/5" : "border-gray-300"}`}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-xl font-bold text-taxi-dark">
                  {isOnline ? "You're Online" : "You're Offline"}
                </h1>
                <p className="text-taxi-gray">
                  {isOnline
                    ? "Ready to accept ride requests"
                    : "Go online to start earning"}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className={isOnline ? "bg-success" : "bg-gray-500"}>
                  <div
                    className={`w-2 h-2 rounded-full mr-2 ${isOnline ? "bg-white" : "bg-gray-300"}`}
                  ></div>
                  {isOnline ? "Online" : "Offline"}
                </Badge>
                <Bell className="w-5 h-5 text-taxi-gray" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Switch
                  checked={isOnline}
                  onCheckedChange={handleGoOnline}
                  className="data-[state=checked]:bg-success"
                />
                <Label className="font-medium">
                  {isOnline ? "Go Offline" : "Go Online"}
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Battery className="w-4 h-4 text-success" />
                  <span className="text-sm text-taxi-gray">85%</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Wifi className="w-4 h-4 text-success" />
                  <span className="text-sm text-taxi-gray">Strong</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Earnings */}
        <Card className="mobile-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-success" />
              Today's Earnings
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-success">
                ${todayEarnings.total}
              </div>
              <p className="text-sm text-taxi-gray">
                {todayEarnings.trips} trips • {todayEarnings.hours}h online
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-semibold text-taxi-dark">
                  ${todayEarnings.avgPerTrip}
                </div>
                <p className="text-xs text-taxi-gray">Avg per trip</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-warning">
                  ${todayEarnings.tips}
                </div>
                <p className="text-xs text-taxi-gray">Tips</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-accent">
                  ${todayEarnings.bonuses}
                </div>
                <p className="text-xs text-taxi-gray">Bonuses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ride Requests */}
        {isOnline && currentRequests.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-taxi-dark mb-3">
              Ride Requests
            </h2>
            <div className="space-y-3">
              {currentRequests.map((request) => (
                <Card
                  key={request.id}
                  className="mobile-card border-primary/30 animate-fade-in"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-taxi-dark">
                            {request.passengerName}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-taxi-gray">
                              {request.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-success">
                          ${request.estimatedEarnings}
                        </div>
                        <div className="text-xs text-taxi-gray">
                          {request.estimatedTime}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start space-x-2">
                        <div className="w-3 h-3 bg-success rounded-full mt-1"></div>
                        <div>
                          <p className="text-sm font-medium text-taxi-dark">
                            {request.pickup}
                          </p>
                          <p className="text-xs text-taxi-gray">
                            Pickup location
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-3 h-3 bg-destructive rounded-full mt-1"></div>
                        <div>
                          <p className="text-sm font-medium text-taxi-dark">
                            {request.destination}
                          </p>
                          <p className="text-xs text-taxi-gray">
                            {request.distance}
                          </p>
                        </div>
                      </div>
                    </div>

                    {request.specialRequests.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {request.specialRequests.map((req, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <Button
                        className="flex-1 btn-mobile bg-success hover:bg-success/90"
                        onClick={() => acceptRideRequest(request.id)}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Accept
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 btn-mobile"
                        onClick={() => declineRideRequest(request.id)}
                      >
                        Decline
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

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
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-taxi-dark text-sm">
                      {action.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Weekly Performance */}
        <Card className="mobile-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-accent" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  ${weeklyStats.earnings}
                </div>
                <p className="text-xs text-taxi-gray">Total Earned</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {weeklyStats.trips}
                </div>
                <p className="text-xs text-taxi-gray">Trips Completed</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-taxi-gray">Rating</span>
                  <span className="font-medium">{weeklyStats.rating}/5.0</span>
                </div>
                <Progress value={weeklyStats.rating * 20} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-taxi-gray">Acceptance Rate</span>
                  <span className="font-medium">{weeklyStats.acceptance}%</span>
                </div>
                <Progress value={weeklyStats.acceptance} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-taxi-gray">Completion Rate</span>
                  <span className="font-medium">{weeklyStats.completion}%</span>
                </div>
                <Progress value={weeklyStats.completion} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Driver Preferences */}
        <Card className="mobile-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-taxi-gray" />
                <div>
                  <Label>Shift Type</Label>
                  <p className="text-sm text-taxi-gray">Current: Day shift</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Clock className="w-4 h-4 mr-1" />
                {shiftType === "day" ? "Switch to Night" : "Switch to Day"}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-taxi-gray" />
                <div>
                  <Label htmlFor="share-rides">Share Rides</Label>
                  <p className="text-sm text-taxi-gray">
                    Accept shared ride requests
                  </p>
                </div>
              </div>
              <Switch
                id="share-rides"
                checked={shareRideEnabled}
                onCheckedChange={setShareRideEnabled}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-taxi-gray" />
                <div>
                  <Label>Preferred Passenger</Label>
                  <p className="text-sm text-taxi-gray">
                    Accept from favorites first
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mobile-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-warning" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-taxi-light-gray/30 rounded-lg"
                  >
                    <Icon className={`w-6 h-6 ${achievement.color}`} />
                    <div>
                      <h4 className="font-medium text-taxi-dark text-sm">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-taxi-gray">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Current Location Status */}
        <Card className="mobile-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium text-taxi-dark">
                    Current Location
                  </h3>
                  <p className="text-sm text-taxi-gray">
                    Downtown Business District
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-success text-success-foreground">
                  High Demand
                </Badge>
                <Button variant="ghost" size="sm">
                  <Navigation className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Offline Message */}
        {!isOnline && (
          <Card className="mobile-card mt-6 border-warning/30 bg-warning/5">
            <CardContent className="p-4 text-center">
              <Coffee className="w-12 h-12 text-warning mx-auto mb-3" />
              <h3 className="font-semibold text-taxi-dark mb-2">
                Take a Break?
              </h3>
              <p className="text-sm text-taxi-gray mb-4">
                You're currently offline. Go online to start receiving ride
                requests and earning money.
              </p>
              <Button
                onClick={handleGoOnline}
                className="btn-mobile btn-primary"
              >
                Go Online Now
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
