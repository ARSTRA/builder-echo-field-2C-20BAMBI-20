import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Car, 
  MapPin, 
  Clock, 
  Shield, 
  Smartphone, 
  CreditCard, 
  Star, 
  Users, 
  Zap,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Book your ride in under 30 seconds with our streamlined interface"
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your driver's location and estimated arrival time in real-time"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All drivers are background-verified with 24/7 safety monitoring"
    },
    {
      icon: CreditCard,
      title: "Cashless Payment",
      description: "Seamless payments with multiple options including digital wallets"
    },
    {
      icon: Star,
      title: "Premium Service",
      description: "Highly-rated drivers and vehicles for the best ride experience"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service whenever and wherever you need a ride"
    }
  ];

  const vehicleTypes = [
    {
      name: "Economy",
      description: "Affordable rides for everyday commuting",
      price: "From $8",
      icon: "🚗"
    },
    {
      name: "Comfort",
      description: "Extra space and comfort for longer trips",
      price: "From $12",
      icon: "🚙"
    },
    {
      name: "Premium",
      description: "Luxury vehicles for special occasions",
      price: "From $20",
      icon: "🚘"
    },
    {
      name: "Share",
      description: "Split the cost with other passengers",
      price: "From $4",
      icon: "🚐"
    }
  ];

  const stats = [
    { label: "Active Drivers", value: "10,000+" },
    { label: "Cities Served", value: "50+" },
    { label: "Rides Completed", value: "1M+" },
    { label: "Customer Rating", value: "4.9/5" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="mb-12 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-600 rounded-3xl opacity-30 animate-pulse"></div>
                    <span className="relative text-white font-black text-4xl tracking-wider">B</span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">🚗</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">BAMBI</h1>
                  <p className="text-lg text-gray-600 font-medium">Beautiful Rides, Anywhere</p>
                </div>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-taxi-dark mb-6">
                Your Ride,
                <span className="text-transparent bg-clip-text taxi-gradient"> Anytime</span>
              </h2>
              <p className="text-xl text-taxi-gray mb-8 max-w-lg">
                Experience the future of urban transportation with BAMBI. 
                Safe, reliable, and affordable rides at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/ride">
                  <Button size="lg" className="btn-primary text-lg px-8 py-4 h-auto">
                    <Car className="w-5 h-5 mr-2" />
                    Book a Ride
                  </Button>
                </Link>
                <Link to="/driver">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2">
                    <Users className="w-5 h-5 mr-2" />
                    Become a Driver
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-taxi-dark">Quick Booking</h3>
                    <p className="text-taxi-gray text-sm">Get a ride in 3 easy steps</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">1</div>
                    <span className="text-taxi-dark">Set your pickup location</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">2</div>
                    <span className="text-taxi-dark">Choose your destination</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">3</div>
                    <span className="text-taxi-dark">Confirm and book</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-taxi-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-taxi-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-taxi-dark mb-4">
              Why Choose BAMBI?
            </h2>
            <p className="text-xl text-taxi-gray max-w-3xl mx-auto">
              We're committed to providing the safest, most reliable, and convenient 
              transportation experience in the city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-taxi-dark">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-taxi-gray">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-taxi-dark mb-4">
              Choose Your Ride
            </h2>
            <p className="text-xl text-taxi-gray max-w-3xl mx-auto">
              From budget-friendly options to luxury vehicles, we have the perfect ride for every occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{vehicle.icon}</div>
                  <CardTitle className="text-taxi-dark">{vehicle.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{vehicle.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-taxi-gray text-center">
                    {vehicle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who trust BAMBI for their daily transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ride">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
                Book Your First Ride
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/driver">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Start Driving Today
                <Users className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
