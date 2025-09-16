import { Coffee, TrendingUp, Users, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import DashboardCard from "@/components/DashboardCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockSubscriptionClaims = [
  { id: 1, customerName: "Sarah Johnson", claimedCafes: 5, totalCafes: 10, lastClaim: "2024-01-15", status: "Active" },
  { id: 2, customerName: "Mike Chen", claimedCafes: 8, totalCafes: 10, lastClaim: "2024-01-14", status: "Active" },
  { id: 3, customerName: "Emma Wilson", claimedCafes: 10, totalCafes: 10, lastClaim: "2024-01-13", status: "Completed" },
  { id: 4, customerName: "David Brown", claimedCafes: 3, totalCafes: 10, lastClaim: "2024-01-12", status: "Active" },
  { id: 5, customerName: "Lisa Garcia", claimedCafes: 7, totalCafes: 10, lastClaim: "2024-01-11", status: "Active" },
];

const recentClaims = [
  { customerName: "Sarah Johnson", time: "10:30 AM", date: "Today" },
  { customerName: "Mike Chen", time: "9:45 AM", date: "Today" },
  { customerName: "Emma Wilson", time: "3:20 PM", date: "Yesterday" },
  { customerName: "David Brown", time: "11:15 AM", date: "Yesterday" },
];

const Subscriptions = () => {
  const getProgressPercentage = (claimed: number, total: number) => {
    return Math.round((claimed / total) * 100);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-secondary text-primary">Active</Badge>;
      case "Completed":
        return <Badge className="bg-accent text-accent-foreground">Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold text-primary">Subscription Claims</h1>
            <p className="text-muted-foreground">Track customer subscription usage and progress</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Total Active Subscriptions"
            value="24"
            description="Currently active customers"
            icon={Users}
          />
          <DashboardCard
            title="Claims This Week"
            value="18"
            description="Up 12% from last week"
            icon={Coffee}
          />
          <DashboardCard
            title="Completed Subscriptions"
            value="3"
            description="This month"
            icon={TrendingUp}
          />
          <DashboardCard
            title="Claims Today"
            value="2"
            description="Recent activity"
            icon={Calendar}
          />
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Subscription Progress Table */}
          <div className="lg:col-span-2">
            <Card className="cafe-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Customer Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer Name</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Last Claim</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockSubscriptionClaims.map((claim) => (
                        <TableRow key={claim.id} className="cafe-transition hover:bg-muted/50">
                          <TableCell className="font-medium text-primary">{claim.customerName}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{claim.claimedCafes}/{claim.totalCafes} cafes</span>
                                <span className="text-muted-foreground">{getProgressPercentage(claim.claimedCafes, claim.totalCafes)}%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div 
                                  className="bg-secondary h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${getProgressPercentage(claim.claimedCafes, claim.totalCafes)}%` }}
                                />
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{claim.lastClaim}</TableCell>
                          <TableCell>{getStatusBadge(claim.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Claims */}
          <div>
            <Card className="cafe-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Recent Claims</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentClaims.map((claim, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-primary">{claim.customerName}</p>
                      <p className="text-sm text-muted-foreground">{claim.time}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">
                      {claim.date}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Summary Stats */}
            <Card className="cafe-shadow mt-6">
              <CardHeader>
                <CardTitle className="text-primary">This Month Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Claims</span>
                  <span className="font-semibold text-primary">45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">New Subscriptions</span>
                  <span className="font-semibold text-primary">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Completed</span>
                  <span className="font-semibold text-primary">3</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">Revenue Impact</span>
                    <span className="font-bold text-secondary">$1,240</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Subscriptions;