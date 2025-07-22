import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Play,
  ShieldCheck,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Zap,
      title: "Instant Booking",
      description:
        "Book your ride in under 30 seconds with our streamlined interface",
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description:
        "Track your driver's location and estimated arrival time in real-time",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "All drivers are background-verified with 24/7 safety monitoring",
    },
    {
      icon: CreditCard,
      title: "Cashless Payment",
      description:
        "Seamless payments with multiple options including digital wallets",
    },
    {
      icon: Star,
      title: "Premium Service",
      description:
        "Highly-rated drivers and vehicles for the best ride experience",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock service whenever and wherever you need a ride",
    },
  ];

  const vehicleTypes = [
    {
      name: "Economy",
      description: "Affordable rides for everyday commuting",
      price: "From $8",
      icon: "🚗",
    },
    {
      name: "Comfort",
      description: "Extra space and comfort for longer trips",
      price: "From $12",
      icon: "🚙",
    },
    {
      name: "Premium",
      description: "Luxury vehicles for special occasions",
      price: "From $20",
      icon: "🚘",
    },
    {
      name: "Share",
      description: "Split the cost with other passengers",
      price: "From $4",
      icon: "🚐",
    },
  ];

  const stats = [
    { label: "Active Drivers", value: "10,000+" },
    { label: "Cities Served", value: "50+" },
    { label: "Rides Completed", value: "1M+" },
    { label: "Customer Rating", value: "4.9/5" },
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
                  {/* Hero SVG Logo */}
                  <div className="w-24 h-24 hover:scale-105 transition-transform duration-500">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500"
                    >
                      <defs>
                        <linearGradient
                          id="heroBgGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FF6B9D" />
                          <stop offset="25%" stopColor="#8B5CF6" />
                          <stop offset="60%" stopColor="#3B82F6" />
                          <stop offset="85%" stopColor="#06B6D4" />
                          <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                        <linearGradient
                          id="heroCarGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#FBBF24" />
                          <stop offset="50%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#EF4444" />
                        </linearGradient>
                        <linearGradient
                          id="heroRoadGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#6366F1" />
                          <stop offset="50%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                        <linearGradient
                          id="heroBGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="30%" stopColor="#F8FAFC" />
                          <stop offset="70%" stopColor="#F1F5F9" />
                          <stop offset="100%" stopColor="#E2E8F0" />
                        </linearGradient>
                        <radialGradient
                          id="heroGlowGradient"
                          cx="50%"
                          cy="50%"
                          r="50%"
                        >
                          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </radialGradient>
                      </defs>

                      {/* Outer Glow Ring */}
                      <circle
                        cx="48"
                        cy="48"
                        r="46"
                        fill="none"
                        stroke="url(#heroBgGradient)"
                        strokeWidth="2"
                        opacity="0.3"
                        className="animate-pulse"
                      />

                      {/* Main Background Circle */}
                      <circle
                        cx="48"
                        cy="48"
                        r="42"
                        fill="url(#heroBgGradient)"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                      />

                      {/* Inner Glow Effect */}
                      <circle
                        cx="48"
                        cy="48"
                        r="38"
                        fill="url(#heroGlowGradient)"
                        opacity="0.5"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="35"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1"
                      />

                      {/* Dynamic Road Path */}
                      <path
                        d="M12 50 Q28 42 48 50 Q68 58 84 50"
                        stroke="url(#heroRoadGradient)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />

                      {/* Road Markings */}
                      <g opacity="0.9">
                        <path
                          d="M18 50 L24 50 M36 50 L42 50 M54 50 L60 50 M72 50 L78 50"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </g>

                      {/* Stylized Car with Details */}
                      <g transform="translate(62, 46)">
                        <ellipse
                          cx="0"
                          cy="0"
                          rx="12"
                          ry="6"
                          fill="url(#heroCarGradient)"
                          stroke="#FFFFFF"
                          strokeWidth="0.5"
                        />
                        <circle cx="-6" cy="3" r="2.5" fill="#1F2937" />
                        <circle cx="6" cy="3" r="2.5" fill="#1F2937" />
                        <rect
                          x="-8"
                          y="-3"
                          width="5"
                          height="3"
                          rx="1"
                          fill="#F3F4F6"
                          opacity="0.95"
                        />
                        <circle cx="-6" cy="3" r="1.5" fill="#6B7280" />
                        <circle cx="6" cy="3" r="1.5" fill="#6B7280" />
                      </g>

                      {/* Artistic Letter B */}
                      <g transform="translate(24, 20)">
                        <path
                          d="M0 0 L0 40 L20 40 Q30 40 30 30 Q30 25 25 22.5 Q30 20 30 15 Q30 0 20 0 Z M8 8 L20 8 Q20 8 20 15 Q20 20 16 20 L8 20 Z M8 24 L20 24 Q25 24 25 30 Q25 34 20 34 L8 34 Z"
                          fill="url(#heroBGradient)"
                          stroke="#3B82F6"
                          strokeWidth="1"
                        />
                        {/* B Inner Details */}
                        <circle
                          cx="18"
                          cy="12"
                          r="1"
                          fill="#3B82F6"
                          opacity="0.5"
                        />
                        <circle
                          cx="18"
                          cy="28"
                          r="1"
                          fill="#3B82F6"
                          opacity="0.5"
                        />
                      </g>

                      {/* Speed/Motion Lines */}
                      <g opacity="0.7">
                        <path
                          d="M8 32 L18 32"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M6 38 L16 38"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 62 L18 62"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M6 68 L16 68"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </g>

                      {/* Sparkle Effects */}
                      <g className="animate-pulse">
                        <circle
                          cx="72"
                          cy="24"
                          r="1.5"
                          fill="#FBBF24"
                          opacity="0.9"
                        />
                        <circle
                          cx="18"
                          cy="72"
                          r="2"
                          fill="#FF6B9D"
                          opacity="0.9"
                        />
                        <circle
                          cx="78"
                          cy="72"
                          r="1.5"
                          fill="#8B5CF6"
                          opacity="0.9"
                        />
                        <circle
                          cx="78"
                          cy="18"
                          r="1"
                          fill="#10B981"
                          opacity="0.9"
                        />
                      </g>

                      {/* Rotating Accent Ring */}
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="0.8"
                        strokeDasharray="8 8"
                        className="animate-spin"
                        style={{ animationDuration: "30s" }}
                      />

                      {/* Inner Highlight Ring */}
                      <circle
                        cx="48"
                        cy="48"
                        r="32"
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="0.5"
                        strokeDasharray="4 4"
                        className="animate-spin"
                        style={{
                          animationDuration: "20s",
                          animationDirection: "reverse",
                        }}
                      />
                    </svg>
                  </div>

                  {/* Premium Badge */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl border-3 border-white animate-bounce">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" />
                    </svg>
                  </div>
                </div>

                <div className="ml-6">
                  <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 tracking-tight">
                    BAMBI
                  </h1>
                  <p className="text-lg bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent font-semibold">
                    Beautiful Rides, Anywhere
                  </p>
                </div>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-taxi-dark mb-6">
                Your Ride,
                <span className="text-transparent bg-clip-text taxi-gradient">
                  {" "}
                  Anytime
                </span>
              </h2>
              <p className="text-xl text-taxi-gray mb-8 max-w-lg">
                Experience the future of urban transportation with BAMBI. Safe,
                reliable, and affordable rides at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/ride">
                  <Button
                    size="lg"
                    className="btn-primary text-lg px-8 py-4 h-auto"
                  >
                    <Car className="w-5 h-5 mr-2" />
                    Book a Ride
                  </Button>
                </Link>
                <Link to="/driver">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 h-auto border-2"
                  >
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
                    <h3 className="font-semibold text-taxi-dark">
                      Quick Booking
                    </h3>
                    <p className="text-taxi-gray text-sm">
                      Get a ride in 3 easy steps
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                      1
                    </div>
                    <span className="text-taxi-dark">
                      Set your pickup location
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                      2
                    </div>
                    <span className="text-taxi-dark">
                      Choose your destination
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                      3
                    </div>
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
              We're committed to providing the safest, most reliable, and
              convenient transportation experience in the city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-taxi-dark">
                      {feature.title}
                    </CardTitle>
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
              From budget-friendly options to luxury vehicles, we have the
              perfect ride for every occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{vehicle.icon}</div>
                  <CardTitle className="text-taxi-dark">
                    {vehicle.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    {vehicle.price}
                  </div>
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
            Join millions of satisfied customers who trust BAMBI for their daily
            transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ride">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 h-auto"
              >
                Book Your First Ride
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/driver">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 h-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
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
