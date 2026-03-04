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

interface AddChildCategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddChildCategoryModal = ({ open, onOpenChange }: AddChildCategoryModalProps) => {
  const { toast } = useToast();
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [childCategoryName, setChildCategoryName] = useState("");
  const [status, setStatus] = useState("");

  const selectClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  const resetForm = () => {
    setCategory("");
    setSubCategory("");
    setChildCategoryName("");
    setStatus("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childCategoryName) {
      toast({ title: "Please enter child category name", variant: "destructive" });
      return;
    }
    toast({ title: "Child Category added successfully" });
    resetForm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Add new Child Category</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label>Category</Label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectClass}>
                <option value="" disabled>select category</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Sub Category</Label>
              <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} className={selectClass}>
                <option value="" disabled>select sub category</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label>Child Category Name</Label>
              <Input placeholder="Enter child category name" value={childCategoryName} onChange={(e) => setChildCategoryName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className={selectClass}>
                <option value="" disabled>Select status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
              Add Now <Plus className="w-4 h-4 ml-2" />
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
