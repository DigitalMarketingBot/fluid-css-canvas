import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AddSellerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddSellerModal = ({ open, onOpenChange }: AddSellerModalProps) => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [verificationInfo, setVerificationInfo] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setEmergencyContact("");
    setCity("");
    setState("");
    setAddress("");
    setDate("");
    setGender("");
    setVerificationStatus("");
    setVerificationInfo("");
    setOpeningBalance("");
    setPaymentMethod("");
    setPaymentStatus("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName) {
      toast({ title: "Please enter full name", variant: "destructive" });
      return;
    }
    toast({ title: "Seller added successfully" });
    resetForm();
    onOpenChange(false);
  };

  const handleCancel = () => {
    resetForm();
    onOpenChange(false);
  };

  const selectClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[750px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Add new Seller
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          {/* Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input
                placeholder="Enter product name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Profile Image & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label>Profile image</Label>
              <Input type="file" accept="image/*" />
            </div>
            <div className="space-y-2">
              <Label>Phone number</Label>
              <Input
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Emergency Contact & City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label>Emergency contact</Label>
              <Input
                placeholder="Enter product name"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>City</Label>
              <Input
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          {/* State & Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label>State</Label>
              <Input
                placeholder="Enter product name"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <Input
                placeholder="Enter product name"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          {/* Date & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label>Date</Label>
              <Input
                placeholder="Enter product name"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Gender</Label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Verification Status & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label>Verification status</Label>
              <select
                value={verificationStatus}
                onChange={(e) => setVerificationStatus(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>Select status</option>
                <option value="Verified">Verified</option>
                <option value="Unverified">Unverified</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Verification Information</Label>
              <Input
                placeholder="Enter product name"
                value={verificationInfo}
                onChange={(e) => setVerificationInfo(e.target.value)}
              />
            </div>
          </div>

          {/* Opening Balance, Payment Method, Payment Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="space-y-2">
              <Label>Opening Balance</Label>
              <Input
                placeholder="Enter Amount"
                value={openingBalance}
                onChange={(e) => setOpeningBalance(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Payment Method</Label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>Select method</option>
                <option value="Cash">Cash</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Mobile Banking">Mobile Banking</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Payment Status</Label>
              <select
                value={paymentStatus}
                onChange={(e) => setPaymentStatus(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>Select status</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
                <option value="Partial">Partial</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6"
            >
              Add Now
              <Plus className="w-4 h-4 ml-2" />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="px-6"
              onClick={handleCancel}
            >
              cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
