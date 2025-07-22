import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Car,
  DollarSign,
  MapPin,
  TrendingUp,
  Shield,
  Clock,
  AlertTriangle,
  CheckCircle,
  Settings,
  BarChart3,
  UserCheck,
} from "lucide-react";

export default function AdminPage() {
  const stats = [
    { label: "Active Drivers", value: "2,847", icon: Users, trend: "+12%" },
    { label: "Total Rides Today", value: "18,392", icon: Car, trend: "+8%" },
    {
      label: "Revenue Today",
      value: "$42,847",
      icon: DollarSign,
      trend: "+15%",
    },
    { label: "Average Rating", value: "4.9", icon: CheckCircle, trend: "+0.1" },
  ];

  const recentActivity = [
    {
      type: "driver",
      message: "New driver John Doe registered",
      time: "2 min ago",
      status: "pending",
    },
    {
      type: "ride",
      message: "Ride completed: Downtown to Airport",
      time: "5 min ago",
      status: "completed",
    },
    {
      type: "payment",
      message: "Payment processed: $24.50",
      time: "8 min ago",
      status: "completed",
    },
    {
      type: "support",
      message: "Support ticket #1247 resolved",
      time: "12 min ago",
      status: "resolved",
    },
    {
      type: "driver",
      message: "Driver Sarah Smith went online",
      time: "15 min ago",
      status: "active",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-taxi-dark mb-4">
            Admin Dashboard
          </h1>
          <p className="text-lg text-taxi-gray">
            Manage your BAMBI operations and monitor system performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="shadow-lg bg-white/90 backdrop-blur-md border-0"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-taxi-gray mb-1">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold text-taxi-dark">
                        {stat.value}
                      </p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-success mr-1" />
                        <span className="text-sm text-success">
                          {stat.trend}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
            <TabsTrigger value="rides">Rides</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>
                    Latest system events and updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-taxi-light-gray/50 rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="text-sm text-taxi-dark">
                          {activity.message}
                        </p>
                        <p className="text-xs text-taxi-gray">
                          {activity.time}
                        </p>
                      </div>
                      <Badge
                        variant={
                          activity.status === "completed"
                            ? "default"
                            : activity.status === "pending"
                              ? "secondary"
                              : "outline"
                        }
                        className="ml-2"
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* System Status */}
              <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-success" />
                    System Status
                  </CardTitle>
                  <CardDescription>
                    Current system health and performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-success mr-3" />
                      <span className="text-taxi-dark">Payment Gateway</span>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      Online
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-success mr-3" />
                      <span className="text-taxi-dark">GPS Tracking</span>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      Online
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-warning mr-3" />
                      <span className="text-taxi-dark">SMS Service</span>
                    </div>
                    <Badge className="bg-warning text-warning-foreground">
                      Degraded
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-success mr-3" />
                      <span className="text-taxi-dark">Mobile Apps</span>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      Online
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="drivers">
            <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Driver Management
                </CardTitle>
                <CardDescription>
                  Manage driver registrations, approvals, and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <UserCheck className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-taxi-dark mb-2">
                    Driver Management Tools
                  </h3>
                  <p className="text-taxi-gray mb-6">
                    Comprehensive driver management features will be available
                    here including registration approval, document verification,
                    performance monitoring, and more.
                  </p>
                  <Button className="btn-primary">Coming Soon</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rides">
            <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="w-5 h-5 mr-2 text-primary" />
                  Ride Management
                </CardTitle>
                <CardDescription>
                  Monitor ongoing rides, trip history, and route optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MapPin className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-taxi-dark mb-2">
                    Ride Monitoring Dashboard
                  </h3>
                  <p className="text-taxi-gray mb-6">
                    Real-time ride tracking, trip analytics, route optimization
                    tools, and comprehensive reporting features will be
                    available here.
                  </p>
                  <Button className="btn-primary">Coming Soon</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finance">
            <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  Financial Management
                </CardTitle>
                <CardDescription>
                  Revenue tracking, payments, and financial reporting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-taxi-dark mb-2">
                    Financial Analytics
                  </h3>
                  <p className="text-taxi-gray mb-6">
                    Comprehensive financial dashboard with revenue tracking,
                    payment processing, driver payouts, and detailed financial
                    reporting will be available here.
                  </p>
                  <Button className="btn-primary">Coming Soon</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
