import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  DollarSign,
  Users,
  Clock,
  MapPin,
  Star,
  TrendingUp,
  Navigation,
  Shield,
  Smartphone,
} from "lucide-react";

export default function DriverPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-taxi-light-blue via-white to-taxi-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-taxi-dark mb-4">
            Drive with BAMBI
          </h1>
          <p className="text-lg text-taxi-gray max-w-2xl mx-auto">
            Join thousands of drivers earning flexible income on their own
            schedule
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Driver Benefits */}
          <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Earning Potential
              </CardTitle>
              <CardDescription>
                Maximize your income with flexible driving opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">$25/hr</div>
                  <div className="text-sm text-taxi-gray">Average Hourly</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent">$1,200</div>
                  <div className="text-sm text-taxi-gray">Weekly Potential</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  <span className="text-taxi-dark">
                    Drive on your own schedule
                  </span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-primary mr-3" />
                  <span className="text-taxi-dark">Keep 85% of every fare</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  <span className="text-taxi-dark">
                    Insurance coverage included
                  </span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-5 h-5 text-primary mr-3" />
                  <span className="text-taxi-dark">Easy-to-use driver app</span>
                </div>
              </div>

              <Button className="w-full btn-primary h-12 text-lg">
                <Car className="w-5 h-5 mr-2" />
                Start Driving Today
              </Button>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="shadow-xl bg-white/90 backdrop-blur-md border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-accent" />
                Driver Requirements
              </CardTitle>
              <CardDescription>
                Simple requirements to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <span className="text-taxi-dark">Valid driver's license</span>
                  <Badge
                    variant="secondary"
                    className="bg-success text-success-foreground"
                  >
                    Required
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <span className="text-taxi-dark">Vehicle insurance</span>
                  <Badge
                    variant="secondary"
                    className="bg-success text-success-foreground"
                  >
                    Required
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <span className="text-taxi-dark">Background check</span>
                  <Badge
                    variant="secondary"
                    className="bg-success text-success-foreground"
                  >
                    Required
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                  <span className="text-taxi-dark">Vehicle inspection</span>
                  <Badge
                    variant="secondary"
                    className="bg-warning text-warning-foreground"
                  >
                    Optional
                  </Badge>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-taxi-dark mb-2">
                  Vehicle Requirements:
                </h4>
                <ul className="text-sm text-taxi-gray space-y-1">
                  <li>• 2010 or newer model year</li>
                  <li>• 4-door vehicle</li>
                  <li>• Good mechanical condition</li>
                  <li>• Clean interior and exterior</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-lg bg-white/80 backdrop-blur-sm border-0 text-center">
            <CardContent className="p-6">
              <Navigation className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-taxi-dark mb-2">
                Smart Navigation
              </h3>
              <p className="text-taxi-gray text-sm">
                Built-in GPS with traffic optimization and route suggestions
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-white/80 backdrop-blur-sm border-0 text-center">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-taxi-dark mb-2">
                Driver Community
              </h3>
              <p className="text-taxi-gray text-sm">
                Connect with other drivers and access 24/7 support
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-white/80 backdrop-blur-sm border-0 text-center">
            <CardContent className="p-6">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-taxi-dark mb-2">
                Earn Bonuses
              </h3>
              <p className="text-taxi-gray text-sm">
                Weekly bonuses, surge pricing, and referral rewards
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="shadow-xl bg-gradient-to-r from-primary to-accent border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join BAMBI today and start earning money on your schedule. The
              application process takes just minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 h-auto"
              >
                Apply to Drive
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 h-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
