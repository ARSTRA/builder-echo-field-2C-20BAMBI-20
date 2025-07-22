import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Clock,
  Car,
  MapPin,
  Star,
  Target,
  Gift,
  Zap,
  Download,
  ArrowRight,
  BarChart3,
  PieChart,
  Users,
  Fuel,
  CreditCard,
  Wallet,
  Receipt,
  Award
} from "lucide-react";

interface EarningsPeriod {
  period: string;
  total: number;
  trips: number;
  hours: number;
  tips: number;
  bonuses: number;
  expenses: number;
  net: number;
}

interface TripEarning {
  id: string;
  date: string;
  time: string;
  from: string;
  to: string;
  distance: number;
  duration: number;
  baseFare: number;
  surge: number;
  tip: number;
  bonus: number;
  total: number;
  passenger: string;
  rating: number;
}

export default function EarningsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const [activeTab, setActiveTab] = useState("overview");

  const earningsPeriods: EarningsPeriod[] = [
    {
      period: "Today",
      total: 247.50,
      trips: 12,
      hours: 8.5,
      tips: 45.25,
      bonuses: 15.00,
      expenses: 35.20,
      net: 212.30
    },
    {
      period: "This Week", 
      total: 1850.75,
      trips: 67,
      hours: 42.5,
      tips: 312.50,
      bonuses: 125.00,
      expenses: 240.80,
      net: 1609.95
    },
    {
      period: "This Month",
      total: 7420.25,
      trips: 268,
      hours: 165.5,
      tips: 1250.75,
      bonuses: 480.00,
      expenses: 980.60,
      net: 6439.65
    }
  ];

  const recentTrips: TripEarning[] = [
    {
      id: "TR001",
      date: "Today",
      time: "2:30 PM",
      from: "Downtown Mall",
      to: "Airport Terminal 1",
      distance: 12.4,
      duration: 25,
      baseFare: 22.50,
      surge: 4.50,
      tip: 5.00,
      bonus: 0,
      total: 32.00,
      passenger: "Sarah J.",
      rating: 5
    },
    {
      id: "TR002",
      date: "Today", 
      time: "1:15 PM",
      from: "Tech Park",
      to: "City Center",
      distance: 8.1,
      duration: 15,
      baseFare: 15.25,
      surge: 0,
      tip: 3.00,
      bonus: 2.00,
      total: 20.25,
      passenger: "Mike C.",
      rating: 4
    },
    {
      id: "TR003",
      date: "Today",
      time: "11:45 AM", 
      from: "Residential Area",
      to: "Shopping Center",
      distance: 5.6,
      duration: 12,
      baseFare: 12.00,
      surge: 0,
      tip: 2.50,
      bonus: 0,
      total: 14.50,
      passenger: "Jennifer L.",
      rating: 5
    }
  ];

  const weeklyGoals = {
    earnings: { target: 2000, current: 1850.75, percentage: 92.5 },
    trips: { target: 75, current: 67, percentage: 89.3 },
    rating: { target: 4.8, current: 4.9, percentage: 100 },
    hours: { target: 45, current: 42.5, percentage: 94.4 }
  };

  const earningsBreakdown = {
    baseFares: 1205.25,
    surgePricing: 230.00,
    tips: 312.50,
    bonuses: 125.00,
    promotions: 58.00
  };

  const expenses = [
    { category: "Fuel", amount: 120.50, percentage: 50 },
    { category: "Vehicle Maintenance", amount: 65.30, percentage: 27 },
    { category: "Insurance", amount: 35.00, percentage: 15 },
    { category: "Tolls & Parking", amount: 20.00, percentage: 8 }
  ];

  const getCurrentPeriodData = () => {
    return earningsPeriods.find(p => p.period.toLowerCase().includes(selectedPeriod)) || earningsPeriods[1];
  };

  const currentData = getCurrentPeriodData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray pb-20">
      <div className="px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-taxi-dark">Earnings</h1>
            <p className="text-taxi-gray">Track your income and performance</p>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Earnings Summary */}
        <Card className="mobile-card mb-6 bg-gradient-to-r from-success/10 to-accent/10 border-success/20">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-success">${currentData.total}</div>
              <p className="text-taxi-gray">Total Earnings - {currentData.period}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-semibold text-taxi-dark">{currentData.trips}</div>
                <p className="text-xs text-taxi-gray">Trips</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-accent">{currentData.hours}h</div>
                <p className="text-xs text-taxi-gray">Online</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary">${(currentData.total / currentData.trips).toFixed(2)}</div>
                <p className="text-xs text-taxi-gray">Per Trip</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
            <TabsTrigger value="trips" className="text-xs">Trips</TabsTrigger>
            <TabsTrigger value="goals" className="text-xs">Goals</TabsTrigger>
            <TabsTrigger value="expenses" className="text-xs">Expenses</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Earnings Breakdown */}
            <Card className="mobile-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-accent" />
                  Earnings Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-taxi-gray">Base Fares</span>
                    <span className="font-medium">${earningsBreakdown.baseFares}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-taxi-gray">Surge Pricing</span>
                    <span className="font-medium text-warning">${earningsBreakdown.surgePricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-taxi-gray">Tips</span>
                    <span className="font-medium text-success">${earningsBreakdown.tips}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-taxi-gray">Bonuses</span>
                    <span className="font-medium text-accent">${earningsBreakdown.bonuses}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-taxi-gray">Promotions</span>
                    <span className="font-medium text-primary">${earningsBreakdown.promotions}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center font-semibold">
                    <span className="text-taxi-dark">Total</span>
                    <span className="text-success">${currentData.total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="mobile-card">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-lg font-bold text-success">+15.2%</div>
                  <p className="text-xs text-taxi-gray">vs last week</p>
                </CardContent>
              </Card>
              
              <Card className="mobile-card">
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 text-warning mx-auto mb-2" />
                  <div className="text-lg font-bold text-taxi-dark">4.9</div>
                  <p className="text-xs text-taxi-gray">Average rating</p>
                </CardContent>
              </Card>

              <Card className="mobile-card">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-lg font-bold text-accent">${(currentData.total / currentData.hours).toFixed(2)}</div>
                  <p className="text-xs text-taxi-gray">Per hour</p>
                </CardContent>
              </Card>
              
              <Card className="mobile-card">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-primary">95%</div>
                  <p className="text-xs text-taxi-gray">Acceptance rate</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <Card className="mobile-card">
              <CardHeader className="pb-3">
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <div className="flex justify-between">
                  <span className="text-taxi-gray">Peak Hours Earnings</span>
                  <span className="font-medium">${(currentData.total * 0.4).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taxi-gray">Night Shift Bonus</span>
                  <span className="font-medium text-accent">${currentData.bonuses}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taxi-gray">Longest Trip</span>
                  <span className="font-medium">24.5 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taxi-gray">Best Day</span>
                  <span className="font-medium">Wednesday ($285)</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trips Tab */}
          <TabsContent value="trips" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-taxi-dark">Recent Trips</h3>
              <Button variant="ghost" size="sm">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {recentTrips.map((trip) => (
              <Card key={trip.id} className="mobile-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-taxi-dark">{trip.passenger}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-taxi-gray">{trip.rating}/5</span>
                        <span className="text-xs text-taxi-gray">• {trip.time}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-success">${trip.total}</div>
                      <div className="text-xs text-taxi-gray">{trip.distance} km</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-taxi-gray truncate">{trip.from}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-destructive rounded-full"></div>
                      <span className="text-taxi-gray truncate">{trip.to}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div>
                      <div className="font-medium">${trip.baseFare}</div>
                      <div className="text-taxi-gray">Base</div>
                    </div>
                    {trip.surge > 0 && (
                      <div>
                        <div className="font-medium text-warning">${trip.surge}</div>
                        <div className="text-taxi-gray">Surge</div>
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-success">${trip.tip}</div>
                      <div className="text-taxi-gray">Tip</div>
                    </div>
                    {trip.bonus > 0 && (
                      <div>
                        <div className="font-medium text-accent">${trip.bonus}</div>
                        <div className="text-taxi-gray">Bonus</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals" className="space-y-6">
            <Card className="mobile-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Weekly Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-taxi-gray">Earnings Goal</span>
                    <span className="text-sm font-medium">${weeklyGoals.earnings.current}/${weeklyGoals.earnings.target}</span>
                  </div>
                  <Progress value={weeklyGoals.earnings.percentage} className="h-3" />
                  <p className="text-xs text-taxi-gray mt-1">{weeklyGoals.earnings.percentage.toFixed(1)}% complete</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-taxi-gray">Trips Goal</span>
                    <span className="text-sm font-medium">{weeklyGoals.trips.current}/{weeklyGoals.trips.target}</span>
                  </div>
                  <Progress value={weeklyGoals.trips.percentage} className="h-3" />
                  <p className="text-xs text-taxi-gray mt-1">{weeklyGoals.trips.percentage.toFixed(1)}% complete</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-taxi-gray">Rating Goal</span>
                    <span className="text-sm font-medium">{weeklyGoals.rating.current}/{weeklyGoals.rating.target}</span>
                  </div>
                  <Progress value={weeklyGoals.rating.percentage} className="h-3" />
                  <p className="text-xs text-success mt-1">Goal achieved! 🎉</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-taxi-gray">Hours Goal</span>
                    <span className="text-sm font-medium">{weeklyGoals.hours.current}h/{weeklyGoals.hours.target}h</span>
                  </div>
                  <Progress value={weeklyGoals.hours.percentage} className="h-3" />
                  <p className="text-xs text-taxi-gray mt-1">{weeklyGoals.hours.percentage.toFixed(1)}% complete</p>
                </div>
              </CardContent>
            </Card>

            {/* Incentives */}
            <Card className="mobile-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-warning" />
                  Available Incentives
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-warning">Peak Hour Bonus</h4>
                    <Badge className="bg-warning text-warning-foreground">+$5/trip</Badge>
                  </div>
                  <p className="text-sm text-taxi-gray">Complete 5 trips during 7-9 AM or 5-7 PM</p>
                  <div className="mt-2">
                    <Progress value={60} className="h-2" />
                    <p className="text-xs text-taxi-gray mt-1">3 of 5 trips completed</p>
                  </div>
                </div>

                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-accent">Weekend Warrior</h4>
                    <Badge className="bg-accent text-accent-foreground">$50 bonus</Badge>
                  </div>
                  <p className="text-sm text-taxi-gray">Complete 20 trips this weekend</p>
                  <div className="mt-2">
                    <Progress value={35} className="h-2" />
                    <p className="text-xs text-taxi-gray mt-1">7 of 20 trips completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Expenses Tab */}
          <TabsContent value="expenses" className="space-y-6">
            <Card className="mobile-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Receipt className="w-5 h-5 mr-2 text-destructive" />
                  This Week's Expenses
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-destructive">${currentData.expenses}</div>
                  <p className="text-sm text-taxi-gray">Total expenses</p>
                </div>

                <div className="space-y-3">
                  {expenses.map((expense, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          index === 0 ? 'bg-destructive' :
                          index === 1 ? 'bg-warning' :
                          index === 2 ? 'bg-accent' : 'bg-success'
                        }`}></div>
                        <span className="text-sm text-taxi-gray">{expense.category}</span>
                      </div>
                      <span className="font-medium">${expense.amount}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center font-semibold">
                    <span className="text-taxi-dark">Net Earnings</span>
                    <span className="text-success text-lg">${currentData.net}</span>
                  </div>
                  <p className="text-xs text-taxi-gray mt-1">
                    After deducting expenses
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Expense Tips */}
            <Card className="mobile-card">
              <CardHeader className="pb-3">
                <CardTitle>Expense Tips</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <div className="flex items-start space-x-3">
                  <Fuel className="w-5 h-5 text-warning mt-1" />
                  <div>
                    <h4 className="font-medium text-taxi-dark">Track Fuel Costs</h4>
                    <p className="text-sm text-taxi-gray">Keep receipts for tax deductions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Car className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium text-taxi-dark">Vehicle Maintenance</h4>
                    <p className="text-sm text-taxi-gray">Regular maintenance saves money long-term</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-taxi-dark">Business Account</h4>
                    <p className="text-sm text-taxi-gray">Separate business and personal expenses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
