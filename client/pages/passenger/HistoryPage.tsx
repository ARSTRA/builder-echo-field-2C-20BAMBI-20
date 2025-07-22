import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Clock, 
  CreditCard, 
  Star, 
  Car,
  Download,
  Search,
  Filter,
  Calendar,
  DollarSign,
  Navigation,
  MessageCircle,
  RotateCcw,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Receipt,
  Phone,
  User
} from "lucide-react";

interface Trip {
  id: string;
  date: string;
  time: string;
  pickup: string;
  destination: string;
  driverName: string;
  driverPhoto: string;
  vehicleType: string;
  vehiclePlate: string;
  status: 'completed' | 'cancelled' | 'refunded';
  fare: number;
  distance: number;
  duration: number;
  rating?: number;
  paymentMethod: string;
  bookingType: 'instant' | 'scheduled';
  specialRequirements?: string[];
}

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPeriod, setFilterPeriod] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const trips: Trip[] = [
    {
      id: "TR001234",
      date: "2024-01-15",
      time: "09:30 AM",
      pickup: "Home - 123 Main Street",
      destination: "Downtown Office - 456 Business Ave",
      driverName: "John Smith",
      driverPhoto: "👨‍💼",
      vehicleType: "Comfort",
      vehiclePlate: "ABC-1234",
      status: "completed",
      fare: 24.50,
      distance: 8.2,
      duration: 22,
      rating: 5,
      paymentMethod: "Credit Card",
      bookingType: "instant"
    },
    {
      id: "TR001235",
      date: "2024-01-14",
      time: "06:15 PM",
      pickup: "Downtown Office - 456 Business Ave",
      destination: "Airport Terminal 1",
      driverName: "Sarah Johnson",
      driverPhoto: "👩‍💼",
      vehicleType: "Premium",
      vehiclePlate: "XYZ-5678",
      status: "completed",
      fare: 45.00,
      distance: 18.5,
      duration: 35,
      rating: 4,
      paymentMethod: "Wallet",
      bookingType: "scheduled",
      specialRequirements: ["Extra Luggage"]
    },
    {
      id: "TR001236",
      date: "2024-01-13",
      time: "02:45 PM",
      pickup: "Shopping Mall - 789 Commerce St",
      destination: "Home - 123 Main Street",
      driverName: "Mike Wilson",
      driverPhoto: "👨",
      vehicleType: "Economy",
      vehiclePlate: "DEF-9012",
      status: "cancelled",
      fare: 0,
      distance: 0,
      duration: 0,
      paymentMethod: "Cash",
      bookingType: "instant"
    },
    {
      id: "TR001237",
      date: "2024-01-12",
      time: "11:20 AM",
      pickup: "Hospital - 321 Health Ave",
      destination: "Pharmacy - 654 Medical Blvd",
      driverName: "Emily Davis",
      driverPhoto: "👩",
      vehicleType: "Comfort",
      vehiclePlate: "GHI-3456",
      status: "completed",
      fare: 15.75,
      distance: 4.1,
      duration: 12,
      rating: 5,
      paymentMethod: "Credit Card",
      bookingType: "instant",
      specialRequirements: ["Wheelchair Accessible"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'cancelled': return 'bg-destructive text-destructive-foreground';
      case 'refunded': return 'bg-warning text-warning-foreground';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'cancelled': return XCircle;
      case 'refunded': return RotateCcw;
      default: return AlertTriangle;
    }
  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const filteredTrips = trips.filter(trip => {
    const matchesSearch = trip.pickup.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         trip.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         trip.driverName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || trip.status === filterStatus;
    
    // Period filtering would be implemented based on actual date logic
    const matchesPeriod = filterPeriod === 'all';
    
    return matchesSearch && matchesStatus && matchesPeriod;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray pb-20">
      <div className="px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-taxi-dark mb-2">Trip History</h1>
          <p className="text-taxi-gray">View and manage your ride history</p>
        </div>

        {/* Search and Filters */}
        <Card className="mobile-card mb-6">
          <CardContent className="p-4 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-taxi-gray" />
              <Input 
                placeholder="Search trips by location or driver..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 gap-3">
              <Select value={filterPeriod} onValueChange={setFilterPeriod}>
                <SelectTrigger className="h-12">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="h-12">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Trip Statistics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="mobile-card text-center">
            <CardContent className="p-3">
              <div className="text-xl font-bold text-taxi-dark">
                {trips.filter(t => t.status === 'completed').length}
              </div>
              <p className="text-xs text-taxi-gray">Completed</p>
            </CardContent>
          </Card>
          
          <Card className="mobile-card text-center">
            <CardContent className="p-3">
              <div className="text-xl font-bold text-primary">
                ${trips.filter(t => t.status === 'completed').reduce((sum, t) => sum + t.fare, 0).toFixed(0)}
              </div>
              <p className="text-xs text-taxi-gray">Total Spent</p>
            </CardContent>
          </Card>
          
          <Card className="mobile-card text-center">
            <CardContent className="p-3">
              <div className="text-xl font-bold text-accent">
                {trips.filter(t => t.status === 'completed').reduce((sum, t) => sum + t.distance, 0).toFixed(0)}km
              </div>
              <p className="text-xs text-taxi-gray">Distance</p>
            </CardContent>
          </Card>
        </div>

        {/* Trip List */}
        <div className="space-y-4">
          {filteredTrips.map((trip) => {
            const StatusIcon = getStatusIcon(trip.status);
            
            return (
              <Card key={trip.id} className="mobile-card">
                <CardContent className="p-4">
                  {/* Trip Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{trip.driverPhoto}</div>
                      <div>
                        <h3 className="font-semibold text-taxi-dark">{trip.driverName}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {trip.vehicleType}
                          </Badge>
                          <span className="text-xs text-taxi-gray">{trip.vehiclePlate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(trip.status)}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                      </Badge>
                      <p className="text-xs text-taxi-gray mt-1">{trip.date}</p>
                    </div>
                  </div>

                  {/* Trip Route */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-success rounded-full mt-1 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-taxi-dark truncate">
                          {trip.pickup}
                        </p>
                        <p className="text-xs text-taxi-gray">{trip.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-destructive rounded-full mt-1 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-taxi-dark truncate">
                          {trip.destination}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trip Details */}
                  {trip.status === 'completed' && (
                    <div className="grid grid-cols-3 gap-4 mb-3 text-center">
                      <div>
                        <p className="text-xs text-taxi-gray">Distance</p>
                        <p className="font-semibold text-taxi-dark">{trip.distance}km</p>
                      </div>
                      <div>
                        <p className="text-xs text-taxi-gray">Duration</p>
                        <p className="font-semibold text-taxi-dark">{trip.duration}min</p>
                      </div>
                      <div>
                        <p className="text-xs text-taxi-gray">Fare</p>
                        <p className="font-semibold text-primary">${trip.fare}</p>
                      </div>
                    </div>
                  )}

                  {/* Special Requirements */}
                  {trip.specialRequirements && trip.specialRequirements.length > 0 && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {trip.specialRequirements.map((req, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rating and Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      {trip.rating && renderStars(trip.rating)}
                      <span className="text-xs text-taxi-gray">
                        {trip.paymentMethod}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {trip.status === 'completed' && (
                        <>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <RotateCcw className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                      
                      <Button variant="ghost" size="sm" className="h-8 px-3">
                        <span className="text-xs">Details</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Load More */}
        {filteredTrips.length >= 10 && (
          <div className="text-center mt-6">
            <Button variant="outline" className="w-full btn-mobile">
              Load More Trips
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredTrips.length === 0 && (
          <Card className="mobile-card text-center py-12">
            <CardContent>
              <Car className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-taxi-dark mb-2">No trips found</h3>
              <p className="text-taxi-gray mb-6">
                {searchQuery || filterStatus !== 'all' 
                  ? "Try adjusting your search or filters"
                  : "Start your first ride with BAMBI!"
                }
              </p>
              <Button className="btn-mobile btn-primary">
                Book Your First Ride
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
