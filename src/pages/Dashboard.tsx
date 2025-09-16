import { Calendar, Clock, Coffee, QrCode } from "lucide-react";
import Layout from "@/components/Layout";
import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold text-primary">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
          </div>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-primary font-semibold cafe-shadow"
          >
            <QrCode className="mr-2 h-5 w-5" />
            Scan QR Code
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title="Today's Bookings"
            value="12"
            description="3 pending check-ins"
            icon={Calendar}
          />
          <DashboardCard
            title="Pending Check-ins"
            value="3"
            description="Customers haven't scanned QR yet"
            icon={Clock}
          />
          <DashboardCard
            title="Subscription Redemptions"
            value="8"
            description="This week"
            icon={Coffee}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="cafe-shadow">
            <CardHeader>
              <CardTitle className="text-primary">Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Sarah Johnson", time: "10:30 AM", guests: 2, status: "Confirmed" },
                { name: "Mike Chen", time: "11:15 AM", guests: 4, status: "Pending Check-in" },
                { name: "Emma Wilson", time: "12:00 PM", guests: 1, status: "Checked In" },
              ].map((booking, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-primary">{booking.name}</p>
                    <p className="text-sm text-muted-foreground">{booking.time} • {booking.guests} guests</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    booking.status === "Checked In" 
                      ? "bg-accent text-accent-foreground" 
                      : booking.status === "Confirmed"
                      ? "bg-secondary text-primary"
                      : "bg-orange-100 text-orange-800"
                  }`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="cafe-shadow">
            <CardHeader>
              <CardTitle className="text-primary">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start cafe-transition hover:bg-secondary/20"
              >
                <Calendar className="mr-2 h-4 w-4" />
                View All Bookings
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start cafe-transition hover:bg-accent/20"
              >
                <Coffee className="mr-2 h-4 w-4" />
                Subscription Claims
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start cafe-transition hover:bg-primary/10"
              >
                <QrCode className="mr-2 h-4 w-4" />
                Scan Customer QR
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Revenue Generated Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display font-bold text-primary">Additional Revenue Generated (Pending Approval)</h2>
          </div>
          
          <Card className="cafe-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { name: "Rahul Sharma", amount: "₹450", image: "/src/assets/bill-placeholder.png" },
                  { name: "Ananya Mehta", amount: "₹780", image: "/src/assets/bill-placeholder.png" },
                  { name: "Priya Singh", amount: "₹1200", image: "/src/assets/bill-placeholder.png" },
                  { name: "Vikram Kumar", amount: "₹650", image: "/src/assets/bill-placeholder.png" },
                ].map((entry, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={entry.image} 
                        alt="Bill thumbnail" 
                        className="w-12 h-12 rounded-md object-cover border border-border"
                      />
                      <div>
                        <p className="font-medium text-primary">{entry.name}</p>
                        <p className="text-sm text-muted-foreground">Bill Amount: {entry.amount}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
                      Pending Approval
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;