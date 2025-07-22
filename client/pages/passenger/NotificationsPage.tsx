import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Car,
  DollarSign,
  Gift,
  MapPin,
  MessageCircle,
  Settings,
  Star,
  User,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Heart,
  Trash2,
  CheckCheck,
  Filter,
  Volume,
  VolumeX,
  Smartphone,
  Mail
} from "lucide-react";

interface Notification {
  id: string;
  type: 'booking' | 'driver' | 'promotion' | 'payment' | 'system' | 'safety';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  actionRequired?: boolean;
  icon: React.ElementType;
  color: string;
}

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "booking",
      title: "Ride Confirmed",
      message: "Your ride with John Smith is confirmed. Driver will arrive in 3 minutes.",
      timestamp: "2 minutes ago",
      read: false,
      priority: "high",
      actionRequired: true,
      icon: Car,
      color: "text-primary"
    },
    {
      id: "2", 
      type: "driver",
      title: "Driver Arrived",
      message: "John Smith has arrived at your pickup location. Vehicle: Honda Civic (ABC-1234)",
      timestamp: "5 minutes ago",
      read: false,
      priority: "high", 
      actionRequired: true,
      icon: MapPin,
      color: "text-success"
    },
    {
      id: "3",
      type: "promotion",
      title: "50% Off Your Next Ride!",
      message: "Limited time offer! Use code SAVE50 for 50% off your next 3 rides.",
      timestamp: "1 hour ago",
      read: true,
      priority: "medium",
      icon: Gift,
      color: "text-warning"
    },
    {
      id: "4",
      type: "payment",
      title: "Payment Successful",
      message: "Payment of $24.50 for trip TR001234 has been processed successfully.",
      timestamp: "2 hours ago",
      read: true,
      priority: "low",
      icon: DollarSign,
      color: "text-accent"
    },
    {
      id: "5",
      type: "system",
      title: "App Update Available",
      message: "New features and improvements are available. Update now for the best experience.",
      timestamp: "1 day ago",
      read: false,
      priority: "medium",
      icon: Smartphone,
      color: "text-taxi-purple"
    },
    {
      id: "6",
      type: "safety",
      title: "Safety Check Complete",
      message: "Your emergency contact has been notified that you've reached your destination safely.",
      timestamp: "2 days ago",
      read: true,
      priority: "low",
      icon: CheckCircle,
      color: "text-success"
    }
  ]);

  const [notificationSettings, setNotificationSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    bookingUpdates: true,
    driverMessages: true,
    promotions: true,
    paymentAlerts: true,
    safetyAlerts: true,
    soundEnabled: true,
    vibrationEnabled: true
  });

  const getNotificationsByType = (type: string) => {
    if (type === "all") return notifications;
    return notifications.filter(n => n.type === type);
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive';
      case 'medium': return 'bg-warning';
      case 'low': return 'bg-accent';
      default: return 'bg-gray-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'booking': return 'bg-primary/10 text-primary';
      case 'driver': return 'bg-success/10 text-success';
      case 'promotion': return 'bg-warning/10 text-warning';
      case 'payment': return 'bg-accent/10 text-accent';
      case 'system': return 'bg-taxi-purple/10 text-taxi-purple';
      case 'safety': return 'bg-success/10 text-success';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray pb-20">
      <div className="px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-taxi-dark">Notifications</h1>
            <p className="text-taxi-gray">
              {unreadCount > 0 ? `${unreadCount} unread messages` : "You're all caught up!"}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                <CheckCheck className="w-4 h-4 mr-1" />
                Mark all read
              </Button>
            )}
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="all" className="text-xs">
              All
              {unreadCount > 0 && (
                <Badge className="ml-1 h-5 w-5 text-xs p-0 flex items-center justify-center bg-destructive">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="booking" className="text-xs">Rides</TabsTrigger>
            <TabsTrigger value="promotion" className="text-xs">Offers</TabsTrigger>
            <TabsTrigger value="settings" className="text-xs">Settings</TabsTrigger>
          </TabsList>

          {/* All Notifications */}
          <TabsContent value="all" className="space-y-4">
            {getNotificationsByType("all").map((notification) => {
              const Icon = notification.icon;
              return (
                <Card 
                  key={notification.id} 
                  className={`mobile-card cursor-pointer transition-all ${
                    !notification.read ? 'border-l-4 border-l-primary bg-primary/5' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center ${notification.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`font-semibold ${!notification.read ? 'text-taxi-dark' : 'text-taxi-gray'}`}>
                            {notification.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <Badge className={getTypeColor(notification.type)}>
                              {notification.type}
                            </Badge>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                          </div>
                        </div>
                        
                        <p className={`text-sm ${!notification.read ? 'text-taxi-gray' : 'text-taxi-gray/70'} mb-2`}>
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-taxi-gray">{notification.timestamp}</span>
                            {notification.priority !== 'low' && (
                              <div className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`}></div>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            {notification.actionRequired && (
                              <Badge className="bg-destructive text-destructive-foreground text-xs">
                                Action Required
                              </Badge>
                            )}
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteNotification(notification.id);
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          {/* Booking Notifications */}
          <TabsContent value="booking" className="space-y-4">
            {getNotificationsByType("booking").concat(getNotificationsByType("driver")).map((notification) => {
              const Icon = notification.icon;
              return (
                <Card key={notification.id} className="mobile-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-6 h-6 ${notification.color}`} />
                      <div className="flex-1">
                        <h3 className="font-semibold text-taxi-dark">{notification.title}</h3>
                        <p className="text-sm text-taxi-gray">{notification.message}</p>
                        <span className="text-xs text-taxi-gray">{notification.timestamp}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          {/* Promotional Notifications */}
          <TabsContent value="promotion" className="space-y-4">
            {getNotificationsByType("promotion").map((notification) => {
              const Icon = notification.icon;
              return (
                <Card key={notification.id} className="mobile-card overflow-hidden">
                  <div className="bg-gradient-to-r from-warning to-accent p-4 text-white">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">{notification.title}</h3>
                        <p className="text-sm opacity-90">{notification.message}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-taxi-gray">{notification.timestamp}</span>
                      <Button size="sm" className="btn-primary">
                        Use Offer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="mobile-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Customize how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Delivery Methods */}
                <div className="space-y-4">
                  <h4 className="font-medium text-taxi-dark">Delivery Methods</h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-taxi-gray" />
                      <div>
                        <Label htmlFor="push">Push Notifications</Label>
                        <p className="text-sm text-taxi-gray">Instant alerts on your device</p>
                      </div>
                    </div>
                    <Switch 
                      id="push"
                      checked={notificationSettings.pushNotifications}
                      onCheckedChange={(checked) => 
                        setNotificationSettings(prev => ({ ...prev, pushNotifications: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-taxi-gray" />
                      <div>
                        <Label htmlFor="email">Email Notifications</Label>
                        <p className="text-sm text-taxi-gray">Receive updates via email</p>
                      </div>
                    </div>
                    <Switch 
                      id="email"
                      checked={notificationSettings.emailNotifications}
                      onCheckedChange={(checked) => 
                        setNotificationSettings(prev => ({ ...prev, emailNotifications: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-taxi-gray" />
                      <div>
                        <Label htmlFor="sms">SMS Notifications</Label>
                        <p className="text-sm text-taxi-gray">Text message alerts</p>
                      </div>
                    </div>
                    <Switch 
                      id="sms"
                      checked={notificationSettings.smsNotifications}
                      onCheckedChange={(checked) => 
                        setNotificationSettings(prev => ({ ...prev, smsNotifications: checked }))
                      }
                    />
                  </div>
                </div>

                {/* Notification Types */}
                <div className="space-y-4">
                  <h4 className="font-medium text-taxi-dark">Notification Types</h4>
                  
                  <div className="space-y-3">
                    {[
                      { key: 'bookingUpdates', label: 'Booking Updates', desc: 'Ride confirmations, driver updates' },
                      { key: 'driverMessages', label: 'Driver Messages', desc: 'Messages from your driver' },
                      { key: 'promotions', label: 'Promotions & Offers', desc: 'Special deals and discounts' },
                      { key: 'paymentAlerts', label: 'Payment Alerts', desc: 'Payment confirmations and receipts' },
                      { key: 'safetyAlerts', label: 'Safety Alerts', desc: 'Emergency and safety notifications' }
                    ].map((setting) => (
                      <div key={setting.key} className="flex items-center justify-between">
                        <div>
                          <Label htmlFor={setting.key}>{setting.label}</Label>
                          <p className="text-sm text-taxi-gray">{setting.desc}</p>
                        </div>
                        <Switch 
                          id={setting.key}
                          checked={notificationSettings[setting.key as keyof typeof notificationSettings] as boolean}
                          onCheckedChange={(checked) => 
                            setNotificationSettings(prev => ({ ...prev, [setting.key]: checked }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sound & Vibration */}
                <div className="space-y-4">
                  <h4 className="font-medium text-taxi-dark">Sound & Vibration</h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {notificationSettings.soundEnabled ? (
                        <Volume className="w-5 h-5 text-taxi-gray" />
                      ) : (
                        <VolumeX className="w-5 h-5 text-taxi-gray" />
                      )}
                      <div>
                        <Label htmlFor="sound">Sound</Label>
                        <p className="text-sm text-taxi-gray">Play sound for notifications</p>
                      </div>
                    </div>
                    <Switch 
                      id="sound"
                      checked={notificationSettings.soundEnabled}
                      onCheckedChange={(checked) => 
                        setNotificationSettings(prev => ({ ...prev, soundEnabled: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-taxi-gray" />
                      <div>
                        <Label htmlFor="vibration">Vibration</Label>
                        <p className="text-sm text-taxi-gray">Vibrate for notifications</p>
                      </div>
                    </div>
                    <Switch 
                      id="vibration"
                      checked={notificationSettings.vibrationEnabled}
                      onCheckedChange={(checked) => 
                        setNotificationSettings(prev => ({ ...prev, vibrationEnabled: checked }))
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Empty State */}
        {getNotificationsByType(activeTab).length === 0 && activeTab !== "settings" && (
          <Card className="mobile-card text-center py-12">
            <CardContent>
              <Bell className="w-16 h-16 text-taxi-gray mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-taxi-dark mb-2">No notifications</h3>
              <p className="text-taxi-gray">
                You're all caught up! New notifications will appear here.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
