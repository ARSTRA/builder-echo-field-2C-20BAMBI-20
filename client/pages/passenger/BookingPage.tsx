import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
  Wallet,
  Banknote,
} from "lucide-react";
import { useCurrency } from "@/hooks/use-currency";
import { PaymentMethod, Currency } from "@shared/currency";

export default function BookingPage() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("comfort");
  const [bookingType, setBookingType] = useState("now"); // now, schedule
  const [rideType, setRideType] = useState("personal"); // personal, share
  const [showMap, setShowMap] = useState(false);
  const [estimatedFare, setEstimatedFare] = useState(null);

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
      features: ["AC", "Music"],
      popular: false,
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
      features: ["AC", "Music", "Extra Space"],
      popular: true,
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
      features: ["AC", "Music", "Luxury", "WiFi"],
      popular: false,
    },
    {
      id: "share",
      name: "Share",
      description: "Split costs with others",
      icon: "🚐",
      basePrice: 4,
      perKm: 0.8,
      eta: "5-15 min",
      passengers: 6,
      features: ["AC", "Shared Journey"],
      popular: false,
    },
  ];

  const specialRequirements = [
    { id: "baby-seat", label: "Baby Seat", icon: Baby, price: 5 },
    {
      id: "wheelchair",
      label: "Wheelchair Accessible",
      icon: Accessibility,
      price: 0,
    },
    { id: "pet-friendly", label: "Pet Friendly", icon: Heart, price: 3 },
    { id: "extra-luggage", label: "Extra Luggage Space", icon: Car, price: 2 },
  ];

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: CreditCard,
      details: "**** 1234",
    },
    {
      id: "wallet",
      name: "BAMBI Wallet",
      icon: DollarSign,
      details: "$45.50 available",
    },
    {
      id: "cash",
      name: "Cash",
      icon: DollarSign,
      details: "Pay driver directly",
    },
  ];

  const genderPreferences = [
    { id: "any", label: "Any Driver" },
    { id: "male", label: "Male Driver" },
    { id: "female", label: "Female Driver" },
  ];

  const calculateEstimatedFare = () => {
    const selectedVehicleData = vehicleOptions.find(
      (v) => v.id === selectedVehicle,
    );
    if (!selectedVehicleData || !pickupLocation || !destination) return;

    // Mock calculation - in real app, would use actual distance
    const mockDistance = Math.random() * 15 + 2; // 2-17 km
    const basePrice = selectedVehicleData.basePrice;
    const distancePrice = mockDistance * selectedVehicleData.perKm;
    const subtotal = basePrice + distancePrice;
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    setEstimatedFare({
      distance: mockDistance.toFixed(1),
      basePrice,
      distancePrice: distancePrice.toFixed(2),
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      duration: Math.floor(mockDistance * 2 + 5), // rough time estimate
    });
  };

  const handleBookRide = () => {
    // Handle ride booking logic
    console.log("Booking ride...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray pb-20">
      <div className="px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-taxi-dark mb-2">
            Book Your Ride
          </h1>
          <p className="text-taxi-gray">Choose your pickup and destination</p>
        </div>

        {/* Trip Type Selection */}
        <Card className="mobile-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Trip Type</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant={bookingType === "now" ? "default" : "outline"}
                className="h-12 flex-col"
                onClick={() => setBookingType("now")}
              >
                <Zap className="w-5 h-5 mb-1" />
                <span className="text-sm">Now</span>
              </Button>
              <Button
                variant={bookingType === "schedule" ? "default" : "outline"}
                className="h-12 flex-col"
                onClick={() => setBookingType("schedule")}
              >
                <Calendar className="w-5 h-5 mb-1" />
                <span className="text-sm">Schedule</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Location Inputs */}
        <Card className="mobile-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              Trip Details
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pickup">Pickup Location</Label>
              <div className="relative">
                <Navigation className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-success" />
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
                >
                  <MapPin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-destructive" />
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
                  <Input id="date" type="date" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" className="h-12" />
                </div>
              </div>
            )}

            <Button
              onClick={calculateEstimatedFare}
              disabled={!pickupLocation || !destination}
              className="w-full btn-mobile btn-primary"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Show Route & Calculate Fare
            </Button>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        {pickupLocation && destination && (
          <Card className="mobile-card mb-6">
            <CardContent className="p-0">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-taxi-gray font-medium">Interactive Map</p>
                  <p className="text-sm text-taxi-gray">
                    Real-time route and traffic info
                  </p>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-success text-success-foreground">
                    GPS Active
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Vehicle Selection */}
        <Card className="mobile-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Choose Vehicle</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-3">
            {vehicleOptions.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedVehicle === vehicle.id
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
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
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="text-xs text-taxi-gray">
                          <Users className="w-3 h-3 inline mr-1" />
                          {vehicle.passengers} seats
                        </span>
                        <span className="text-xs text-taxi-gray">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {vehicle.eta}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        {vehicle.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">
                      ${vehicle.basePrice}+
                    </div>
                    <div className="text-xs text-taxi-gray">
                      ${vehicle.perKm}/km
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Special Requirements */}
        <Card className="mobile-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Special Requirements</CardTitle>
            <CardDescription>Additional services (optional)</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-3">
              {specialRequirements.map((req) => {
                const Icon = req.icon;
                return (
                  <div
                    key={req.id}
                    className="flex items-center space-x-2 p-3 border rounded-lg"
                  >
                    <Checkbox id={req.id} />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-taxi-gray" />
                        <label
                          htmlFor={req.id}
                          className="text-sm font-medium cursor-pointer"
                        >
                          {req.label}
                        </label>
                      </div>
                      {req.price > 0 && (
                        <p className="text-xs text-taxi-gray">+${req.price}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="mobile-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <div className="space-y-2">
              <Label>Driver Gender Preference</Label>
              <Select defaultValue="any">
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {genderPreferences.map((pref) => (
                    <SelectItem key={pref.id} value={pref.id}>
                      {pref.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Special Instructions</Label>
              <Textarea
                id="notes"
                placeholder="Any special instructions for the driver..."
                className="min-h-[80px]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="favorite-driver" />
              <Label htmlFor="favorite-driver" className="text-sm">
                Request favorite driver (if available)
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="otp-verification" defaultChecked />
              <Label htmlFor="otp-verification" className="text-sm">
                OTP verification at trip start
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="mobile-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-primary" />
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-taxi-light-gray/50"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-taxi-gray" />
                    <div>
                      <p className="font-medium text-taxi-dark">
                        {method.name}
                      </p>
                      <p className="text-sm text-taxi-gray">{method.details}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 border-2 border-primary rounded-full"></div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Fare Estimate */}
        {estimatedFare && (
          <Card className="mobile-card mb-6 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-primary">
                <DollarSign className="w-5 h-5 mr-2" />
                Fare Estimate
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-taxi-gray">Distance</span>
                  <span className="font-medium">
                    {estimatedFare.distance} km
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-taxi-gray">Estimated time</span>
                  <span className="font-medium">
                    {estimatedFare.duration} min
                  </span>
                </div>
                <div className="border-t pt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-taxi-gray">Base fare</span>
                    <span>${estimatedFare.basePrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-taxi-gray">Distance charge</span>
                    <span>${estimatedFare.distancePrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-taxi-gray">Tax & fees</span>
                    <span>${estimatedFare.tax}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span className="text-taxi-dark">Total</span>
                    <span className="text-primary">${estimatedFare.total}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Promo Code */}
        <Card className="mobile-card mb-6">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Percent className="w-5 h-5 text-accent" />
              <Input placeholder="Enter promo code" className="flex-1 h-12" />
              <Button variant="outline" size="sm">
                Apply
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Book Button */}
        <div className="sticky bottom-20 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-lg border">
          <Button
            onClick={handleBookRide}
            disabled={!pickupLocation || !destination}
            className="w-full btn-mobile btn-primary text-lg"
          >
            <Car className="w-5 h-5 mr-2" />
            {bookingType === "now" ? "Book Now" : "Schedule Ride"}
            {estimatedFare && (
              <span className="ml-2">• ${estimatedFare.total}</span>
            )}
          </Button>
          <p className="text-center text-xs text-taxi-gray mt-2">
            You'll be matched with a nearby driver
          </p>
        </div>
      </div>
    </div>
  );
}
