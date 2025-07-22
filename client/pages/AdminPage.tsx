import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAdminAuth } from "@/components/auth/AdminAuthProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  Wallet,
  MessageCircle,
  Navigation,
  Calendar,
  Star,
  Phone,
  Mail,
  Edit,
  Trash2,
  Plus,
  Download,
  Upload,
  Filter,
  Search,
  Eye,
  Ban,
  CheckSquare,
  XCircle,
  RefreshCw,
  MapPinOff,
  Baby,
  Accessibility,
  Crown,
  Repeat,
  Building,
  Globe,
  Zap,
  ShoppingBag,
  Gift,
  FileText,
  CreditCard,
  AlertCircle,
  Moon,
  Sun,
  Plane,
  Users2,
  UserX,
  Heart,
  Target,
  Timer,
  Route,
  LogOut,
} from "lucide-react";

export default function AdminPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRide, setSelectedRide] = useState(null);
  const [activeModule, setActiveModule] = useState("dashboard");
  const { user, logout } = useAdminAuth();

  const stats = [
    { label: "Active Drivers", value: "2,847", icon: Users, trend: "+12%" },
    { label: "Total Rides Today", value: "18,392", icon: Car, trend: "+8%" },
    { label: "Revenue Today", value: "$42,847", icon: DollarSign, trend: "+15%" },
    { label: "Average Rating", value: "4.9", icon: CheckCircle, trend: "+0.1" },
  ];

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "+1234567890", status: "active", role: "passenger", joinDate: "2024-01-15", totalRides: 45 },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", phone: "+1234567891", status: "active", role: "driver", joinDate: "2024-02-20", totalRides: 128 },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "+1234567892", status: "suspended", role: "passenger", joinDate: "2024-03-10", totalRides: 12 },
  ];

  const drivers = [
    { id: 1, name: "Sarah Smith", email: "sarah@example.com", phone: "+1234567891", status: "online", rating: 4.8, totalRides: 128, earnings: "$2,450", shift: "day", vehicle: "Toyota Camry 2020" },
    { id: 2, name: "David Wilson", email: "david@example.com", phone: "+1234567893", status: "offline", rating: 4.9, totalRides: 95, earnings: "$1,890", shift: "night", vehicle: "Honda Accord 2019" },
    { id: 3, name: "Emma Brown", email: "emma@example.com", phone: "+1234567894", status: "busy", rating: 4.7, totalRides: 76, earnings: "$1,520", shift: "day", vehicle: "Nissan Altima 2021" },
  ];

  const rides = [
    { id: 1, passenger: "John Doe", driver: "Sarah Smith", from: "Downtown", to: "Airport", fare: "$24.50", status: "completed", date: "2024-01-20", duration: "25 min", distance: "12.5 km" },
    { id: 2, passenger: "Alice Johnson", driver: "David Wilson", from: "Mall", to: "Hotel", fare: "$18.75", status: "active", date: "2024-01-20", duration: "ongoing", distance: "8.2 km" },
    { id: 3, passenger: "Bob Smith", driver: "Emma Brown", from: "Office", to: "Home", fare: "$15.30", status: "cancelled", date: "2024-01-20", duration: "N/A", distance: "6.8 km" },
  ];

  const transactions = [
    { id: 1, user: "John Doe", type: "ride_payment", amount: "$24.50", status: "completed", date: "2024-01-20", method: "card" },
    { id: 2, user: "Sarah Smith", type: "driver_payout", amount: "$19.60", status: "completed", date: "2024-01-20", method: "bank" },
    { id: 3, user: "Mike Johnson", type: "wallet_topup", amount: "$50.00", status: "pending", date: "2024-01-20", method: "card" },
  ];

  const specialZones = [
    { id: 1, name: "Airport Zone", type: "premium", multiplier: "1.5x", status: "active", rides: 234 },
    { id: 2, name: "Downtown Red Zone", type: "restricted", multiplier: "2.0x", status: "active", rides: 89 },
    { id: 3, name: "Hospital Zone", type: "priority", multiplier: "1.2x", status: "active", rides: 156 },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-lg bg-white/90 backdrop-blur-md border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-taxi-gray mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-taxi-dark">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-success mr-1" />
                      <span className="text-sm text-success">{stat.trend}</span>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-20 flex flex-col">
              <Plus className="w-6 h-6 mb-2" />
              Add Driver
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <MapPinOff className="w-6 h-6 mb-2" />
              Set Red Zone
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <DollarSign className="w-6 h-6 mb-2" />
              Price Update
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <FileText className="w-6 h-6 mb-2" />
              Generate Report
            </Button>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-success" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Payment Gateway", status: "online" },
              { name: "GPS Tracking", status: "online" },
              { name: "SMS Service", status: "degraded" },
              { name: "Mobile Apps", status: "online" },
              { name: "Driver App", status: "online" },
              { name: "Admin Panel", status: "online" },
            ].map((service, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-taxi-light-gray/30 rounded-lg">
                <span className="text-taxi-dark">{service.name}</span>
                <Badge className={service.status === "online" ? "bg-success" : "bg-warning"}>
                  {service.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderUsersManager = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-taxi-dark">Users Management</h2>
          <p className="text-taxi-gray">Manage passengers and their accounts</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>Create a new user account</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter full name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="passenger">Passenger</SelectItem>
                    <SelectItem value="driver">Driver</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full btn-primary">Create User</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>User List</CardTitle>
            <div className="flex items-center gap-2">
              <Input placeholder="Search users..." className="w-64" />
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Rides</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === "driver" ? "default" : "secondary"}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === "active" ? "default" : "destructive"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.totalRides}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Ban className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderDriversManager = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-taxi-dark">Drivers Management</h2>
          <p className="text-taxi-gray">Manage driver registrations, shifts, and performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Driver
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Online Drivers</p>
                <p className="text-xl font-bold text-success">847</p>
              </div>
              <Users className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Day Shift</p>
                <p className="text-xl font-bold text-primary">523</p>
              </div>
              <Sun className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Night Shift</p>
                <p className="text-xl font-bold text-accent">324</p>
              </div>
              <Moon className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Pending Approval</p>
                <p className="text-xl font-bold text-warning">23</p>
              </div>
              <Clock className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
        <CardHeader>
          <CardTitle>Driver List</CardTitle>
          <div className="flex items-center gap-2">
            <Input placeholder="Search drivers..." className="w-64" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
                <SelectItem value="busy">Busy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Total Rides</TableHead>
                <TableHead>Earnings</TableHead>
                <TableHead>Shift</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{driver.name}</p>
                      <p className="text-sm text-taxi-gray">{driver.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{driver.vehicle}</TableCell>
                  <TableCell>
                    <Badge variant={driver.status === "online" ? "default" : driver.status === "busy" ? "secondary" : "outline"}>
                      {driver.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {driver.rating}
                    </div>
                  </TableCell>
                  <TableCell>{driver.totalRides}</TableCell>
                  <TableCell>{driver.earnings}</TableCell>
                  <TableCell>
                    <Badge variant={driver.shift === "day" ? "default" : "secondary"}>
                      {driver.shift}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Ban className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderRidesManager = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-taxi-dark">Rides Management</h2>
          <p className="text-taxi-gray">Monitor ongoing rides, trip history, and tracking</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline">
            <Navigation className="w-4 h-4 mr-2" />
            Live Map
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Active Rides</p>
                <p className="text-xl font-bold text-success">156</p>
              </div>
              <Car className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Completed Today</p>
                <p className="text-xl font-bold text-primary">2,847</p>
              </div>
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Cancelled</p>
                <p className="text-xl font-bold text-destructive">89</p>
              </div>
              <XCircle className="w-8 h-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Scheduled</p>
                <p className="text-xl font-bold text-accent">234</p>
              </div>
              <Calendar className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Pool Rides</p>
                <p className="text-xl font-bold text-warning">67</p>
              </div>
              <Users2 className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
        <CardHeader>
          <CardTitle>Recent Rides</CardTitle>
          <div className="flex items-center gap-2">
            <Input placeholder="Search rides..." className="w-64" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Rides</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ride ID</TableHead>
                <TableHead>Passenger</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Distance</TableHead>
                <TableHead>Fare</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rides.map((ride) => (
                <TableRow key={ride.id}>
                  <TableCell className="font-medium">#{ride.id}</TableCell>
                  <TableCell>{ride.passenger}</TableCell>
                  <TableCell>{ride.driver}</TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{ride.from} → {ride.to}</p>
                    </div>
                  </TableCell>
                  <TableCell>{ride.distance}</TableCell>
                  <TableCell>{ride.fare}</TableCell>
                  <TableCell>
                    <Badge variant={ride.status === "completed" ? "default" : ride.status === "active" ? "secondary" : "destructive"}>
                      {ride.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Navigation className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderTransactionManager = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-taxi-dark">Transaction Management</h2>
          <p className="text-taxi-gray">Monitor payments, payouts, and financial transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Manual Transaction
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Today's Revenue</p>
                <p className="text-xl font-bold text-success">$42,847</p>
              </div>
              <DollarSign className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Pending Payouts</p>
                <p className="text-xl font-bold text-warning">$8,750</p>
              </div>
              <Clock className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Failed Payments</p>
                <p className="text-xl font-bold text-destructive">$1,230</p>
              </div>
              <XCircle className="w-8 h-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white/90 backdrop-blur-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-taxi-gray">Wallet Balance</p>
                <p className="text-xl font-bold text-primary">$125,450</p>
              </div>
              <Wallet className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <div className="flex items-center gap-2">
            <Input placeholder="Search transactions..." className="w-64" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Transaction type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="ride_payment">Ride Payment</SelectItem>
                <SelectItem value="driver_payout">Driver Payout</SelectItem>
                <SelectItem value="wallet_topup">Wallet Top-up</SelectItem>
                <SelectItem value="refund">Refund</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">#{transaction.id.toString().padStart(6, '0')}</TableCell>
                  <TableCell>{transaction.user}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {transaction.type.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{transaction.amount}</TableCell>
                  <TableCell>{transaction.method}</TableCell>
                  <TableCell>
                    <Badge variant={transaction.status === "completed" ? "default" : transaction.status === "pending" ? "secondary" : "destructive"}>
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderSpecialZones = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-taxi-dark">Special Zones & Pricing</h2>
          <p className="text-taxi-gray">Manage red zones, premium areas, and dynamic pricing</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add Zone
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Special Zone</DialogTitle>
              <DialogDescription>Define a new special pricing zone</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="zone-name">Zone Name</Label>
                <Input id="zone-name" placeholder="Enter zone name" />
              </div>
              <div>
                <Label htmlFor="zone-type">Zone Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select zone type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premium">Premium Zone</SelectItem>
                    <SelectItem value="restricted">Red Zone</SelectItem>
                    <SelectItem value="priority">Priority Zone</SelectItem>
                    <SelectItem value="airport">Airport Zone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="multiplier">Price Multiplier</Label>
                <Input id="multiplier" placeholder="e.g., 1.5" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="active" />
                <Label htmlFor="active">Zone Active</Label>
              </div>
              <Button className="w-full btn-primary">Create Zone</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
        <CardHeader>
          <CardTitle>Active Special Zones</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Zone Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price Multiplier</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Rides</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specialZones.map((zone) => (
                <TableRow key={zone.id}>
                  <TableCell className="font-medium">{zone.name}</TableCell>
                  <TableCell>
                    <Badge variant={zone.type === "restricted" ? "destructive" : zone.type === "premium" ? "default" : "secondary"}>
                      {zone.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{zone.multiplier}</TableCell>
                  <TableCell>
                    <Badge variant="default">{zone.status}</Badge>
                  </TableCell>
                  <TableCell>{zone.rides}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MapPin className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle>Peak Time Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-taxi-light-gray/30 rounded-lg">
              <div>
                <p className="font-medium">Morning Peak (7-9 AM)</p>
                <p className="text-sm text-taxi-gray">1.3x multiplier</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-taxi-light-gray/30 rounded-lg">
              <div>
                <p className="font-medium">Evening Peak (5-7 PM)</p>
                <p className="text-sm text-taxi-gray">1.4x multiplier</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-taxi-light-gray/30 rounded-lg">
              <div>
                <p className="font-medium">Night Time (10 PM-5 AM)</p>
                <p className="text-sm text-taxi-gray">1.2x multiplier</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle>Dynamic Pricing Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-taxi-light-gray/30 rounded-lg">
              <div>
                <p className="font-medium">High Demand Areas</p>
                <p className="text-sm text-taxi-gray">Auto-adjust based on demand</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-taxi-light-gray/30 rounded-lg">
              <div>
                <p className="font-medium">Weather-based Pricing</p>
                <p className="text-sm text-taxi-gray">Increase during bad weather</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-3 bg-taxi-light-gray/30 rounded-lg">
              <div>
                <p className="font-medium">Event-based Pricing</p>
                <p className="text-sm text-taxi-gray">Special events & holidays</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAdvancedFeatures = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-taxi-dark">Advanced Features</h2>
        <p className="text-taxi-gray">Configure special ride options and accessibility features</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Accessibility Features */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Accessibility className="w-5 h-5 mr-2 text-primary" />
              Accessibility
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Wheelchair Access</p>
                <p className="text-sm text-taxi-gray">Enable wheelchair-accessible vehicles</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Baby Seat</p>
                <p className="text-sm text-taxi-gray">Allow baby seat requests</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Audio Assistance</p>
                <p className="text-sm text-taxi-gray">Voice guidance for visually impaired</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Ride Preferences */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="w-5 h-5 mr-2 text-primary" />
              Ride Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Gender Preference</p>
                <p className="text-sm text-taxi-gray">Allow driver gender selection</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Favorite Driver</p>
                <p className="text-sm text-taxi-gray">Save and request preferred drivers</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Quiet Mode</p>
                <p className="text-sm text-taxi-gray">Silent ride option</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Features */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">OTP on Trip Start</p>
                <p className="text-sm text-taxi-gray">Verify driver with OTP</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Guardian Tracking</p>
                <p className="text-sm text-taxi-gray">Share ride with guardians</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Emergency SOS</p>
                <p className="text-sm text-taxi-gray">One-tap emergency contact</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Corporate Features */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="w-5 h-5 mr-2 text-primary" />
              Corporate Rides
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Corporate Accounts</p>
                <p className="text-sm text-taxi-gray">Business ride accounts</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Expense Reporting</p>
                <p className="text-sm text-taxi-gray">Automated expense tracking</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Bulk Booking</p>
                <p className="text-sm text-taxi-gray">Multiple rides at once</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Recurring Rides */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Repeat className="w-5 h-5 mr-2 text-primary" />
              Recurring Rides
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Scheduled Rides</p>
                <p className="text-sm text-taxi-gray">Daily/weekly recurring trips</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto Payment</p>
                <p className="text-sm text-taxi-gray">Automatic payment for recurring rides</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Route Optimization</p>
                <p className="text-sm text-taxi-gray">Smart route learning</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Special Services */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2 text-primary" />
              Special Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Delivery Service</p>
                <p className="text-sm text-taxi-gray">Package delivery option</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Outstation Booking</p>
                <p className="text-sm text-taxi-gray">Long-distance trips</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Car Rental</p>
                <p className="text-sm text-taxi-gray">Self-drive car rental</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pool Service Configuration */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users2 className="w-5 h-5 mr-2 text-primary" />
              Ride Pool Service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="pool-radius">Pool Matching Radius (km)</Label>
              <Input id="pool-radius" type="number" defaultValue="2" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="max-passengers">Max Passengers per Pool</Label>
              <Input id="max-passengers" type="number" defaultValue="4" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="pool-discount">Pool Discount (%)</Label>
              <Input id="pool-discount" type="number" defaultValue="25" className="mt-1" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="pool-active" defaultChecked />
              <Label htmlFor="pool-active">Pool Service Active</Label>
            </div>
          </CardContent>
        </Card>

        {/* Multi-City Management */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-primary" />
              Multi-City Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="default-city">Default City</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select default city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="los-angeles">Los Angeles</SelectItem>
                  <SelectItem value="chicago">Chicago</SelectItem>
                  <SelectItem value="houston">Houston</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="currency">Currency</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                  <SelectItem value="cad">CAD (C$)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="rtl-support" />
              <Label htmlFor="rtl-support">RTL Support</Label>
            </div>
            <Button className="w-full btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add New City
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "users", label: "Users Manager", icon: Users },
    { id: "drivers", label: "Drivers Manager", icon: UserCheck },
    { id: "rides", label: "Rides Manager", icon: Car },
    { id: "transactions", label: "Transaction Manager", icon: DollarSign },
    { id: "wallet", label: "Wallet Manager", icon: Wallet },
    { id: "reports", label: "Reports & Analytics", icon: FileText },
    { id: "chat", label: "Chat Module", icon: MessageCircle },
    { id: "zones", label: "Special Zones", icon: MapPinOff },
    { id: "features", label: "Advanced Features", icon: Settings },
  ];

  const renderContent = () => {
    switch (activeModule) {
      case "dashboard":
        return renderDashboard();
      case "users":
        return renderUsersManager();
      case "drivers":
        return renderDriversManager();
      case "rides":
        return renderRidesManager();
      case "transactions":
        return renderTransactionManager();
      case "zones":
        return renderSpecialZones();
      case "features":
        return renderAdvancedFeatures();
      case "wallet":
        return (
          <div className="text-center py-12">
            <Wallet className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
            <h3 className="text-lg font-medium text-taxi-dark mb-2">Wallet Manager</h3>
            <p className="text-taxi-gray">Manage user wallets, top-ups, and balance transfers</p>
          </div>
        );
      case "reports":
        return (
          <div className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
            <h3 className="text-lg font-medium text-taxi-dark mb-2">Reports & Analytics</h3>
            <p className="text-taxi-gray">Comprehensive reporting and business analytics dashboard</p>
          </div>
        );
      case "chat":
        return (
          <div className="text-center py-12">
            <MessageCircle className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
            <h3 className="text-lg font-medium text-taxi-dark mb-2">Chat Module</h3>
            <p className="text-taxi-gray">Customer support chat system and communication tools</p>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          <div className="flex flex-col flex-grow pt-5 bg-white/90 backdrop-blur-md border-r border-gray-200 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-xl font-bold text-taxi-dark">BAMBI Admin</h1>
            </div>

            {/* User Info */}
            <div className="mt-6 px-4">
              <div className="bg-primary/5 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-taxi-dark">{user?.name}</p>
                    <p className="text-xs text-taxi-gray">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveModule(item.id)}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left transition-colors ${
                        activeModule === item.id
                          ? "bg-primary text-primary-foreground"
                          : "text-taxi-dark hover:bg-taxi-light-gray/50"
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <div className="px-2 pb-4">
                <button
                  onClick={logout}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left text-destructive hover:bg-destructive/10 transition-colors"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between p-4 bg-white/90 backdrop-blur-md border-b border-gray-200">
            <h1 className="text-xl font-bold text-taxi-dark">BAMBI Admin</h1>
            <Select value={activeModule} onValueChange={setActiveModule}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {navigationItems.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:pl-64 flex flex-col flex-1">
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {renderContent()}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
