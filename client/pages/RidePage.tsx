import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { AuthModal } from "@/components/auth/AuthModal";
import { toast } from "sonner";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  CreditCard, 
  Star, 
  Car,
  Users,
  Phone,
  MessageCircle,
  DollarSign,
  Baby,
  Accessibility,
  Heart,
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
  Share
} from "lucide-react";

export default function RidePage() {
  const [activeTab, setActiveTab] = useState("booking");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentTrip, setCurrentTrip] = useState(null);
  const [estimatedFare, setEstimatedFare] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [driverETA, setDriverETA] = useState(3);
  const [tripProgress, setTripProgress] = useState("assigned");

  // Booking state
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("comfort");
  const [bookingType, setBookingType] = useState("now");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Profile state
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    photo: "👨‍💼",
    emergencyContact: "+1 (555) 987-6543"
  });

  // Notifications state
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      title: "Driver Arrived",
      message: "Your driver Sarah is waiting outside",
      time: "2 min ago",
      type: "urgent",
      read: false
    },
    {
      id: "2",
      title: "Trip Completed",
      message: "Your ride to Airport has been completed",
      time: "1 hour ago",
      type: "info",
      read: true
    }
  ]);

  // Payment state
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [walletBalance, setWalletBalance] = useState(45.50);

  // Review state
  const [tripRating, setTripRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const vehicleOptions = [
    {
      id: "economy",
      name: "Economy",
      description: "Affordable everyday rides",
      icon: "🚗",
      basePrice: 8,
      perKm: 1.2,
      eta: "2-5 min",
      passengers: 4,
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: "comfort",
      name: "Comfort",
      description: "More space and comfort",
      icon: "🚙",
      basePrice: 12,
      perKm: 1.8,
      eta: "3-7 min",
      passengers: 4,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: "premium",
      name: "Premium",
      description: "Luxury vehicles",
      icon: "🚘",
      basePrice: 20,
      perKm: 2.5,
      eta: "5-10 min",
      passengers: 4,
      image: "https://images.unsplash.com/photo-1563720223-b09b1bd4f6c2?w=400&h=200&fit=crop&crop=center"
    }
  ];

  const tripHistory = [
    {
      id: "TR001",
      date: "Today, 2:30 PM",
      from: "Downtown Mall",
      to: "Airport Terminal 1",
      fare: 32.00,
      rating: 5,
      driver: "Sarah Johnson",
      status: "completed"
    },
    {
      id: "TR002", 
      date: "Yesterday, 9:15 AM",
      from: "Home",
      to: "Office",
      fare: 18.50,
      rating: 4,
      driver: "Mike Wilson",
      status: "completed"
    }
  ];

  // Simulate driver tracking
  useEffect(() => {
    if (isTracking && driverETA > 0) {
      const timer = setInterval(() => {
        setDriverETA(prev => {
          if (prev <= 1) {
            setTripProgress("pickup");
            return 0;
          }
          return prev - 1;
        });
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isTracking, driverETA]);

  // Button Handlers
  const handleNotificationClick = () => {
    toast.info("Opening notifications...", {
      description: `You have ${notifications.filter(n => !n.read).length} unread notifications`
    });
  };

  const handleSignInClick = () => {
    setShowAuthModal(true);
    toast.info("Please sign in to continue");
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setShowAuthModal(false);
    toast.success("Successfully signed in!");
  };

  const calculateFare = () => {
    if (!pickupLocation || !destination) {
      toast.error("Please enter both pickup and destination locations");
      return;
    }

    const selectedVehicleData = vehicleOptions.find(v => v.id === selectedVehicle);
    const mockDistance = Math.random() * 15 + 2;
    const basePrice = selectedVehicleData.basePrice;
    const distancePrice = mockDistance * selectedVehicleData.perKm;
    const total = basePrice + distancePrice;

    setEstimatedFare({
      distance: mockDistance.toFixed(1),
      basePrice,
      distancePrice: distancePrice.toFixed(2),
      total: total.toFixed(2),
      duration: Math.floor(mockDistance * 2 + 5)
    });

    toast.success("Fare calculated successfully!", {
      description: `Estimated total: $${total.toFixed(2)}`
    });
  };

  const handleBookRide = () => {
    if (!pickupLocation || !destination) {
      toast.error("Please enter pickup and destination locations");
      return;
    }

    if (!isLoggedIn) {
      toast.error("Please sign in to book a ride");
      setShowAuthModal(true);
      return;
    }

    // Simulate booking process
    toast.loading("Booking your ride...", { duration: 2000 });
    
    setTimeout(() => {
      setCurrentTrip({
        id: "TR" + Math.random().toString(36).substr(2, 9),
        status: "searching",
        pickup: pickupLocation,
        destination: destination,
        vehicle: selectedVehicle,
        fare: estimatedFare?.total || "0"
      });
      
      setIsTracking(true);
      setActiveTab("tracking");
      
      toast.success("Ride booked successfully!", {
        description: "Finding a driver near you..."
      });
    }, 2000);
  };

  const handleCancelTrip = () => {
    setCurrentTrip(null);
    setIsTracking(false);
    setDriverETA(3);
    setTripProgress("assigned");
    setActiveTab("booking");
    toast.success("Trip cancelled successfully");
  };

  const handleCallDriver = () => {
    toast.info("Calling driver...", {
      description: "Connecting you to Mike Johnson"
    });
  };

  const handleMessageDriver = () => {
    toast.info("Opening chat...", {
      description: "Chat with your driver"
    });
  };

  const handleEmergency = () => {
    toast.error("Emergency alert sent!", {
      description: "Notifying emergency contacts and authorities"
    });
  };

  const handleShareTrip = () => {
    toast.success("Trip shared successfully!", {
      description: "Emergency contacts have been notified"
    });
  };

  const handleDownloadReceipt = (tripId) => {
    toast.success("Receipt downloaded!", {
      description: `Receipt for trip ${tripId} saved to downloads`
    });
  };

  const handleRebookTrip = (trip) => {
    setPickupLocation(trip.from);
    setDestination(trip.to);
    setActiveTab("booking");
    toast.success("Trip details copied to booking form");
  };

  const handleProfileSave = () => {
    toast.success("Profile updated successfully!", {
      description: "Your changes have been saved"
    });
  };

  const handlePhotoUpload = () => {
    toast.info("Photo upload coming soon!", {
      description: "Camera integration will be available in the next update"
    });
  };

  const handleAddPaymentMethod = () => {
    toast.info("Add payment method", {
      description: "This will open the payment setup flow"
    });
  };

  const handleTopUpWallet = () => {
    const amount = 50;
    setWalletBalance(prev => prev + amount);
    toast.success(`Wallet topped up!`, {
      description: `Added $${amount} to your wallet`
    });
  };

  const handleMarkNotificationRead = (id) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
    toast.success("Notification marked as read");
  };

  const handleMarkAllNotificationsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
    toast.success("All notifications marked as read");
  };

  const handleDeleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    toast.success("Notification deleted");
  };

  const handleSubmitReview = () => {
    if (tripRating === 0) {
      toast.error("Please select a rating");
      return;
    }

    toast.success("Review submitted!", {
      description: `Thank you for rating ${tripRating} stars`
    });
    
    setTripRating(0);
    setReviewText("");
  };

  const handleCallSupport = () => {
    toast.info("Calling support...", {
      description: "Connecting you to customer service"
    });
  };

  const handleLiveChat = () => {
    toast.info("Opening live chat...", {
      description: "Chat with our support team"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SmartCommute</h1>
                <p className="text-sm text-gray-600">Your ride companion</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="relative"
                onClick={handleNotificationClick}
              >
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500">
                  {notifications.filter(n => !n.read).length}
                </Badge>
              </Button>
              {!isLoggedIn && (
                <Button onClick={handleSignInClick} size="sm">
                  Sign In
                </Button>
              )}
              {isLoggedIn && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Welcome, {profile.firstName}!</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Sign Out
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-6 mb-8 bg-white/80 backdrop-blur-md">
            <TabsTrigger value="booking" className="text-xs">Booking</TabsTrigger>
            <TabsTrigger value="tracking" className="text-xs">Tracking</TabsTrigger>
            <TabsTrigger value="history" className="text-xs">History</TabsTrigger>
            <TabsTrigger value="profile" className="text-xs">Profile</TabsTrigger>
            <TabsTrigger value="payment" className="text-xs">Payment</TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs">Alerts</TabsTrigger>
          </TabsList>

          {/* Booking Tab */}
          <TabsContent value="booking" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Hero Image */}
              <div className="lg:order-2">
                <Card className="overflow-hidden shadow-xl">
                  <div 
                    className="h-64 lg:h-80 bg-cover bg-center relative"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop&crop=center')"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h2 className="text-2xl font-bold mb-2">Book Your Ride</h2>
                      <p className="text-sm opacity-90">Safe, fast, and reliable transportation</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Booking Form */}
              <div className="lg:order-1 space-y-6">
                {/* Registration/Login Card */}
                {!isLoggedIn && (
                  <Card className="border-blue-200 bg-blue-50/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center">
                        <User className="w-5 h-5 mr-2 text-blue-600" />
                        Account Access
                      </CardTitle>
                      <CardDescription>Sign in or create an account for the best experience</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-2 gap-3">
                        <Button 
                          onClick={handleSignInClick}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <User className="w-4 h-4 mr-2" />
                          Sign In
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => {
                            setShowAuthModal(true);
                            toast.info("Registration form opened");
                          }}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Register
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Trip Type Selection */}
                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-yellow-600" />
                      Trip Type
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant={bookingType === "now" ? "default" : "outline"}
                        className="h-16 flex-col"
                        onClick={() => {
                          setBookingType("now");
                          toast.success("Book now selected");
                        }}
                      >
                        <Zap className="w-6 h-6 mb-1" />
                        <span>Book Now</span>
                      </Button>
                      <Button
                        variant={bookingType === "schedule" ? "default" : "outline"}
                        className="h-16 flex-col"
                        onClick={() => {
                          setBookingType("schedule");
                          toast.success("Schedule ride selected");
                        }}
                      >
                        <Calendar className="w-6 h-6 mb-1" />
                        <span>Schedule</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Location Inputs */}
                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-green-600" />
                      Trip Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickup">Pickup Location</Label>
                      <div className="relative">
                        <Navigation className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
                        <Input 
                          id="pickup"
                          placeholder="Current location or enter address"
                          className="pl-10 h-12"
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                          onClick={() => {
                            setPickupLocation("Current Location");
                            toast.success("Current location selected");
                          }}
                        >
                          <Target className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500" />
                        <Input 
                          id="destination"
                          placeholder="Where would you like to go?"
                          className="pl-10 h-12"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                        />
                      </div>
                    </div>

                    {bookingType === "schedule" && (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="date">Date</Label>
                          <Input 
                            id="date" 
                            type="date" 
                            className="h-12"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Time</Label>
                          <Input 
                            id="time" 
                            type="time" 
                            className="h-12"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Car Selection Tab */}
                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Car className="w-5 h-5 mr-2 text-blue-600" />
                      Vehicle Selection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    {vehicleOptions.map((vehicle) => (
                      <div
                        key={vehicle.id}
                        className={`relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all ${
                          selectedVehicle === vehicle.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => {
                          setSelectedVehicle(vehicle.id);
                          toast.success(`${vehicle.name} selected`);
                        }}
                      >
                        <div 
                          className="h-24 bg-cover bg-center"
                          style={{ backgroundImage: `url(${vehicle.image})` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">{vehicle.icon}</div>
                              <div>
                                <h3 className="font-semibold text-gray-900">{vehicle.name}</h3>
                                <p className="text-sm text-gray-600">{vehicle.description}</p>
                                <div className="flex items-center space-x-3 mt-1">
                                  <span className="text-xs text-gray-500">
                                    <Users className="w-3 h-3 inline mr-1" />
                                    {vehicle.passengers} seats
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    <Clock className="w-3 h-3 inline mr-1" />
                                    {vehicle.eta}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-blue-600">
                                ${vehicle.basePrice}+
                              </div>
                              <div className="text-xs text-gray-500">
                                ${vehicle.perKm}/km
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Fare Calculator */}
                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                        Fare Estimator
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toast.info("Fare estimates may vary based on traffic and demand")}
                      >
                        <AlertTriangle className="w-4 h-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    {/* Main Calculate Button */}
                    <Button
                      onClick={calculateFare}
                      disabled={!pickupLocation || !destination}
                      className="w-full mb-4"
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculate Fare
                    </Button>

                    {/* Quick Fare Options */}
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (!pickupLocation || !destination) {
                            toast.error("Please enter pickup and destination first");
                            return;
                          }
                          const quickFare = Math.random() * 10 + 8;
                          setEstimatedFare({
                            distance: "5.2",
                            basePrice: 8,
                            distancePrice: (quickFare - 8).toFixed(2),
                            total: quickFare.toFixed(2),
                            duration: 15
                          });
                          toast.success("Quick estimate calculated!");
                        }}
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        Quick
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (!estimatedFare) {
                            toast.error("Please calculate fare first");
                            return;
                          }
                          const discountedTotal = (parseFloat(estimatedFare.total) * 0.85).toFixed(2);
                          setEstimatedFare(prev => ({ ...prev, total: discountedTotal, discount: "15%" }));
                          toast.success("15% discount applied!");
                        }}
                      >
                        <Percent className="w-3 h-3 mr-1" />
                        Discount
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (!estimatedFare) {
                            toast.error("Please calculate fare first");
                            return;
                          }
                          const shareTotal = (parseFloat(estimatedFare.total) * 0.6).toFixed(2);
                          setEstimatedFare(prev => ({ ...prev, total: shareTotal, shareRide: true }));
                          toast.success("Share ride option selected - 40% savings!");
                        }}
                      >
                        <Users className="w-3 h-3 mr-1" />
                        Share
                      </Button>
                    </div>

                    {/* Fare Breakdown */}
                    {estimatedFare && (
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200 space-y-4">
                        {/* Basic Info */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Distance</span>
                            <span className="font-medium">{estimatedFare.distance} km</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Duration</span>
                            <span className="font-medium">{estimatedFare.duration} min</span>
                          </div>

                          {/* Detailed Breakdown */}
                          <div className="border-t pt-2 space-y-1">
                            <div className="flex justify-between text-xs text-gray-600">
                              <span>Base fare</span>
                              <span>${estimatedFare.basePrice}</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-600">
                              <span>Distance charge</span>
                              <span>${estimatedFare.distancePrice}</span>
                            </div>
                            {estimatedFare.discount && (
                              <div className="flex justify-between text-xs text-green-600">
                                <span>Discount ({estimatedFare.discount})</span>
                                <span>-${(parseFloat(estimatedFare.basePrice) + parseFloat(estimatedFare.distancePrice) - parseFloat(estimatedFare.total)).toFixed(2)}</span>
                              </div>
                            )}
                            {estimatedFare.shareRide && (
                              <div className="flex justify-between text-xs text-blue-600">
                                <span>Share ride savings</span>
                                <span>-40%</span>
                              </div>
                            )}
                          </div>

                          <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                            <span>Total Fare</span>
                            <span className="text-green-600">${estimatedFare.total}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => {
                              navigator.clipboard?.writeText(`Estimated fare: $${estimatedFare.total} for ${estimatedFare.distance}km trip`);
                              toast.success("Fare details copied to clipboard!");
                            }}
                          >
                            <Share className="w-3 h-3 mr-1" />
                            Share
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => {
                              toast.success("Fare breakdown saved!");
                            }}
                          >
                            <Save className="w-3 h-3 mr-1" />
                            Save
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => {
                              setEstimatedFare(null);
                              toast.info("Fare estimate cleared");
                            }}
                          >
                            <RotateCcw className="w-3 h-3 mr-1" />
                            Reset
                          </Button>
                        </div>

                        {/* Price Comparison */}
                        <div className="border-t pt-3">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Compare with other options:</h4>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-auto p-2 flex-col"
                              onClick={() => toast.info("Economy: Cheaper option available")}
                            >
                              <span className="font-medium">Economy</span>
                              <span className="text-green-600">${(parseFloat(estimatedFare.total) * 0.8).toFixed(2)}</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-auto p-2 flex-col bg-blue-50"
                              onClick={() => toast.info("Current selection: Comfort")}
                            >
                              <span className="font-medium">Comfort</span>
                              <span className="text-blue-600">${estimatedFare.total}</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-auto p-2 flex-col"
                              onClick={() => toast.info("Premium: Luxury option available")}
                            >
                              <span className="font-medium">Premium</span>
                              <span className="text-purple-600">${(parseFloat(estimatedFare.total) * 1.4).toFixed(2)}</span>
                            </Button>
                          </div>
                        </div>

                        {/* Time-based Pricing */}
                        <div className="border-t pt-3">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Peak time adjustments:</h4>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                const peakPrice = (parseFloat(estimatedFare.total) * 1.2).toFixed(2);
                                toast.warning(`Peak time: $${peakPrice} (+20%)`);
                              }}
                            >
                              <Clock className="w-3 h-3 mr-1" />
                              Peak Hours
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                const nightPrice = (parseFloat(estimatedFare.total) * 1.15).toFixed(2);
                                toast.info(`Night rate: $${nightPrice} (+15%)`);
                              }}
                            >
                              <Clock className="w-3 h-3 mr-1" />
                              Night Rate
                            </Button>
                          </div>
                        </div>

                        {/* Promo Code Input */}
                        <div className="border-t pt-3">
                          <Label htmlFor="promo" className="text-sm font-medium text-gray-700">Promo Code</Label>
                          <div className="flex space-x-2 mt-1">
                            <Input
                              id="promo"
                              placeholder="Enter promo code"
                              className="flex-1"
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  const promoValue = (e.target as HTMLInputElement).value;
                                  if (promoValue.toLowerCase() === 'save20') {
                                    const discountedPrice = (parseFloat(estimatedFare.total) * 0.8).toFixed(2);
                                    setEstimatedFare(prev => ({ ...prev, total: discountedPrice, promoApplied: 'SAVE20' }));
                                    toast.success("Promo code SAVE20 applied! 20% off");
                                  } else {
                                    toast.error("Invalid promo code");
                                  }
                                }
                              }}
                            />
                            <Button
                              size="sm"
                              onClick={(e) => {
                                const input = e.target.parentElement.querySelector('input');
                                const promoValue = input?.value;
                                if (promoValue?.toLowerCase() === 'save20') {
                                  const discountedPrice = (parseFloat(estimatedFare.total) * 0.8).toFixed(2);
                                  setEstimatedFare(prev => ({ ...prev, total: discountedPrice, promoApplied: 'SAVE20' }));
                                  toast.success("Promo code SAVE20 applied! 20% off");
                                } else {
                                  toast.error("Invalid promo code. Try 'SAVE20'");
                                }
                              }}
                            >
                              Apply
                            </Button>
                          </div>
                          {estimatedFare.promoApplied && (
                            <div className="text-xs text-green-600 mt-1">
                              ✓ Promo code {estimatedFare.promoApplied} applied
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Alternative Fare Options */}
                    {!estimatedFare && (
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-sm font-medium text-blue-800 mb-2">💡 Pro Tips</h4>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• Share rides to save up to 40%</li>
                          <li>• Avoid peak hours (7-9 AM, 5-7 PM) for better rates</li>
                          <li>• Use promo code 'SAVE20' for 20% off</li>
                          <li>• Economy rides cost 20% less</li>
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Book Button */}
                <Button 
                  size="lg"
                  onClick={handleBookRide}
                  disabled={!pickupLocation || !destination}
                  className="w-full h-14 text-lg bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600"
                >
                  <Car className="w-5 h-5 mr-2" />
                  {bookingType === "now" ? "Book Now" : "Schedule Ride"}
                  {estimatedFare && (
                    <span className="ml-2">• ${estimatedFare.total}</span>
                  )}
                </Button>

                {/* Cancel Trip Button (shown when trip is active) */}
                {currentTrip && (
                  <Button 
                    variant="destructive"
                    size="lg"
                    onClick={handleCancelTrip}
                    className="w-full h-14 text-lg"
                  >
                    <X className="w-5 h-5 mr-2" />
                    Cancel Trip
                  </Button>
                )}
              </div>
            </div>
          </TabsContent>

          {/* GPS Tracking Tab */}
          <TabsContent value="tracking" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Live Tracking Map */}
              <div className="lg:col-span-2">
                <Card className="shadow-xl overflow-hidden">
                  <div 
                    className="h-96 bg-cover bg-center relative"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=400&fit=crop&crop=center')"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Live tracking overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${isTracking ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                        <span className="text-sm font-medium">
                          {isTracking ? 'Live Tracking Active' : 'Tracking Inactive'}
                        </span>
                      </div>
                    </div>

                    {/* Driver location marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`bg-blue-500 rounded-full p-3 shadow-lg ${isTracking ? 'animate-bounce' : ''}`}>
                        <Car className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Route indicators */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-md rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Driver arriving in</p>
                            <p className="text-lg font-bold text-blue-600">
                              {driverETA > 0 ? `${driverETA} minutes` : 'Arrived!'}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">Distance</p>
                            <p className="text-lg font-bold">0.8 km</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Tracking Tools & Info */}
              <div className="space-y-6">
                {/* Driver Info */}
                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2 text-blue-600" />
                      Your Driver
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-lg">👨‍💼</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Mike Johnson</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">4.9 • Toyota Camry</span>
                        </div>
                        <p className="text-sm text-gray-500">ABC-1234</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleCallDriver}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Driver
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleMessageDriver}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Trip Progress */}
                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Route className="w-5 h-5 mr-2 text-green-600" />
                      Trip Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium">Driver Assigned</p>
                          <p className="text-sm text-gray-500">2:30 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${tripProgress === "enroute" || driverETA > 0 ? "bg-yellow-500 animate-pulse" : "border-2 border-gray-300"}`}></div>
                        <div>
                          <p className="font-medium">En Route to Pickup</p>
                          <p className="text-sm text-gray-500">
                            {driverETA > 0 ? `ETA: ${driverETA} minutes` : "Arriving now"}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${tripProgress === "pickup" ? "bg-blue-500 animate-pulse" : "border-2 border-gray-300"}`}></div>
                        <div>
                          <p className="font-medium">Pickup</p>
                          <p className="text-sm text-gray-500">
                            {tripProgress === "pickup" ? "Driver waiting" : "Waiting..."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency & Safety */}
                <Card className="shadow-lg border-red-200 bg-red-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-red-700">
                      <Shield className="w-5 h-5 mr-2" />
                      Safety & Emergency
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <Button 
                        variant="destructive" 
                        className="w-full"
                        onClick={handleEmergency}
                      >
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Emergency
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleShareTrip}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Share Trip
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <History className="w-5 h-5 mr-2 text-purple-600" />
                    Trip History
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => toast.info("Filter options coming soon")}
                    >
                      <Filter className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => toast.success("Downloading trip history...")}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tripHistory.map((trip) => (
                    <div key={trip.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <Car className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{trip.driver}</h3>
                            <p className="text-sm text-gray-500">{trip.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">${trip.fare}</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3 h-3 ${i < trip.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{trip.from}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{trip.to}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDownloadReceipt(trip.id)}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Receipt
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleRebookTrip(trip)}
                        >
                          <RotateCcw className="w-4 h-4 mr-1" />
                          Rebook
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Profile Picture */}
              <Card className="shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-blue-600" />
                    Profile Photo
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div 
                      className="w-full h-full rounded-full bg-cover bg-center border-4 border-white shadow-lg"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face')"
                      }}
                    ></div>
                    <Button 
                      size="sm" 
                      className="absolute bottom-0 right-0 rounded-full w-10 h-10 p-0"
                      onClick={handlePhotoUpload}
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button 
                    variant="outline"
                    onClick={handlePhotoUpload}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Change Photo
                  </Button>
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
                <CardContent className="pt-0 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName"
                        value={profile.firstName}
                        onChange={(e) => setProfile(prev => ({ ...prev, firstName: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName"
                        value={profile.lastName}
                        onChange={(e) => setProfile(prev => ({ ...prev, lastName: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emergency">Emergency Contact</Label>
                    <Input 
                      id="emergency"
                      type="tel"
                      value={profile.emergencyContact}
                      onChange={(e) => setProfile(prev => ({ ...prev, emergencyContact: e.target.value }))}
                    />
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={handleProfileSave}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Preferences */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-purple-600" />
                  Preferences & Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Ride Preferences</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="music">Music Allowed</Label>
                        <Switch 
                          id="music" 
                          defaultChecked 
                          onCheckedChange={(checked) => 
                            toast.success(`Music ${checked ? 'enabled' : 'disabled'}`)
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="conversation">Conversation</Label>
                        <Switch 
                          id="conversation" 
                          defaultChecked 
                          onCheckedChange={(checked) => 
                            toast.success(`Conversation ${checked ? 'enabled' : 'disabled'}`)
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="ac">Air Conditioning</Label>
                        <Switch 
                          id="ac" 
                          defaultChecked 
                          onCheckedChange={(checked) => 
                            toast.success(`AC ${checked ? 'enabled' : 'disabled'}`)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Safety Settings</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="shareTrip">Auto Share Trip</Label>
                        <Switch 
                          id="shareTrip" 
                          defaultChecked 
                          onCheckedChange={(checked) => 
                            toast.success(`Auto share ${checked ? 'enabled' : 'disabled'}`)
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="smsAlerts">SMS Alerts</Label>
                        <Switch 
                          id="smsAlerts" 
                          defaultChecked 
                          onCheckedChange={(checked) => 
                            toast.success(`SMS alerts ${checked ? 'enabled' : 'disabled'}`)
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="locationSharing">Location Sharing</Label>
                        <Switch 
                          id="locationSharing" 
                          defaultChecked 
                          onCheckedChange={(checked) => 
                            toast.success(`Location sharing ${checked ? 'enabled' : 'disabled'}`)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Payment Methods */}
              <Card className="shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-green-600" />
                    Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPaymentMethod === "card" ? "bg-blue-50 border-blue-200" : "hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setSelectedPaymentMethod("card");
                      toast.success("Credit card selected");
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-medium">Visa •••• 1234</p>
                          <p className="text-sm text-gray-500">Expires 12/25</p>
                        </div>
                      </div>
                      {selectedPaymentMethod === "card" && (
                        <Badge className="bg-blue-600">Primary</Badge>
                      )}
                    </div>
                  </div>
                  
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPaymentMethod === "wallet" ? "bg-purple-50 border-purple-200" : "hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setSelectedPaymentMethod("wallet");
                      toast.success("Wallet selected");
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Wallet className="w-6 h-6 text-purple-600" />
                        <div>
                          <p className="font-medium">SmartCommute Wallet</p>
                          <p className="text-sm text-gray-500">${walletBalance.toFixed(2)} available</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTopUpWallet();
                        }}
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Top Up
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleAddPaymentMethod}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <Receipt className="w-5 h-5 mr-2 text-orange-600" />
                    Recent Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Car className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Airport Trip</p>
                          <p className="text-sm text-gray-500">Today, 2:30 PM</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">-$32.00</p>
                        <p className="text-sm text-gray-500">Paid</p>
                      </div>
                    </div>
                    
                    <div 
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => toast.info("Transaction details: Wallet top-up")}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Wallet className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Wallet Top-up</p>
                          <p className="text-sm text-gray-500">Yesterday</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+$50.00</p>
                        <p className="text-sm text-gray-500">Added</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Billing & Receipts */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Download className="w-5 h-5 mr-2 text-blue-600" />
                  Receipts & Billing
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col"
                    onClick={() => toast.success("Downloading all receipts...")}
                  >
                    <Download className="w-6 h-6 mb-2" />
                    <span>Download All</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col"
                    onClick={() => toast.success("Receipts will be emailed to you")}
                  >
                    <Mail className="w-6 h-6 mb-2" />
                    <span>Email Receipts</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col"
                    onClick={() => toast.info("Tax settings opened")}
                  >
                    <Settings className="w-6 h-6 mb-2" />
                    <span>Tax Settings</span>
                  </Button>
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
                    {notifications.filter(n => !n.read).length} New
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        !notification.read ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                      }`}
                      onClick={() => handleMarkNotificationRead(notification.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold">{notification.title}</h3>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteNotification(notification.id);
                          }}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <Button 
                    variant="outline"
                    onClick={handleMarkAllNotificationsRead}
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

            {/* Communication Center */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                  Communication Center
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-16 flex-col"
                    onClick={handleCallSupport}
                  >
                    <Phone className="w-6 h-6 mb-2" />
                    <span>Call Support</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-16 flex-col"
                    onClick={handleLiveChat}
                  >
                    <MessageCircle className="w-6 h-6 mb-2" />
                    <span>Live Chat</span>
                  </Button>
                </div>
                
                {/* Review Section */}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-4 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    Rate Your Last Trip
                  </h4>
                  <div className="flex items-center space-x-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Button
                        key={star}
                        variant="ghost"
                        size="sm"
                        className="p-1"
                        onClick={() => {
                          setTripRating(star);
                          toast.success(`Rated ${star} stars`);
                        }}
                      >
                        <Star 
                          className={`w-6 h-6 ${
                            star <= tripRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`} 
                        />
                      </Button>
                    ))}
                  </div>
                  <Textarea 
                    placeholder="Leave a review for your driver..."
                    className="mb-3"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1"
                      onClick={handleSubmitReview}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Review
                    </Button>
                  </div>
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
        userType="passenger"
      />
    </div>
  );
}

function Calculator({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <path d="M8 6h8"/>
      <path d="M8 10h8"/>
      <path d="M8 14h8"/>
      <path d="M8 18h8"/>
    </svg>
  );
}
