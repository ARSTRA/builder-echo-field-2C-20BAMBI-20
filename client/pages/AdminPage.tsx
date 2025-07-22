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
  const [selectedDriver, setSelectedDriver] = useState<any>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [showUserDialog, setShowUserDialog] = useState(false);
  const [showDriverDialog, setShowDriverDialog] = useState(false);
  const [showDriverViewDialog, setShowDriverViewDialog] = useState(false);
  const [showDriverChatDialog, setShowDriverChatDialog] = useState(false);
  const [showTransactionDialog, setShowTransactionDialog] = useState(false);
  const [showTransactionViewDialog, setShowTransactionViewDialog] = useState(false);
  const [showPaymentConfigDialog, setShowPaymentConfigDialog] = useState(false);
  const [showPaymentStatsDialog, setShowPaymentStatsDialog] = useState(false);
  const [showWalletManagerDialog, setShowWalletManagerDialog] = useState(false);
  const [showZoneDialog, setShowZoneDialog] = useState(false);
  const [showPriceDialog, setShowPriceDialog] = useState(false);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [activeChatUser, setActiveChatUser] = useState<any>(null);
  const [newMessage, setNewMessage] = useState("");
  const [chatUsers, setChatUsers] = useState<any[]>([
    { id: 1, name: "John Doe", avatar: "JD", lastMessage: "Need help with my ride", time: "2 min ago", unread: 3, status: "online" },
    { id: 2, name: "Sarah Smith", avatar: "SS", lastMessage: "Payment issue", time: "5 min ago", unread: 1, status: "online" },
    { id: 3, name: "Mike Johnson", avatar: "MJ", lastMessage: "Thanks for the help!", time: "10 min ago", unread: 0, status: "offline" },
    { id: 4, name: "Emma Brown", avatar: "EB", lastMessage: "Driver was late", time: "15 min ago", unread: 2, status: "online" },
    { id: 5, name: "David Wilson", avatar: "DW", lastMessage: "Great service!", time: "1 hour ago", unread: 0, status: "away" },
  ]);

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
    setSelectedTransaction(transaction);
    setShowTransactionViewDialog(true);
    toast({
      title: "Transaction Details",
      description: `Viewing transaction #${transaction.id} - ${transaction.amount}`,
    });
  };

  const handleViewDriver = (driver: any) => {
    setSelectedDriver(driver);
    setShowDriverViewDialog(true);
    toast({
      title: "Driver Profile",
      description: `Viewing ${driver.name}'s detailed profile`,
    });
  };

  const handleChatWithDriver = (driver: any) => {
    setSelectedDriver(driver);
    setShowDriverChatDialog(true);
    toast({
      title: "Driver Communication",
      description: `Opening chat interface with ${driver.name}`,
    });
  };

  const handleSuspendDriver = async (driver: any) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Driver Suspended",
        description: `${driver.name} has been suspended from the platform`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfigurePaymentMethod = (method: any) => {
    setSelectedPaymentMethod(method);
    setShowPaymentConfigDialog(true);
    toast({
      title: "Payment Configuration",
      description: `Configuring ${method.name} settings`,
    });
  };

  const handleViewPaymentStats = (method: any) => {
    setSelectedPaymentMethod(method);
    setShowPaymentStatsDialog(true);
    toast({
      title: "Payment Statistics",
      description: `Viewing ${method.name} analytics and statistics`,
    });
  };

  const handleOpenWalletManager = () => {
    setShowWalletManagerDialog(true);
    toast({
      title: "Wallet Manager",
      description: "Opening comprehensive wallet management system",
    });
  };

  const handleSelectChatUser = (user: any) => {
    setActiveChatUser(user);
    // Mark messages as read
    setChatUsers(prev => prev.map(u => u.id === user.id ? {...u, unread: 0} : u));

    // Load mock conversation history
    const mockMessages = [
      { id: 1, sender: "user", message: user.lastMessage, time: "10:30 AM", type: "text" },
      { id: 2, sender: "admin", message: "Hello! I'm here to help you. What seems to be the issue?", time: "10:32 AM", type: "text" },
      { id: 3, sender: "user", message: "I'm having trouble with my recent ride payment", time: "10:33 AM", type: "text" },
      { id: 4, sender: "admin", message: "I can help you with that. Let me check your account details.", time: "10:34 AM", type: "text" },
    ];
    setChatMessages(mockMessages);

    toast({
      title: "Chat Opened",
      description: `Now chatting with ${user.name}`,
    });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeChatUser) return;

    const newMsg = {
      id: chatMessages.length + 1,
      sender: "admin",
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "text"
    };

    setChatMessages(prev => [...prev, newMsg]);
    setNewMessage("");

    // Update user's last message
    setChatUsers(prev => prev.map(u =>
      u.id === activeChatUser.id
        ? {...u, lastMessage: newMessage, time: "now"}
        : u
    ));

    toast({
      title: "Message Sent",
      description: `Message sent to ${activeChatUser.name}`,
    });
  };

  const handleQuickResponse = (response: string) => {
    setNewMessage(response);
    setTimeout(() => handleSendMessage(), 100);
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
                    onClick={() => handleConfigurePaymentMethod(method)}
                    disabled={isLoading}
                  >
                    <Settings className="w-4 h-4 mr-1" />
                    Configure
                  </Button>
                  <Button
                    size="sm"
                    className={`${method.color} text-white border-0 hover:opacity-90`}
                    onClick={() => handleViewPaymentStats(method)}
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
                onClick={() => {
                  toast({title: "Filter Applied", description: "User filter has been applied"});
                }}
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
                        onClick={() => handleViewDriver(driver)}
                        disabled={isLoading}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-green-500 text-white hover:bg-green-600 border-0"
                        onClick={() => handleChatWithDriver(driver)}
                        disabled={isLoading}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-red-500 text-white hover:bg-red-600 border-0"
                        onClick={() => handleSuspendDriver(driver)}
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
              onClick={handleOpenWalletManager}
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
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-taxi-dark">Customer Support Chat</h2>
                <p className="text-taxi-gray">Real-time customer support and communication</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 border-0"
                  onClick={() => toast({title: "Chat Settings", description: "Opening chat configuration"})}
                  disabled={isLoading}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                  onClick={() => toast({title: "New Chat", description: "Starting new customer conversation"})}
                  disabled={isLoading}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Chat
                </Button>
              </div>
            </div>

            {/* Chat Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Active Chats</p>
                      <p className="text-xl font-bold">12</p>
                    </div>
                    <MessageCircle className="w-8 h-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Waiting</p>
                      <p className="text-xl font-bold">3</p>
                    </div>
                    <Clock className="w-8 h-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Resolved Today</p>
                      <p className="text-xl font-bold">47</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100">Avg Response</p>
                      <p className="text-xl font-bold">2.3m</p>
                    </div>
                    <Timer className="w-8 h-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Chat Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
              {/* Chat Users List */}
              <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Customer Chats</span>
                    <Badge className="bg-primary text-primary-foreground">
                      {chatUsers.reduce((acc, user) => acc + user.unread, 0)} unread
                    </Badge>
                  </CardTitle>
                  <Input placeholder="Search conversations..." className="mt-2" />
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-80 overflow-y-auto">
                    {chatUsers.map((user) => (
                      <div
                        key={user.id}
                        onClick={() => handleSelectChatUser(user)}
                        className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                          activeChatUser?.id === user.id ? "bg-primary/10 border-l-4 border-l-primary" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-medium">
                              {user.avatar}
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                              user.status === "online" ? "bg-green-500" :
                              user.status === "away" ? "bg-yellow-500" : "bg-gray-400"
                            }`}></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-taxi-dark truncate">{user.name}</p>
                              <span className="text-xs text-taxi-gray">{user.time}</span>
                            </div>
                            <p className="text-sm text-taxi-gray truncate">{user.lastMessage}</p>
                          </div>
                          {user.unread > 0 && (
                            <Badge className="bg-primary text-primary-foreground">
                              {user.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Chat Messages Area */}
              <Card className="lg:col-span-2 shadow-xl bg-white/90 backdrop-blur-md border-0">
                {activeChatUser ? (
                  <>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-medium">
                              {activeChatUser.avatar}
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                              activeChatUser.status === "online" ? "bg-green-500" :
                              activeChatUser.status === "away" ? "bg-yellow-500" : "bg-gray-400"
                            }`}></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-taxi-dark">{activeChatUser.name}</h3>
                            <p className="text-sm text-taxi-gray capitalize">{activeChatUser.status}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col h-80">
                      {/* Messages */}
                      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                        {chatMessages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "admin" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-xs px-4 py-2 rounded-lg ${
                                message.sender === "admin"
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-gray-100 text-taxi-dark"
                              }`}
                            >
                              <p className="text-sm">{message.message}</p>
                              <span className="text-xs opacity-75">{message.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quick Responses */}
                      <div className="flex gap-2 mb-3 flex-wrap">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuickResponse("Thank you for contacting us! How can I help you today?")}
                          disabled={isLoading}
                        >
                          Greeting
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuickResponse("I understand your concern. Let me look into this for you.")}
                          disabled={isLoading}
                        >
                          Understanding
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuickResponse("Your issue has been resolved. Is there anything else I can help you with?")}
                          disabled={isLoading}
                        >
                          Resolution
                        </Button>
                      </div>

                      {/* Message Input */}
                      <div className="flex gap-2">
                        <Input
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                          className="flex-1"
                        />
                        <Button
                          onClick={handleSendMessage}
                          disabled={!newMessage.trim() || isLoading}
                          className="bg-primary hover:bg-primary/90"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <CardContent className="flex flex-col items-center justify-center h-full text-center">
                    <MessageCircle className="w-16 h-16 text-taxi-gray mb-4" />
                    <h3 className="text-lg font-medium text-taxi-dark mb-2">Select a Chat</h3>
                    <p className="text-taxi-gray">Choose a customer from the left to start chatting</p>
                  </CardContent>
                )}
              </Card>
            </div>
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

      {/* Driver View Details Dialog */}
      <Dialog open={showDriverViewDialog} onOpenChange={setShowDriverViewDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedDriver ? `Driver Profile: ${selectedDriver.name}` : "Driver Details"}</DialogTitle>
            <DialogDescription>Complete driver information and performance metrics</DialogDescription>
          </DialogHeader>
          {selectedDriver && (
            <div className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold mb-3">Personal Information</h4>
                  <div className="space-y-2">
                    <p><span className="font-medium">Name:</span> {selectedDriver.name}</p>
                    <p><span className="font-medium">Email:</span> {selectedDriver.email}</p>
                    <p><span className="font-medium">Phone:</span> {selectedDriver.phone}</p>
                    <p><span className="font-medium">Status:</span>
                      <Badge className={`ml-2 ${selectedDriver.status === "online" ? "bg-green-500" : "bg-gray-500"}`}>
                        {selectedDriver.status}
                      </Badge>
                    </p>
                  </div>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-3">Performance Metrics</h4>
                  <div className="space-y-2">
                    <p><span className="font-medium">Rating:</span> ⭐ {selectedDriver.rating}/5.0</p>
                    <p><span className="font-medium">Total Rides:</span> {selectedDriver.totalRides}</p>
                    <p><span className="font-medium">Earnings:</span> {selectedDriver.earnings}</p>
                    <p><span className="font-medium">Shift:</span> {selectedDriver.shift}</p>
                  </div>
                </Card>
              </div>
              <Card className="p-4">
                <h4 className="font-semibold mb-3">Vehicle Information</h4>
                <p><span className="font-medium">Vehicle:</span> {selectedDriver.vehicle}</p>
                <p><span className="font-medium">License Plate:</span> ABC-123</p>
                <p><span className="font-medium">Insurance:</span> Valid until Dec 2024</p>
              </Card>
              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                  onClick={() => handleChatWithDriver(selectedDriver)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with Driver
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0"
                  onClick={() => {
                    toast({title: "Driver Location", description: "Opening live GPS tracking"});
                  }}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Track Location
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowDriverViewDialog(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Driver Chat Dialog */}
      <Dialog open={showDriverChatDialog} onOpenChange={setShowDriverChatDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedDriver ? `Chat with ${selectedDriver.name}` : "Driver Chat"}</DialogTitle>
            <DialogDescription>Real-time communication with driver</DialogDescription>
          </DialogHeader>
          {selectedDriver && (
            <div className="space-y-4 pt-4">
              <Card className="p-4 bg-gray-50">
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
                      <p className="text-sm">Hello {selectedDriver.name}, how are you doing today?</p>
                      <span className="text-xs opacity-75">Admin - 2:30 PM</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-green-500 text-white p-2 rounded-lg max-w-xs">
                      <p className="text-sm">Hi Admin! Everything is going well. Just finished a ride.</p>
                      <span className="text-xs opacity-75">{selectedDriver.name} - 2:32 PM</span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
                      <p className="text-sm">Great! Keep up the excellent work!</p>
                      <span className="text-xs opacity-75">Admin - 2:33 PM</span>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="flex gap-2">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast({title: "Quick Message", description: "Sent: 'Thanks for your hard work!'"})}
                >
                  Thanks!
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast({title: "Quick Message", description: "Sent: 'Please follow traffic rules.'"})}
                >
                  Safety Reminder
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast({title: "Quick Message", description: "Sent: 'Break time if needed.'"})}
                >
                  Break Time
                </Button>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowDriverChatDialog(false)}
              >
                Close Chat
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Transaction View Dialog */}
      <Dialog open={showTransactionViewDialog} onOpenChange={setShowTransactionViewDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedTransaction ? `Transaction #${selectedTransaction.id}` : "Transaction Details"}</DialogTitle>
            <DialogDescription>Complete transaction information and history</DialogDescription>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-4 pt-4">
              <Card className="p-4">
                <h4 className="font-semibold mb-3">Transaction Details</h4>
                <div className="space-y-2">
                  <p><span className="font-medium">ID:</span> #{selectedTransaction.id.toString().padStart(6, '0')}</p>
                  <p><span className="font-medium">User:</span> {selectedTransaction.user}</p>
                  <p><span className="font-medium">Type:</span> {selectedTransaction.type.replace('_', ' ')}</p>
                  <p><span className="font-medium">Amount:</span> {selectedTransaction.amount}</p>
                  <p><span className="font-medium">Method:</span> {selectedTransaction.method}</p>
                  <p><span className="font-medium">Status:</span>
                    <Badge className={`ml-2 ${selectedTransaction.status === "completed" ? "bg-green-500" : selectedTransaction.status === "pending" ? "bg-yellow-500" : "bg-red-500"}`}>
                      {selectedTransaction.status}
                    </Badge>
                  </p>
                  <p><span className="font-medium">Date:</span> {selectedTransaction.date}</p>
                  <p><span className="font-medium">Payment ID:</span> {selectedTransaction.paymentId}</p>
                </div>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold mb-3">Transaction Timeline</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Transaction Initiated</span>
                    <span className="text-gray-500">2:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Processed</span>
                    <span className="text-gray-500">2:31 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transaction Completed</span>
                    <span className="text-gray-500">2:32 PM</span>
                  </div>
                </div>
              </Card>
              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                  onClick={() => handleDownloadReceipt(selectedTransaction)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Receipt
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowTransactionViewDialog(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Payment Method Configuration Dialog */}
      <Dialog open={showPaymentConfigDialog} onOpenChange={setShowPaymentConfigDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedPaymentMethod ? `Configure ${selectedPaymentMethod.name}` : "Payment Configuration"}</DialogTitle>
            <DialogDescription>Set up payment method settings and preferences</DialogDescription>
          </DialogHeader>
          {selectedPaymentMethod && (
            <div className="space-y-4 pt-4">
              <Card className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${selectedPaymentMethod.color} rounded-lg flex items-center justify-center`}>
                    <selectedPaymentMethod.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{selectedPaymentMethod.name}</h4>
                    <p className="text-sm text-gray-600">{selectedPaymentMethod.description}</p>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable Payment Method</p>
                    <p className="text-sm text-gray-600">Allow users to pay with this method</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div>
                  <Label>Transaction Fee (%)</Label>
                  <Input placeholder="2.9" type="number" step="0.1" />
                </div>

                <div>
                  <Label>Minimum Amount</Label>
                  <Input placeholder="$1.00" />
                </div>

                <div>
                  <Label>Maximum Amount</Label>
                  <Input placeholder="$500.00" />
                </div>

                {selectedPaymentMethod.id === 'crypto' && (
                  <div>
                    <Label>Supported Cryptocurrencies</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <span className="text-sm">Bitcoin</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <span className="text-sm">Ethereum</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch />
                        <span className="text-sm">USDT</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                  onClick={() => {
                    toast({title: "Configuration Saved", description: `${selectedPaymentMethod.name} settings updated successfully`});
                    setShowPaymentConfigDialog(false);
                  }}
                >
                  Save Configuration
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowPaymentConfigDialog(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Payment Method Statistics Dialog */}
      <Dialog open={showPaymentStatsDialog} onOpenChange={setShowPaymentStatsDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedPaymentMethod ? `${selectedPaymentMethod.name} Statistics` : "Payment Statistics"}</DialogTitle>
            <DialogDescription>Analytics and performance metrics for payment method</DialogDescription>
          </DialogHeader>
          {selectedPaymentMethod && (
            <div className="space-y-6 pt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4 text-center">
                  <div className={`w-12 h-12 ${selectedPaymentMethod.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <selectedPaymentMethod.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold">$24,650</p>
                  <p className="text-sm text-gray-600">Total Volume</p>
                </Card>
                <Card className="p-4 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold">1,247</p>
                  <p className="text-sm text-gray-600">Transactions</p>
                </Card>
                <Card className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold">98.5%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </Card>
                <Card className="p-4 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold">2.3s</p>
                  <p className="text-sm text-gray-600">Avg Processing</p>
                </Card>
              </div>

              <Card className="p-4">
                <h4 className="font-semibold mb-3">Recent Transactions</h4>
                <div className="space-y-2">
                  {[
                    { amount: "$24.50", user: "John Doe", time: "2 min ago", status: "completed" },
                    { amount: "$18.75", user: "Alice Johnson", time: "5 min ago", status: "completed" },
                    { amount: "$31.20", user: "Bob Smith", time: "8 min ago", status: "completed" },
                  ].map((tx, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">{tx.amount}</p>
                        <p className="text-sm text-gray-600">{tx.user}</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-500 text-white">{tx.status}</Badge>
                        <p className="text-sm text-gray-600">{tx.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowPaymentStatsDialog(false)}
              >
                Close Statistics
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Wallet Manager Dialog */}
      <Dialog open={showWalletManagerDialog} onOpenChange={setShowWalletManagerDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Wallet Manager</DialogTitle>
            <DialogDescription>Comprehensive wallet management and balance operations</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <Wallet className="w-12 h-12 mx-auto mb-2" />
                <p className="text-2xl font-bold">$125,450</p>
                <p className="text-sm opacity-90">Total Platform Balance</p>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-r from-green-500 to-green-600 text-white">
                <Users className="w-12 h-12 mx-auto mb-2" />
                <p className="text-2xl font-bold">2,847</p>
                <p className="text-sm opacity-90">Active Wallets</p>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <ArrowUpDown className="w-12 h-12 mx-auto mb-2" />
                <p className="text-2xl font-bold">$8,750</p>
                <p className="text-sm opacity-90">Pending Transfers</p>
              </Card>
            </div>

            <Tabs defaultValue="user-wallets" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="user-wallets">User Wallets</TabsTrigger>
                <TabsTrigger value="driver-wallets">Driver Wallets</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
              </TabsList>

              <TabsContent value="user-wallets" className="space-y-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-3">User Wallet Balances</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Last Activity</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { name: "John Doe", balance: "$45.20", activity: "2 hours ago" },
                        { name: "Alice Johnson", balance: "$128.50", activity: "5 minutes ago" },
                        { name: "Bob Smith", balance: "$0.00", activity: "1 day ago" },
                      ].map((user, index) => (
                        <TableRow key={index}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell className="font-medium">{user.balance}</TableCell>
                          <TableCell>{user.activity}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Plus className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>

              <TabsContent value="driver-wallets" className="space-y-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-3">Driver Earnings</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Driver</TableHead>
                        <TableHead>Earnings</TableHead>
                        <TableHead>Pending Payout</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {drivers.map((driver) => (
                        <TableRow key={driver.id}>
                          <TableCell>{driver.name}</TableCell>
                          <TableCell className="font-medium">{driver.earnings}</TableCell>
                          <TableCell>$125.30</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                                Pay Out
                              </Button>
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>

              <TabsContent value="operations" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Manual Balance Adjustment</h4>
                    <div className="space-y-3">
                      <Input placeholder="User email or name" />
                      <Input placeholder="Amount" type="number" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Operation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="add">Add Balance</SelectItem>
                          <SelectItem value="deduct">Deduct Balance</SelectItem>
                          <SelectItem value="set">Set Balance</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Reason for adjustment" />
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                        Apply Adjustment
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Bulk Operations</h4>
                    <div className="space-y-3">
                      <Button className="w-full" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Export All Balances
                      </Button>
                      <Button className="w-full" variant="outline">
                        <HandCoins className="w-4 h-4 mr-2" />
                        Process All Payouts
                      </Button>
                      <Button className="w-full" variant="outline">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Sync Balances
                      </Button>
                      <Button className="w-full" variant="outline">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Freeze Suspicious Accounts
                      </Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowWalletManagerDialog(false)}
            >
              Close Wallet Manager
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
