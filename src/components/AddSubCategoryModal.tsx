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

interface AddSubCategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddSubCategoryModal = ({ open, onOpenChange }: AddSubCategoryModalProps) => {
  const { toast } = useToast();
  const [category, setCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [status, setStatus] = useState("");

  const selectClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  const resetForm = () => {
    setCategory("");
    setSubCategoryName("");
    setStatus("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subCategoryName) {
      toast({ title: "Please enter sub category name", variant: "destructive" });
      return;
    }
    toast({ title: "Sub Category added successfully" });
    resetForm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Add new Sub Category
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="space-y-2">
            <Label>Category</Label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>select category</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>Sub Category Name</Label>
            <Input
              placeholder="Enter sub category name"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Status</Label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>Select status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
              Add Now
              <Plus className="w-4 h-4 ml-2" />
            </Button>
            <Button type="button" variant="outline" className="px-6" onClick={() => { resetForm(); onOpenChange(false); }}>
              cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
