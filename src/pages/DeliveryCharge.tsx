import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { addCharge } from "@/store/deliveryCharges";
import { useToast } from "@/hooks/use-toast";

const DeliveryCharge = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !status) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    addCharge(name, price, status);
    toast({ title: "Delivery charge added successfully" });
    navigate("/delivery-charge-list");
  };

  const handleCancel = () => {
    setName("");
    setPrice("");
    setStatus("");
  };

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-[1600px] mx-auto">
            <h1 className="text-2xl font-bold text-foreground mb-6">Delivery Charge</h1>
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6">Add Delivery Charge</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="" disabled>select</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button type="submit" className="bg-primary hover:bg-primary/90 px-6">
                    Add Now
                    <Plus className="w-4 h-4 ml-2" />
                  </Button>
                  <Button type="button" variant="outline" className="px-6" onClick={handleCancel}>
                    cancel
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DeliveryCharge;
