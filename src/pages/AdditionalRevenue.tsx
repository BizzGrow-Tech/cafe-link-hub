import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import billPlaceholder from "@/assets/bill-placeholder.png";

const AdditionalRevenue = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-display font-bold text-primary">Additional Revenue Generated (Pending Approval)</h1>
          <p className="text-muted-foreground">Review and track additional revenue submissions from customers.</p>
        </div>

        {/* Revenue Entries */}
        <Card className="cafe-shadow">
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { name: "Rahul Sharma", amount: "₹450", image: billPlaceholder },
                { name: "Ananya Mehta", amount: "₹780", image: billPlaceholder },
                { name: "Priya Singh", amount: "₹1200", image: billPlaceholder },
                { name: "Vikram Kumar", amount: "₹650", image: billPlaceholder },
                { name: "Sneha Patel", amount: "₹890", image: billPlaceholder },
                { name: "Arjun Gupta", amount: "₹320", image: billPlaceholder },
              ].map((entry, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={entry.image} 
                      alt="Bill thumbnail" 
                      className="w-12 h-12 rounded-md object-cover border border-border cafe-shadow"
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
    </Layout>
  );
};

export default AdditionalRevenue;