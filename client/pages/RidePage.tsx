import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Navigation, Clock, CreditCard, Star } from "lucide-react";

export default function RidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-taxi-dark mb-4">
            Book Your Ride
          </h1>
          <p className="text-lg text-taxi-gray">
            Get where you need to go with SmartCommute
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                Trip Details
              </CardTitle>
              <CardDescription>
                Enter your pickup and destination locations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input 
                  id="pickup" 
                  placeholder="Enter pickup address or landmark"
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input 
                  id="destination" 
                  placeholder="Where would you like to go?"
                  className="h-12"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input 
                    id="date" 
                    type="date"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input 
                    id="time" 
                    type="time"
                    className="h-12"
                  />
                </div>
              </div>

              <Button className="w-full btn-primary h-12 text-lg">
                <Navigation className="w-5 h-5 mr-2" />
                Find Available Rides
              </Button>
            </CardContent>
          </Card>

          {/* Map Placeholder & Features */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-taxi-gray">Interactive map will appear here</p>
                    <p className="text-sm text-taxi-gray">Google Maps integration coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-lg bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-taxi-dark">Quick Pickup</p>
                  <p className="text-sm text-taxi-gray">Average 3 min wait</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <CreditCard className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-taxi-dark">Cashless</p>
                  <p className="text-sm text-taxi-gray">Easy payments</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-taxi-dark">Top Rated</p>
                  <p className="text-sm text-taxi-gray">4.9/5 drivers</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <Navigation className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-taxi-dark">Live Tracking</p>
                  <p className="text-sm text-taxi-gray">Real-time GPS</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
