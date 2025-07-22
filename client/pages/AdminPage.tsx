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
import { useToast } from "@/hooks/use-toast";
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
  Filter,
  Search,
  Eye,
  Ban,
  XCircle,
  RefreshCw,
  MapPinOff,
  Baby,
  Accessibility,
  Repeat,
  Building,
  Globe,
  Zap,
  ShoppingBag,
  FileText,
  CreditCard,
  AlertCircle,
  Moon,
  Sun,
  Users2,
  Heart,
  LogOut,
  User,
  Bitcoin,
  Smartphone,
  Banknote,
  Landmark,
  Coins,
  QrCode,
  ArrowUpDown,
  TrendingDown,
  Send,
  Receipt,
  PiggyBank,
  WalletCards,
  HandCoins,
  DollarSign as DollarIcon,
  EuroIcon,
  PoundSterlingIcon,
} from "lucide-react";

export default function AdminPage() {
  const [activeModule, setActiveModule] = useState("dashboard");
  const { user, logout } = useAdminAuth();
  const { toast } = useToast();

  // State for various forms and operations
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [formData, setFormData] = useState<any>({});
  const [showUserDialog, setShowUserDialog] = useState(false);
  const [showDriverDialog, setShowDriverDialog] = useState(false);
  const [showTransactionDialog, setShowTransactionDialog] = useState(false);
  const [showZoneDialog, setShowZoneDialog] = useState(false);
  const [showPriceDialog, setShowPriceDialog] = useState(false);

  // Show loading if user data is not yet available
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-taxi-gray">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  // Specific button action handlers
  const handleViewUser = (userData: any) => {
    setSelectedUser(userData);
    setShowUserDialog(true);
    toast({
      title: "User Details",
      description: `Viewing details for ${userData.name}`,
    });
  };

  const handleEditUser = (userData: any) => {
    setSelectedUser(userData);
    setFormData(userData);
    setShowUserDialog(true);
    toast({
      title: "Edit Mode",
      description: `Editing user ${userData.name}`,
    });
  };

  const handleBanUser = async (userData: any) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "User Banned",
        description: `${userData.name} has been banned from the platform`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddDriver = () => {
    setShowDriverDialog(true);
    setFormData({});
    toast({
      title: "Add Driver",
      description: "Opening driver registration form",
    });
  };

  const handleSetRedZone = () => {
    setShowZoneDialog(true);
    toast({
      title: "Red Zone Manager",
      description: "Configure restricted areas and pricing",
    });
  };

  const handlePriceUpdate = () => {
    setShowPriceDialog(true);
    toast({
      title: "Price Manager",
      description: "Update pricing and surge rates",
    });
  };

  const handleGenerateReport = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Report Generated",
        description: "Financial report has been generated and is ready for download",
      });
      // Simulate download
      const reportData = `BAMBI Admin Report - ${new Date().toISOString()}\n\nRevenue: $42,847\nRides: 18,392\nDrivers: 2,847`;
      const blob = new Blob([reportData], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `bambi-report-${Date.now()}.txt`;
      a.click();
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportData = async (dataType: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Export Complete",
        description: `${dataType} data has been exported successfully`,
      });
      // Simulate CSV download
      const csvData = `Name,Email,Status,Rides\nJohn Doe,john@example.com,active,45\nSarah Smith,sarah@example.com,active,128`;
      const blob = new Blob([csvData], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${dataType.toLowerCase()}-export-${Date.now()}.csv`;
      a.click();
    } finally {
      setIsLoading(false);
    }
  };

  const handleManualTransaction = () => {
    setShowTransactionDialog(true);
    setFormData({});
    toast({
      title: "Manual Transaction",
      description: "Create a manual transaction entry",
    });
  };

  const handleConfigurePayment = (paymentMethod: any) => {
    setSelectedPaymentMethod(paymentMethod.id);
    toast({
      title: "Payment Configuration",
      description: `Configuring ${paymentMethod.name} settings`,
    });
  };

  const handleManageWallet = () => {
    setActiveModule("wallet");
    toast({
      title: "Wallet Manager",
      description: "Opening wallet management interface",
    });
  };

  const handleAdvancedFeatures = () => {
    setActiveModule("features");
    toast({
      title: "Advanced Features",
      description: "Accessing advanced platform features",
    });
  };

  const handleDownloadReceipt = async (transaction: any) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Receipt Downloaded",
        description: `Receipt for transaction #${transaction.id} downloaded`,
      });
      // Simulate receipt download
      const receiptData = `BAMBI RECEIPT\nTransaction ID: #${transaction.id}\nAmount: ${transaction.amount}\nUser: ${transaction.user}\nMethod: ${transaction.method}`;
      const blob = new Blob([receiptData], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `receipt-${transaction.id}.txt`;
      a.click();
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewTransaction = (transaction: any) => {
    toast({
      title: "Transaction Details",
      description: `Viewing transaction #${transaction.id} - ${transaction.amount}`,
    });
    console.log("Transaction details:", transaction);
  };

  const stats = [
    { label: "Active Drivers", value: "2,847", icon: Users, trend: "+12%", color: "bg-blue-500" },
    { label: "Total Rides Today", value: "18,392", icon: Car, trend: "+8%", color: "bg-green-500" },
    { label: "Revenue Today", value: "$42,847", icon: DollarSign, trend: "+15%", color: "bg-purple-500" },
    { label: "Average Rating", value: "4.9", icon: CheckCircle, trend: "+0.1", color: "bg-orange-500" },
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
    { id: 1, user: "John Doe", type: "ride_payment", amount: "$24.50", status: "completed", date: "2024-01-20", method: "credit_card", paymentId: "CC_001" },
    { id: 2, user: "Sarah Smith", type: "driver_payout", amount: "$19.60", status: "completed", date: "2024-01-20", method: "bank_transfer", paymentId: "BT_002" },
    { id: 3, user: "Mike Johnson", type: "wallet_topup", amount: "$50.00", status: "pending", date: "2024-01-20", method: "crypto", paymentId: "BTC_003" },
    { id: 4, user: "Alice Johnson", type: "ride_payment", amount: "$18.75", status: "completed", date: "2024-01-20", method: "debit_card", paymentId: "DC_004" },
    { id: 5, user: "Bob Smith", type: "refund", amount: "$15.30", status: "processing", date: "2024-01-20", method: "paypal", paymentId: "PP_005" },
  ];

  const paymentMethods = [
    { id: "credit_card", name: "Credit Card", icon: CreditCard, color: "bg-blue-600", description: "Visa, Mastercard, Amex" },
    { id: "debit_card", name: "Debit Card", icon: WalletCards, color: "bg-green-600", description: "Bank debit cards" },
    { id: "bank_transfer", name: "Bank Transfer", icon: Landmark, color: "bg-purple-600", description: "Direct bank transfers" },
    { id: "crypto", name: "Cryptocurrency", icon: Bitcoin, color: "bg-orange-600", description: "Bitcoin, Ethereum, USDT" },
    { id: "digital_wallet", name: "Digital Wallet", icon: Smartphone, color: "bg-pink-600", description: "Apple Pay, Google Pay" },
    { id: "paypal", name: "PayPal", icon: DollarIcon, color: "bg-blue-500", description: "PayPal payments" },
    { id: "cash", name: "Cash", icon: Banknote, color: "bg-green-500", description: "Cash payments" },
    { id: "qr_payment", name: "QR Payment", icon: QrCode, color: "bg-indigo-600", description: "QR code payments" },
    { id: "gift_card", name: "Gift Card", icon: Coins, color: "bg-yellow-600", description: "Platform gift cards" },
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
            <Card key={index} className="shadow-lg bg-white/90 backdrop-blur-md border-0 hover:shadow-xl transition-shadow">
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
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
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
            <Button
              variant="outline"
              className="h-20 flex flex-col bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 border-0"
              onClick={handleAddDriver}
              disabled={isLoading}
            >
              <Plus className="w-6 h-6 mb-2" />
              Add Driver
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 border-0"
              onClick={handleSetRedZone}
              disabled={isLoading}
            >
              <MapPinOff className="w-6 h-6 mb-2" />
              Set Red Zone
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 border-0"
              onClick={handlePriceUpdate}
              disabled={isLoading}
            >
              <DollarSign className="w-6 h-6 mb-2" />
              Price Update
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 border-0"
              onClick={handleGenerateReport}
              disabled={isLoading}
            >
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
              { name: "Payment Gateway", status: "online", color: "bg-green-500" },
              { name: "GPS Tracking", status: "online", color: "bg-green-500" },
              { name: "SMS Service", status: "degraded", color: "bg-yellow-500" },
              { name: "Mobile Apps", status: "online", color: "bg-green-500" },
              { name: "Driver App", status: "online", color: "bg-green-500" },
              { name: "Admin Panel", status: "online", color: "bg-green-500" },
            ].map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-taxi-light-gray/30 rounded-lg hover:bg-taxi-light-gray/50 transition-colors">
                <span className="text-taxi-dark font-medium">{service.name}</span>
                <Badge className={`${service.color} text-white border-0`}>
                  {service.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPaymentMethods = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-taxi-dark">Payment Methods</h2>
          <p className="text-taxi-gray">Manage and configure payment options</p>
        </div>
        <Button
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
          onClick={() => handleConfigurePayment({id: "new", name: "New Payment Method"})}
          disabled={isLoading}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Payment Method
        </Button>
      </div>

      {/* Payment Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          return (
            <Card key={method.id} className="shadow-lg bg-white/90 backdrop-blur-md border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Switch defaultChecked={method.id !== "cash"} />
                </div>
                <h3 className="text-lg font-semibold text-taxi-dark mb-2">{method.name}</h3>
                <p className="text-sm text-taxi-gray mb-4">{method.description}</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleConfigurePayment(method)}
                    disabled={isLoading}
                  >
                    <Settings className="w-4 h-4 mr-1" />
                    Configure
                  </Button>
                  <Button
                    size="sm"
                    className={`${method.color} text-white border-0 hover:opacity-90`}
                    onClick={() => toast({title: `${method.name} Statistics`, description: "Payment method analytics opened"})}
                    disabled={isLoading}
                  >
                    <BarChart3 className="w-4 h-4 mr-1" />
                    Stats
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Payment Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Card Payments</p>
                <p className="text-2xl font-bold">67%</p>
              </div>
              <CreditCard className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Digital Wallets</p>
                <p className="text-2xl font-bold">23%</p>
              </div>
              <Smartphone className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Crypto</p>
                <p className="text-2xl font-bold">7%</p>
              </div>
              <Bitcoin className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-gradient-to-r from-gray-500 to-gray-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-100">Cash</p>
                <p className="text-2xl font-bold">3%</p>
              </div>
              <Banknote className="w-8 h-8 text-gray-200" />
            </div>
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
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 border-0"
            onClick={() => handleExportData("Users")}
            disabled={isLoading}
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0">
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
                <Button
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                  onClick={() => {
                    toast({title: "User Created", description: "New user account has been created successfully"});
                  }}
                  disabled={isLoading}
                >
                  Create User
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>User List</CardTitle>
            <div className="flex items-center gap-2">
              <Input 
                placeholder="Search users..." 
                className="w-64" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button 
                variant="outline" 
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 border-0"
                onClick={() => handleAction("Filter Users")}
                disabled={isLoading}
              >
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
              {users.filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((user) => (
                <TableRow key={user.id} className="hover:bg-taxi-light-gray/30">
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === "driver" ? "default" : "secondary"}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      className={user.status === "active" ? "bg-green-500 text-white" : "bg-red-500 text-white"}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.totalRides}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-blue-500 text-white hover:bg-blue-600 border-0"
                        onClick={() => handleViewUser(user)}
                        disabled={isLoading}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-green-500 text-white hover:bg-green-600 border-0"
                        onClick={() => handleEditUser(user)}
                        disabled={isLoading}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-red-500 text-white hover:bg-red-600 border-0"
                        onClick={() => handleBanUser(user)}
                        disabled={isLoading}
                      >
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

  const renderTransactionManager = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-taxi-dark">Transaction Management</h2>
          <p className="text-taxi-gray">Monitor payments, payouts, and financial transactions</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 border-0"
            onClick={() => handleExportData("Transactions")}
            disabled={isLoading}
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
            onClick={handleManualTransaction}
            disabled={isLoading}
          >
            <Plus className="w-4 h-4 mr-2" />
            Manual Transaction
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Today's Revenue</p>
                <p className="text-xl font-bold">$42,847</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100">Pending Payouts</p>
                <p className="text-xl font-bold">$8,750</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100">Failed Payments</p>
                <p className="text-xl font-bold">$1,230</p>
              </div>
              <XCircle className="w-8 h-8 text-red-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Wallet Balance</p>
                <p className="text-xl font-bold">$125,450</p>
              </div>
              <Wallet className="w-8 h-8 text-purple-200" />
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
                <SelectValue placeholder="Payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Methods</SelectItem>
                {paymentMethods.map((method) => (
                  <SelectItem key={method.id} value={method.id}>
                    {method.name}
                  </SelectItem>
                ))}
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
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => {
                const paymentMethod = paymentMethods.find(p => p.id === transaction.method);
                const PaymentIcon = paymentMethod?.icon || CreditCard;
                return (
                  <TableRow key={transaction.id} className="hover:bg-taxi-light-gray/30">
                    <TableCell className="font-medium">#{transaction.id.toString().padStart(6, '0')}</TableCell>
                    <TableCell>{transaction.user}</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {transaction.type.replace('_', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{transaction.amount}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 ${paymentMethod?.color || 'bg-gray-500'} rounded flex items-center justify-center`}>
                          <PaymentIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{paymentMethod?.name || transaction.method}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        className={
                          transaction.status === "completed" ? "bg-green-500 text-white" : 
                          transaction.status === "pending" ? "bg-yellow-500 text-white" : 
                          "bg-red-500 text-white"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-blue-500 text-white hover:bg-blue-600 border-0"
                          onClick={() => handleViewTransaction(transaction)}
                          disabled={isLoading}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-green-500 text-white hover:bg-green-600 border-0"
                          onClick={() => handleDownloadReceipt(transaction)}
                          disabled={isLoading}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "users", label: "Users Manager", icon: Users },
    { id: "drivers", label: "Drivers Manager", icon: UserCheck },
    { id: "rides", label: "Rides Manager", icon: Car },
    { id: "transactions", label: "Transaction Manager", icon: DollarSign },
    { id: "payments", label: "Payment Methods", icon: CreditCard },
    { id: "wallet", label: "Wallet Manager", icon: Wallet },
    { id: "reports", label: "Reports & Analytics", icon: FileText },
    { id: "chat", label: "Chat Module", icon: MessageCircle },
    { id: "zones", label: "Special Zones", icon: MapPinOff },
    { id: "features", label: "Advanced Features", icon: Settings },
  ];

  const renderDriversManager = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-taxi-dark">Drivers Management</h2>
          <p className="text-taxi-gray">Manage driver registrations, shifts, and performance</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 border-0"
            onClick={() => handleExportData("Drivers")}
            disabled={isLoading}
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
            onClick={handleAddDriver}
            disabled={isLoading}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Driver
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Online Drivers</p>
                <p className="text-xl font-bold">847</p>
              </div>
              <Users className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Day Shift</p>
                <p className="text-xl font-bold">523</p>
              </div>
              <Sun className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Night Shift</p>
                <p className="text-xl font-bold">324</p>
              </div>
              <Moon className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100">Pending Approval</p>
                <p className="text-xl font-bold">23</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
        <CardHeader>
          <CardTitle>Driver List</CardTitle>
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
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id} className="hover:bg-taxi-light-gray/30">
                  <TableCell>
                    <div>
                      <p className="font-medium">{driver.name}</p>
                      <p className="text-sm text-taxi-gray">{driver.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{driver.vehicle}</TableCell>
                  <TableCell>
                    <Badge className={driver.status === "online" ? "bg-green-500 text-white" : driver.status === "busy" ? "bg-yellow-500 text-white" : "bg-gray-500 text-white"}>
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
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-blue-500 text-white hover:bg-blue-600 border-0"
                        onClick={() => toast({title: "Driver Details", description: `Viewing ${driver.name}'s profile`})}
                        disabled={isLoading}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-green-500 text-white hover:bg-green-600 border-0"
                        onClick={() => toast({title: "Driver Communication", description: `Opening chat with ${driver.name}`})}
                        disabled={isLoading}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-red-500 text-white hover:bg-red-600 border-0"
                        onClick={() => toast({title: "Driver Suspended", description: `${driver.name} has been suspended`})}
                        disabled={isLoading}
                      >
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

  const renderAdvancedFeatures = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-taxi-dark">Advanced Features</h2>
        <p className="text-taxi-gray">Configure special ride options and accessibility features</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0"
              onClick={() => toast({title: "Accessibility Settings", description: "Accessibility features updated successfully"})}
              disabled={isLoading}
            >
              Save Settings
            </Button>
          </CardContent>
        </Card>

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
            <Button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
              onClick={() => toast({title: "Preferences Updated", description: "Ride preferences saved successfully"})}
              disabled={isLoading}
            >
              Update Preferences
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="w-5 h-5 mr-2 text-primary" />
              Corporate Features
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
                <p className="font-medium">Bulk Booking</p>
                <p className="text-sm text-taxi-gray">Multiple rides at once</p>
              </div>
              <Switch />
            </div>
            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0"
              onClick={() => toast({title: "Corporate Settings", description: "Corporate features configured successfully"})}
              disabled={isLoading}
            >
              Configure Corporate
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeModule) {
      case "dashboard":
        return renderDashboard();
      case "users":
        return renderUsersManager();
      case "drivers":
        return renderDriversManager();
      case "transactions":
        return renderTransactionManager();
      case "payments":
        return renderPaymentMethods();
      case "features":
        return renderAdvancedFeatures();
      case "wallet":
        return (
          <div className="text-center py-12">
            <Wallet className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
            <h3 className="text-lg font-medium text-taxi-dark mb-2">Wallet Manager</h3>
            <p className="text-taxi-gray mb-6">Manage user wallets, top-ups, and balance transfers</p>
            <Button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0"
              onClick={() => toast({title: "Wallet Manager", description: "Opening comprehensive wallet management system"})}
              disabled={isLoading}
            >
              <Wallet className="w-4 h-4 mr-2" />
              Manage Wallets
            </Button>
          </div>
        );
      case "reports":
        return (
          <div className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
            <h3 className="text-lg font-medium text-taxi-dark mb-2">Reports & Analytics</h3>
            <p className="text-taxi-gray mb-6">Comprehensive reporting and business analytics dashboard</p>
            <Button
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0"
              onClick={handleGenerateReport}
              disabled={isLoading}
            >
              <FileText className="w-4 h-4 mr-2" />
              Generate Reports
            </Button>
          </div>
        );
      case "chat":
        return (
          <div className="text-center py-12">
            <MessageCircle className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
            <h3 className="text-lg font-medium text-taxi-dark mb-2">Chat Module</h3>
            <p className="text-taxi-gray mb-6">Customer support chat system and communication tools</p>
            <Button
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
              onClick={() => toast({title: "Chat System", description: "Customer support chat interface loaded"})}
              disabled={isLoading}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Open Chat System
            </Button>
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
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
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
                      aria-current={activeModule === item.id ? "page" : undefined}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left transition-all duration-200 ${
                        activeModule === item.id
                          ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                          : "text-taxi-dark hover:bg-gradient-to-r hover:from-taxi-light-gray/50 hover:to-taxi-light-gray/70"
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
                  aria-label="Sign out of admin panel"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left text-destructive hover:bg-gradient-to-r hover:from-destructive/10 hover:to-destructive/20 transition-all duration-200"
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
          <div className="bg-white/90 backdrop-blur-md border-b border-gray-200">
            <div className="flex items-center justify-between p-4">
              <h1 className="text-xl font-bold text-taxi-dark">BAMBI Admin</h1>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 border-0"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
            
            {/* User Info on Mobile */}
            <div className="px-4 pb-4">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-taxi-dark">{user?.name}</p>
                    <p className="text-xs text-taxi-gray">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Selector */}
            <div className="px-4 pb-4">
              <Select value={activeModule} onValueChange={setActiveModule}>
                <SelectTrigger className="w-full">
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
        </div>

        {/* Main Content */}
        <div className="lg:pl-64 flex flex-col flex-1 min-h-screen">
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {renderContent()}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* User Details/Edit Dialog */}
      <Dialog open={showUserDialog} onOpenChange={setShowUserDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedUser ? `User: ${selectedUser.name}` : "User Details"}</DialogTitle>
            <DialogDescription>View and edit user information</DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4 pt-4">
              <div>
                <Label>Name</Label>
                <Input defaultValue={selectedUser.name} />
              </div>
              <div>
                <Label>Email</Label>
                <Input defaultValue={selectedUser.email} />
              </div>
              <div>
                <Label>Phone</Label>
                <Input defaultValue={selectedUser.phone} />
              </div>
              <div>
                <Label>Status</Label>
                <Select defaultValue={selectedUser.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                    <SelectItem value="banned">Banned</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                  onClick={() => {
                    toast({title: "User Updated", description: `${selectedUser.name}'s information has been updated`});
                    setShowUserDialog(false);
                  }}
                  disabled={isLoading}
                >
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowUserDialog(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Driver Dialog */}
      <Dialog open={showDriverDialog} onOpenChange={setShowDriverDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Driver</DialogTitle>
            <DialogDescription>Register a new driver to the platform</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>First Name</Label>
                <Input placeholder="John" />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input placeholder="Doe" />
              </div>
            </div>
            <div>
              <Label>Email</Label>
              <Input placeholder="john.driver@example.com" />
            </div>
            <div>
              <Label>Phone</Label>
              <Input placeholder="+1 (555) 123-4567" />
            </div>
            <div>
              <Label>License Number</Label>
              <Input placeholder="DL123456789" />
            </div>
            <div>
              <Label>Vehicle Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="hatchback">Hatchback</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                onClick={() => {
                  toast({title: "Driver Added", description: "New driver has been registered successfully"});
                  setShowDriverDialog(false);
                }}
                disabled={isLoading}
              >
                Register Driver
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowDriverDialog(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Manual Transaction Dialog */}
      <Dialog open={showTransactionDialog} onOpenChange={setShowTransactionDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Manual Transaction</DialogTitle>
            <DialogDescription>Create a manual transaction entry</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <Label>User</Label>
              <Input placeholder="Enter user email or name" />
            </div>
            <div>
              <Label>Transaction Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select transaction type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ride_payment">Ride Payment</SelectItem>
                  <SelectItem value="driver_payout">Driver Payout</SelectItem>
                  <SelectItem value="wallet_topup">Wallet Top-up</SelectItem>
                  <SelectItem value="refund">Refund</SelectItem>
                  <SelectItem value="bonus">Bonus</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Amount</Label>
              <Input placeholder="$0.00" type="number" />
            </div>
            <div>
              <Label>Payment Method</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  {paymentMethods.map((method) => (
                    <SelectItem key={method.id} value={method.id}>
                      {method.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Description</Label>
              <Input placeholder="Transaction description" />
            </div>
            <div className="flex gap-2">
              <Button
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                onClick={() => {
                  toast({title: "Transaction Created", description: "Manual transaction has been processed successfully"});
                  setShowTransactionDialog(false);
                }}
                disabled={isLoading}
              >
                Process Transaction
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowTransactionDialog(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Red Zone Configuration Dialog */}
      <Dialog open={showZoneDialog} onOpenChange={setShowZoneDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Red Zone Configuration</DialogTitle>
            <DialogDescription>Set up restricted areas and special pricing</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <Label>Zone Name</Label>
              <Input placeholder="Downtown Red Zone" />
            </div>
            <div>
              <Label>Zone Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select zone type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restricted">Restricted Zone</SelectItem>
                  <SelectItem value="premium">Premium Zone</SelectItem>
                  <SelectItem value="priority">Priority Zone</SelectItem>
                  <SelectItem value="airport">Airport Zone</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Price Multiplier</Label>
              <Input placeholder="2.0" type="number" step="0.1" />
            </div>
            <div>
              <Label>Active Hours</Label>
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Start time" type="time" />
                <Input placeholder="End time" type="time" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="zone-active" defaultChecked />
              <Label htmlFor="zone-active">Zone Active</Label>
            </div>
            <div className="flex gap-2">
              <Button
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0"
                onClick={() => {
                  toast({title: "Red Zone Created", description: "Restricted zone has been configured successfully"});
                  setShowZoneDialog(false);
                }}
                disabled={isLoading}
              >
                Create Zone
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowZoneDialog(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Price Update Dialog */}
      <Dialog open={showPriceDialog} onOpenChange={setShowPriceDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Price Configuration</DialogTitle>
            <DialogDescription>Update base rates and surge pricing</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <Label>Base Rate (per km)</Label>
              <Input placeholder="$1.50" type="number" step="0.01" />
            </div>
            <div>
              <Label>Base Time Rate (per minute)</Label>
              <Input placeholder="$0.25" type="number" step="0.01" />
            </div>
            <div>
              <Label>Surge Multiplier</Label>
              <Input placeholder="1.5" type="number" step="0.1" />
            </div>
            <div>
              <Label>Peak Hours Multiplier</Label>
              <Input placeholder="1.3" type="number" step="0.1" />
            </div>
            <div>
              <Label>Night Time Multiplier</Label>
              <Input placeholder="1.2" type="number" step="0.1" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="dynamic-pricing" defaultChecked />
              <Label htmlFor="dynamic-pricing">Enable Dynamic Pricing</Label>
            </div>
            <div className="flex gap-2">
              <Button
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                onClick={() => {
                  toast({title: "Prices Updated", description: "Pricing configuration has been saved successfully"});
                  setShowPriceDialog(false);
                }}
                disabled={isLoading}
              >
                Update Prices
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPriceDialog(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
