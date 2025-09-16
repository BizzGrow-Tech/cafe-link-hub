import { useState } from "react";
import { Calendar, Clock, Users, Search, Filter } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockBookings = [
  { id: 1, customerName: "Sarah Johnson", date: "2024-01-15", time: "10:30 AM", guests: 2, status: "Confirmed", phone: "+1 234-567-8901" },
  { id: 2, customerName: "Mike Chen", date: "2024-01-15", time: "11:15 AM", guests: 4, status: "Pending", phone: "+1 234-567-8902" },
  { id: 3, customerName: "Emma Wilson", date: "2024-01-15", time: "12:00 PM", guests: 1, status: "Checked In", phone: "+1 234-567-8903" },
  { id: 4, customerName: "David Brown", date: "2024-01-15", time: "1:30 PM", guests: 3, status: "Confirmed", phone: "+1 234-567-8904" },
  { id: 5, customerName: "Lisa Garcia", date: "2024-01-16", time: "9:00 AM", guests: 2, status: "Confirmed", phone: "+1 234-567-8905" },
  { id: 6, customerName: "John Smith", date: "2024-01-16", time: "10:15 AM", guests: 6, status: "Pending", phone: "+1 234-567-8906" },
];

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredBookings = mockBookings.filter(booking => {
    const matchesSearch = booking.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" || booking.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Confirmed":
        return <Badge className="bg-secondary text-primary">Confirmed</Badge>;
      case "Checked In":
        return <Badge className="bg-accent text-accent-foreground">Checked In</Badge>;
      case "Pending":
        return <Badge variant="outline" className="border-orange-300 text-orange-600">Pending</Badge>;
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
            <h1 className="text-3xl font-display font-bold text-primary">Bookings</h1>
            <p className="text-muted-foreground">Manage your restaurant reservations</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="cafe-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-muted-foreground">Today</span>
              </div>
              <div className="text-2xl font-bold text-primary mt-1">4</div>
            </CardContent>
          </Card>
          <Card className="cafe-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-muted-foreground">Pending</span>
              </div>
              <div className="text-2xl font-bold text-primary mt-1">2</div>
            </CardContent>
          </Card>
          <Card className="cafe-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Total Guests</span>
              </div>
              <div className="text-2xl font-bold text-primary mt-1">18</div>
            </CardContent>
          </Card>
          <Card className="cafe-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Tomorrow</span>
              </div>
              <div className="text-2xl font-bold text-primary mt-1">2</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="cafe-shadow">
          <CardHeader>
            <CardTitle className="text-primary">All Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by customer name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                {["All", "Confirmed", "Pending", "Checked In"].map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedStatus(status)}
                    className="cafe-transition"
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>

            {/* Bookings Table */}
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Phone</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking.id} className="cafe-transition hover:bg-muted/50">
                      <TableCell className="font-medium text-primary">{booking.customerName}</TableCell>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell>{booking.time}</TableCell>
                      <TableCell>{booking.guests}</TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell className="text-muted-foreground">{booking.phone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Bookings;