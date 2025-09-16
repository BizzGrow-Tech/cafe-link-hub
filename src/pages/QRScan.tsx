import { useState } from "react";
import { QrCode, Scan, CheckCircle, XCircle, Camera } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const QRScan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  const startScan = () => {
    setIsScanning(true);
    setScanResult(null);
    
    // Simulate QR scan after 2 seconds
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        customerName: "Sarah Johnson",
        bookingId: "BK-2024-001",
        time: "10:30 AM",
        guests: 2,
        subscriptionActive: true,
        claimedCafes: 5,
        totalCafes: 10,
        status: "valid"
      });
    }, 2000);
  };

  const resetScan = () => {
    setScanResult(null);
    setIsScanning(false);
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-primary">QR Code Scanner</h1>
          <p className="text-muted-foreground mt-2">Scan customer QR codes to check them in</p>
        </div>

        {/* Main Scanner Card */}
        <Card className="cafe-shadow">
          <CardHeader className="text-center">
            <CardTitle className="text-primary">Customer Check-in</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isScanning && !scanResult && (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-32 h-32 border-2 border-dashed border-muted-foreground rounded-lg flex items-center justify-center bg-muted/20">
                    <QrCode className="h-16 w-16 text-muted-foreground" />
                  </div>
                </div>
                <Button 
                  onClick={startScan}
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-primary font-semibold cafe-shadow"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Start QR Scan
                </Button>
                <p className="text-sm text-muted-foreground">
                  Click the button above to start scanning customer QR codes
                </p>
              </div>
            )}

            {isScanning && (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-32 h-32 border-2 border-secondary rounded-lg flex items-center justify-center bg-secondary/10 animate-pulse">
                    <Scan className="h-16 w-16 text-secondary animate-spin" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Scanning QR Code...</p>
                  <p className="text-sm text-muted-foreground">
                    Point your camera at the customer's QR code
                  </p>
                </div>
                <Button variant="outline" onClick={resetScan}>
                  Cancel
                </Button>
              </div>
            )}

            {scanResult && (
              <div className="space-y-6">
                {/* Scan Success */}
                <div className="text-center space-y-2">
                  <div className="flex justify-center">
                    <CheckCircle className="h-16 w-16 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">QR Code Scanned Successfully!</h3>
                </div>

                {/* Customer Details */}
                <div className="border rounded-lg p-4 bg-muted/20">
                  <h4 className="font-semibold text-primary mb-3">Customer Information</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span className="font-medium text-primary">{scanResult.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Booking ID:</span>
                      <span className="font-medium text-primary">{scanResult.bookingId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Scheduled Time:</span>
                      <span className="font-medium text-primary">{scanResult.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Party Size:</span>
                      <span className="font-medium text-primary">{scanResult.guests} guests</span>
                    </div>
                  </div>
                </div>

                {/* Subscription Status */}
                {scanResult.subscriptionActive && (
                  <div className="border rounded-lg p-4 bg-accent/10 border-accent/20">
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <QrCode className="mr-2 h-4 w-4" />
                      Subscription Status
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge className="bg-accent text-accent-foreground">Active Subscriber</Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress:</span>
                          <span className="text-primary">{scanResult.claimedCafes}/{scanResult.totalCafes} cafes claimed</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-accent h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(scanResult.claimedCafes / scanResult.totalCafes) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => {
                      // Handle check-in logic
                      resetScan();
                    }}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Confirm Check-in
                  </Button>
                  <Button variant="outline" onClick={resetScan}>
                    Scan Another
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Scans */}
        <Card className="cafe-shadow">
          <CardHeader>
            <CardTitle className="text-primary">Recent Check-ins</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Emma Wilson", time: "10 minutes ago", type: "Subscription" },
                { name: "Mike Chen", time: "25 minutes ago", type: "Booking" },
                { name: "David Brown", time: "1 hour ago", type: "Booking" },
              ].map((scan, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-primary">{scan.name}</p>
                    <p className="text-sm text-muted-foreground">{scan.time}</p>
                  </div>
                  <Badge variant={scan.type === "Subscription" ? "default" : "outline"}>
                    {scan.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default QRScan;