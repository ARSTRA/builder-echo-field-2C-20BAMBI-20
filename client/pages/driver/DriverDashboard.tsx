import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { AuthModal } from "@/components/auth/AuthModal";
import { toast } from "sonner";
import {
  Car,
  MapPin,
  Navigation,
  Clock,
  CreditCard,
  Star,
  Users,
  Phone,
  MessageCircle,
  DollarSign,
  Shield,
  Zap,
  ArrowRight,
  Calendar,
  AlertTriangle,
  CheckCircle,
  RotateCcw,
  User,
  Gift,
  Percent,
  Bell,
  Settings,
  History,
  Eye,
  EyeOff,
  Mail,
  Download,
  Upload,
  Camera,
  Edit,
  Save,
  X,
  Send,
  Trash2,
  Filter,
  Search,
  CheckCheck,
  Target,
  Route,
  Compass,
  Wallet,
  Receipt,
  ThumbsUp,
  ThumbsDown,
  Plus,
  Share,
  Play,
  Pause,
  FileText,
  Briefcase,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Globe,
  Smartphone,
  Headphones,
  Award,
  Heart,
  BookOpen,
  Layers,
  Monitor,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";

export default function DriverDashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [currentRide, setCurrentRide] = useState(null);
  const [driverEarnings, setDriverEarnings] = useState({
    today: 156.5,
    week: 1245.75,
    month: 4890.25,
    total: 15678.9,
  });

  // Driver profile state
  const [driverProfile, setDriverProfile] = useState({
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael@example.com",
    phone: "+1 (555) 234-5678",
    licenseNumber: "DL123456789",
    vehicleMake: "Toyota",
    vehicleModel: "Camry",
    vehicleYear: "2022",
    vehicleColor: "Silver",
    licensePlate: "ABC-1234",
    rating: 4.95,
    totalRides: 2847,
    profilePhoto:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    emergencyContact: "+1 (555) 987-6543",
    address: "123 Main St, San Francisco, CA",
  });

  // Ride requests
  const [rideRequests, setRideRequests] = useState([
    {
      id: "REQ001",
      passengerName: "Sarah Wilson",
      pickup: "Downtown Mall",
      destination: "Airport Terminal 1",
      distance: "12.5 km",
      estimatedFare: 28.5,
      rating: 4.8,
      time: "2 min ago",
      type: "comfort",
    },
    {
      id: "REQ002",
      passengerName: "John Davis",
      pickup: "Hotel Central",
      destination: "Business District",
      distance: "8.2 km",
      estimatedFare: 18.75,
      rating: 4.9,
      time: "4 min ago",
      type: "economy",
    },
  ]);

  // Notifications
  const [notifications, setNotifications] = useState([
    {
      id: "N001",
      title: "New Ride Request",
      message: "Pickup at Downtown Mall - $28.50 estimated fare",
      time: "2 min ago",
      type: "ride",
      read: false,
    },
    {
      id: "N002",
      title: "Daily Bonus Achieved",
      message: "Congratulations! You've earned your $25 daily bonus",
      time: "1 hour ago",
      type: "bonus",
      read: false,
    },
    {
      id: "N003",
      title: "Document Reminder",
      message: "Your vehicle registration expires in 30 days",
      time: "3 hours ago",
      type: "document",
      read: true,
    },
  ]);

  // Documents
  const [documents, setDocuments] = useState([
    {
      id: "DOC001",
      type: "Driver's License",
      status: "verified",
      uploadDate: "2024-01-15",
      expiryDate: "2028-01-15",
      file: "drivers_license.pdf",
    },
    {
      id: "DOC002",
      type: "Vehicle Registration",
      status: "verified",
      uploadDate: "2024-01-10",
      expiryDate: "2025-02-20",
      file: "vehicle_registration.pdf",
    },
    {
      id: "DOC003",
      type: "Insurance Certificate",
      status: "pending",
      uploadDate: "2024-01-20",
      expiryDate: "2025-01-20",
      file: "insurance_cert.pdf",
    },
  ]);

  // Income data
  const [incomeData, setIncomeData] = useState({
    dailyEarnings: [
      { day: "Mon", amount: 142.5 },
      { day: "Tue", amount: 168.75 },
      { day: "Wed", amount: 134.25 },
      { day: "Thu", amount: 187.5 },
      { day: "Fri", amount: 203.75 },
      { day: "Sat", amount: 256.25 },
      { day: "Sun", amount: 198.5 },
    ],
    bonuses: {
      daily: 25.0,
      weekly: 75.0,
      referral: 50.0,
    },
    expenses: {
      fuel: 145.75,
      maintenance: 89.5,
      insurance: 125.0,
    },
  });

  // Toggle online status
  const handleToggleOnline = () => {
    setIsOnline(!isOnline);
    toast.success(`You are now ${!isOnline ? "online" : "offline"}`, {
      description: !isOnline
        ? "You'll start receiving ride requests"
        : "You won't receive new ride requests",
    });
  };

  // Accept ride request
  const handleAcceptRide = (requestId) => {
    const request = rideRequests.find((r) => r.id === requestId);
    setCurrentRide(request);
    setRideRequests((prev) => prev.filter((r) => r.id !== requestId));
    setActiveTab("navigation");
    toast.success("Ride accepted!", {
      description: `Heading to pickup: ${request.pickup}`,
    });
  };

  // Decline ride request
  const handleDeclineRide = (requestId) => {
    setRideRequests((prev) => prev.filter((r) => r.id !== requestId));
    toast.info("Ride request declined");
  };

  // Complete ride
  const handleCompleteRide = () => {
    if (currentRide) {
      const earnings = parseFloat(currentRide.estimatedFare);
      setDriverEarnings((prev) => ({
        ...prev,
        today: prev.today + earnings,
        week: prev.week + earnings,
        month: prev.month + earnings,
        total: prev.total + earnings,
      }));

      toast.success("Ride completed!", {
        description: `Earned $${currentRide.estimatedFare}`,
      });

      setCurrentRide(null);
      setActiveTab("home");
    }
  };

  // Upload document
  const handleDocumentUpload = (docType) => {
    toast.success("Document uploaded successfully!", {
      description: `${docType} has been submitted for verification`,
    });
  };

  // Update profile
  const handleProfileUpdate = () => {
    toast.success("Profile updated successfully!", {
      description: "Your changes have been saved",
    });
  };

  // Mark notification as read
  const handleMarkNotificationRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer group"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <span className="relative text-white font-black text-lg tracking-wider">
                    B
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Car className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  BAMBI Driver
                </h1>
                <p className="text-sm text-gray-600">
                  Professional driver dashboard
                </p>
              </div>
            </button>

            <div className="flex items-center space-x-4">
              {/* Online/Offline Toggle */}
              <div className="flex items-center space-x-2">
                <span
                  className={`text-sm font-medium ${isOnline ? "text-green-600" : "text-gray-500"}`}
                >
                  {isOnline ? "Online" : "Offline"}
                </span>
                <Switch
                  checked={isOnline}
                  onCheckedChange={handleToggleOnline}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={() => setActiveTab("notifications")}
              >
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500">
                  {notifications.filter((n) => !n.read).length}
                </Badge>
              </Button>

              {/* Earnings Display */}
              <div className="text-right">
                <div className="text-sm text-gray-600">Today's Earnings</div>
                <div className="text-lg font-bold text-green-600">
                  ${driverEarnings.today.toFixed(2)}
                </div>
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-2">
                <img
                  src={driverProfile.profilePhoto}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-sm">
                  <div className="font-medium">{driverProfile.firstName}</div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    {driverProfile.rating}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8 bg-white/80 backdrop-blur-md">
            <TabsTrigger value="home" className="text-xs">
              Home
            </TabsTrigger>
            <TabsTrigger value="requests" className="text-xs">
              Requests
            </TabsTrigger>
            <TabsTrigger value="navigation" className="text-xs">
              Navigation
            </TabsTrigger>
            <TabsTrigger value="earnings" className="text-xs">
              Earnings
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-xs">
              Profile
            </TabsTrigger>
            <TabsTrigger value="documents" className="text-xs">
              Documents
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs">
              Alerts
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-xs">
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Status Card */}
              <Card className="lg:col-span-2 shadow-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Activity
                        className={`w-5 h-5 mr-2 ${isOnline ? "text-green-500" : "text-gray-400"}`}
                      />
                      Driver Status
                    </div>
                    <Badge
                      className={isOnline ? "bg-green-500" : "bg-gray-400"}
                    >
                      {isOnline ? "ONLINE" : "OFFLINE"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isOnline ? (
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Search className="w-8 h-8 text-white animate-pulse" />
                        </div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">
                          Searching for Rides
                        </h3>
                        <p className="text-sm text-green-600">
                          You're online and ready to accept ride requests
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {rideRequests.length}
                          </div>
                          <div className="text-sm text-gray-500">
                            Pending Requests
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            8.5 km
                          </div>
                          <div className="text-sm text-gray-500">
                            Distance Away
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            3 min
                          </div>
                          <div className="text-sm text-gray-500">
                            Avg Response
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Pause className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        You're Offline
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Go online to start receiving ride requests
                      </p>
                      <Button
                        onClick={handleToggleOnline}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Go Online
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="space-y-4">
                <Card className="shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Today's Rides</p>
                        <p className="text-2xl font-bold text-blue-600">12</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Car className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Online Hours</p>
                        <p className="text-2xl font-bold text-green-600">
                          6.5h
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Rating</p>
                        <p className="text-2xl font-bold text-yellow-600">
                          {driverProfile.rating}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-yellow-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent Activity */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="w-5 h-5 mr-2 text-purple-600" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium">Ride Completed</p>
                        <p className="text-sm text-gray-500">
                          Downtown to Airport • 2:30 PM
                        </p>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">+$28.50</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Gift className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Daily Bonus Earned</p>
                        <p className="text-sm text-gray-500">
                          Completed 10 rides today
                        </p>
                      </div>
                    </div>
                    <div className="text-blue-600 font-semibold">+$25.00</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="font-medium">5-Star Rating Received</p>
                        <p className="text-sm text-gray-500">
                          From Sarah Wilson
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-500">Excellent</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ride Requests Tab */}
          <TabsContent value="requests" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-blue-600" />
                    Ride Requests
                  </div>
                  <Badge className="bg-blue-500">
                    {rideRequests.length} Available
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {rideRequests.length > 0 ? (
                  <div className="space-y-4">
                    {rideRequests.map((request) => (
                      <div
                        key={request.id}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold">
                                {request.passengerName}
                              </h3>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-600">
                                  {request.rating}
                                </span>
                                <span className="text-sm text-gray-400">
                                  • {request.time}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">
                              ${request.estimatedFare}
                            </div>
                            <div className="text-sm text-gray-500">
                              {request.distance}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">
                              {request.pickup}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">
                              {request.destination}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="capitalize">
                            {request.type}
                          </Badge>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeclineRide(request.id)}
                            >
                              Decline
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleAcceptRide(request.id)}
                              className="bg-green-500 hover:bg-green-600"
                            >
                              Accept Ride
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      No Ride Requests
                    </h3>
                    <p className="text-gray-500">
                      {isOnline
                        ? "Waiting for new ride requests..."
                        : "Go online to receive ride requests"}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Navigation Tab */}
          <TabsContent value="navigation" className="space-y-6">
            {currentRide ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Map View */}
                <Card className="shadow-xl">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Navigation className="w-5 h-5 mr-2 text-blue-600" />
                      GPS Navigation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div
                      className="h-96 bg-cover bg-center relative rounded-lg overflow-hidden"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=400&fit=crop&crop=center')",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                      {/* Navigation Controls */}
                      <div className="absolute top-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-md rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-medium">
                                Live Navigation
                              </span>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost">
                                <Compass className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Zap className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Route Info */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-md rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Next Turn</p>
                              <p className="font-bold">Turn right in 0.3 km</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">ETA</p>
                              <p className="font-bold">8 minutes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ride Controls */}
                <div className="space-y-6">
                  {/* Current Ride */}
                  <Card className="shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center">
                        <Car className="w-5 h-5 mr-2 text-green-600" />
                        Current Ride
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">
                              {currentRide.passengerName}
                            </h3>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600">
                                {currentRide.rating}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">
                              ${currentRide.estimatedFare}
                            </div>
                            <div className="text-sm text-gray-500">
                              {currentRide.distance}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm">
                              {currentRide.pickup}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-sm">
                              {currentRide.destination}
                            </span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => toast.info("Calling passenger...")}
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => toast.info("Opening chat...")}
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Chat
                          </Button>
                        </div>

                        <Button
                          onClick={handleCompleteRide}
                          className="w-full bg-green-500 hover:bg-green-600"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Complete Ride
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Navigation Tools */}
                  <Card className="shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center">
                        <Route className="w-5 h-5 mr-2 text-purple-600" />
                        Navigation Tools
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant="outline"
                          onClick={() =>
                            toast.success("Opening Google Maps...")
                          }
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Google Maps
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => toast.info("Alternative route found")}
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Alt Route
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() =>
                            toast.info("Traffic conditions updated")
                          }
                        >
                          <Activity className="w-4 h-4 mr-2" />
                          Traffic
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() =>
                            toast.info("Emergency services notified")
                          }
                        >
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Emergency
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <Card className="shadow-lg">
                <CardContent className="text-center p-12">
                  <Navigation className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    No Active Ride
                  </h3>
                  <p className="text-gray-500">
                    Accept a ride request to start navigation
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Earnings Cards */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      ${driverEarnings.today.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">Today</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      ${driverEarnings.week.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">This Week</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      ${driverEarnings.month.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">This Month</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      ${driverEarnings.total.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">Total Earned</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Earnings Chart */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Weekly Earnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {incomeData.dailyEarnings.map((day, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="w-12 text-sm text-gray-600">
                        {day.day}
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-gray-200 rounded-full h-6 relative overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-green-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${(day.amount / 300) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-20 text-right font-semibold text-green-600">
                        ${day.amount.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bonuses & Expenses */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gift className="w-5 h-5 mr-2 text-purple-600" />
                    Bonuses & Incentives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm">Daily Bonus</span>
                      <span className="font-semibold text-purple-600">
                        +${incomeData.bonuses.daily.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm">Weekly Target</span>
                      <span className="font-semibold text-blue-600">
                        +${incomeData.bonuses.weekly.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm">Referral Bonus</span>
                      <span className="font-semibold text-green-600">
                        +${incomeData.bonuses.referral.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Receipt className="w-5 h-5 mr-2 text-red-600" />
                    Expenses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-sm">Fuel</span>
                      <span className="font-semibold text-red-600">
                        -${incomeData.expenses.fuel.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm">Maintenance</span>
                      <span className="font-semibold text-orange-600">
                        -${incomeData.expenses.maintenance.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm">Insurance</span>
                      <span className="font-semibold text-yellow-600">
                        -${incomeData.expenses.insurance.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Driver Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Profile Photo */}
              <Card className="shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-blue-600" />
                    Profile Photo
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <img
                      src={driverProfile.profilePhoto}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <Button
                      size="sm"
                      className="absolute bottom-0 right-0 rounded-full w-10 h-10 p-0"
                      onClick={() => toast.success("Camera opened")}
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      {driverProfile.firstName} {driverProfile.lastName}
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">
                        {driverProfile.rating}
                      </span>
                      <span className="text-gray-500">
                        • {driverProfile.totalRides} rides
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Information */}
              <Card className="shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <Edit className="w-5 h-5 mr-2 text-green-600" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={driverProfile.firstName}
                        onChange={(e) =>
                          setDriverProfile((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={driverProfile.lastName}
                        onChange={(e) =>
                          setDriverProfile((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={driverProfile.email}
                      onChange={(e) =>
                        setDriverProfile((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={driverProfile.phone}
                      onChange={(e) =>
                        setDriverProfile((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={driverProfile.address}
                      onChange={(e) =>
                        setDriverProfile((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Vehicle Information */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Car className="w-5 h-5 mr-2 text-purple-600" />
                  Vehicle Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicleMake">Make</Label>
                    <Input
                      id="vehicleMake"
                      value={driverProfile.vehicleMake}
                      onChange={(e) =>
                        setDriverProfile((prev) => ({
                          ...prev,
                          vehicleMake: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleModel">Model</Label>
                    <Input
                      id="vehicleModel"
                      value={driverProfile.vehicleModel}
                      onChange={(e) =>
                        setDriverProfile((prev) => ({
                          ...prev,
                          vehicleModel: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleYear">Year</Label>
                    <Input
                      id="vehicleYear"
                      value={driverProfile.vehicleYear}
                      onChange={(e) =>
                        setDriverProfile((prev) => ({
                          ...prev,
                          vehicleYear: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleColor">Color</Label>
                    <Input
                      id="vehicleColor"
                      value={driverProfile.vehicleColor}
                      onChange={(e) =>
                        setDriverProfile((prev) => ({
                          ...prev,
                          vehicleColor: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licensePlate">License Plate</Label>
                    <Input
                      id="licensePlate"
                      value={driverProfile.licensePlate}
                      onChange={(e) =>
                        setDriverProfile((prev) => ({
                          ...prev,
                          licensePlate: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">Driver's License</Label>
                    <Input
                      id="licenseNumber"
                      value={driverProfile.licenseNumber}
                      onChange={(e) =>
                        setDriverProfile((prev) => ({
                          ...prev,
                          licenseNumber: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <Button className="w-full mt-6" onClick={handleProfileUpdate}>
                  <Save className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Document Verification
                </CardTitle>
                <CardDescription>
                  Keep your documents up to date for uninterrupted service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              doc.status === "verified"
                                ? "bg-green-100"
                                : doc.status === "pending"
                                  ? "bg-yellow-100"
                                  : "bg-red-100"
                            }`}
                          >
                            <FileText
                              className={`w-5 h-5 ${
                                doc.status === "verified"
                                  ? "text-green-600"
                                  : doc.status === "pending"
                                    ? "text-yellow-600"
                                    : "text-red-600"
                              }`}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{doc.type}</h3>
                            <p className="text-sm text-gray-500">
                              Expires:{" "}
                              {new Date(doc.expiryDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Badge
                            className={
                              doc.status === "verified"
                                ? "bg-green-500"
                                : doc.status === "pending"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                            }
                          >
                            {doc.status}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDocumentUpload(doc.type)}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Update
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">
                    Upload New Document
                  </h4>
                  <div className="flex items-center space-x-3">
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="background-check">
                          Background Check
                        </SelectItem>
                        <SelectItem value="medical-cert">
                          Medical Certificate
                        </SelectItem>
                        <SelectItem value="tax-clearance">
                          Tax Clearance
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      onClick={() => toast.success("Document upload initiated")}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Document
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-red-600" />
                    Notifications & Alerts
                  </CardTitle>
                  <Badge className="bg-red-500">
                    {notifications.filter((n) => !n.read).length} New
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        !notification.read
                          ? "bg-blue-50 border-blue-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                      onClick={() =>
                        handleMarkNotificationRead(notification.id)
                      }
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              notification.type === "ride"
                                ? "bg-blue-100"
                                : notification.type === "bonus"
                                  ? "bg-green-100"
                                  : "bg-yellow-100"
                            }`}
                          >
                            {notification.type === "ride" && (
                              <Car className="w-4 h-4 text-blue-600" />
                            )}
                            {notification.type === "bonus" && (
                              <Gift className="w-4 h-4 text-green-600" />
                            )}
                            {notification.type === "document" && (
                              <FileText className="w-4 h-4 text-yellow-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold">
                                {notification.title}
                              </h3>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setNotifications((prev) =>
                        prev.map((n) => ({ ...n, read: true })),
                      );
                      toast.success("All notifications marked as read");
                    }}
                  >
                    <CheckCheck className="w-4 h-4 mr-2" />
                    Mark All Read
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => toast.info("Notification settings opened")}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Push Notification Settings */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-purple-600" />
                  Push Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="rideRequests">Ride Requests</Label>
                      <p className="text-sm text-gray-500">
                        Get notified about new ride requests
                      </p>
                    </div>
                    <Switch id="rideRequests" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="earnings">Earnings Updates</Label>
                      <p className="text-sm text-gray-500">
                        Daily and weekly earnings summaries
                      </p>
                    </div>
                    <Switch id="earnings" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="promotions">Promotions & Bonuses</Label>
                      <p className="text-sm text-gray-500">
                        Special offers and bonus opportunities
                      </p>
                    </div>
                    <Switch id="promotions" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="documents">Document Reminders</Label>
                      <p className="text-sm text-gray-500">
                        Expiration and renewal reminders
                      </p>
                    </div>
                    <Switch id="documents" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            {/* Driver Preferences */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-blue-600" />
                  Driver Preferences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Ride Preferences</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="autoAccept">Auto-accept rides</Label>
                          <Switch id="autoAccept" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="destination">Destination mode</Label>
                          <Switch id="destination" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="poolRides">Pool rides</Label>
                          <Switch id="poolRides" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Availability</h4>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="maxDistance">
                            Maximum pickup distance
                          </Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select distance" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5">5 km</SelectItem>
                              <SelectItem value="10">10 km</SelectItem>
                              <SelectItem value="15">15 km</SelectItem>
                              <SelectItem value="20">20 km</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="workingHours">
                            Preferred working hours
                          </Label>
                          <div className="grid grid-cols-2 gap-2">
                            <Input type="time" placeholder="Start time" />
                            <Input type="time" placeholder="End time" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Discount & Voucher System */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-purple-600" />
                  Discount & Voucher System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Available Vouchers</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">Fuel Discount</p>
                            <p className="text-sm text-gray-600">
                              20% off at partner stations
                            </p>
                          </div>
                          <Badge className="bg-purple-500">Active</Badge>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">Maintenance Credit</p>
                            <p className="text-sm text-gray-600">
                              $50 service credit
                            </p>
                          </div>
                          <Badge className="bg-blue-500">Available</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Referral Program</h4>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">
                          $50
                        </div>
                        <p className="text-sm text-green-700">
                          Earn for each new driver referral
                        </p>
                        <Button
                          className="mt-3 bg-green-500 hover:bg-green-600"
                          size="sm"
                        >
                          <Share className="w-4 h-4 mr-2" />
                          Share Referral Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Automation */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-orange-600" />
                  Email Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="weeklyReport">
                        Weekly earnings report
                      </Label>
                      <p className="text-sm text-gray-500">
                        Automatically sent every Monday
                      </p>
                    </div>
                    <Switch id="weeklyReport" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="monthlyStatement">
                        Monthly statement
                      </Label>
                      <p className="text-sm text-gray-500">
                        Tax-ready earnings summary
                      </p>
                    </div>
                    <Switch id="monthlyStatement" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="promotions">Promotional emails</Label>
                      <p className="text-sm text-gray-500">
                        Special offers and opportunities
                      </p>
                    </div>
                    <Switch id="promotions" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="updates">Product updates</Label>
                      <p className="text-sm text-gray-500">
                        New features and improvements
                      </p>
                    </div>
                    <Switch id="updates" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support & Help */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Headphones className="w-5 h-5 mr-2 text-green-600" />
                  Support & Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    className="h-20 flex-col"
                    onClick={() => toast.info("Calling driver support...")}
                  >
                    <Phone className="w-6 h-6 mb-2" />
                    <span>Call Support</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col"
                    onClick={() => toast.info("Opening live chat...")}
                  >
                    <MessageCircle className="w-6 h-6 mb-2" />
                    <span>Live Chat</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col"
                    onClick={() => toast.info("Opening help center...")}
                  >
                    <BookOpen className="w-6 h-6 mb-2" />
                    <span>Help Center</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        userType="driver"
      />
    </div>
  );
}
