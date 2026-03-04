import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Upload, ArrowUp, List } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SelectWithAdd = ({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <div className="flex gap-2">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <option value="" disabled>
          {placeholder}
        </option>
      </select>
      <Button
        type="button"
        size="sm"
        className="shrink-0 h-10 px-3 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Add New
      </Button>
    </div>
  </div>
);

const RichTextPlaceholder = ({ label }: { label: string }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <div className="border border-input rounded-md overflow-hidden">
      <div className="flex items-center gap-1 px-3 py-2 border-b border-input bg-muted/30">
        <span className="text-xs text-muted-foreground">Formats</span>
        <span className="mx-1 text-muted-foreground">|</span>
        {["B", "I", "U", "S"].map((f) => (
          <button
            key={f}
            type="button"
            className="w-7 h-7 flex items-center justify-center rounded text-xs font-semibold text-muted-foreground hover:bg-muted"
          >
            {f}
          </button>
        ))}
        <span className="mx-1 text-muted-foreground">|</span>
        {["≡", "≡", "≡", "≡"].map((f, i) => (
          <button
            key={i}
            type="button"
            className="w-7 h-7 flex items-center justify-center rounded text-xs text-muted-foreground hover:bg-muted"
          >
            {f}
          </button>
        ))}
      </div>
      <Textarea
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[100px]"
      />
    </div>
  </div>
);

const ProductCreate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [productName, setProductName] = useState("");
  const [productSlug, setProductSlug] = useState("");
  const [fabric, setFabric] = useState("");
  const [shape, setShape] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [childCategory, setChildCategory] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellsPrice, setSellsPrice] = useState("");
  const [discountType, setDiscountType] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [taxType, setTaxType] = useState("");
  const [taxPrice, setTaxPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [productVideo, setProductVideo] = useState("");
  const [tvVideo, setTvVideo] = useState("");
  const [stamp, setStamp] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName) {
      toast({ title: "Please enter a product name", variant: "destructive" });
      return;
    }
    toast({ title: "Product created successfully" });
    navigate("/products");
  };

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-[1600px] mx-auto">
            <h1 className="text-2xl font-bold text-foreground mb-6">
              Product Create
            </h1>

            <Card className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6">
                Add new product
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Name & Slug */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="productName">Product name</Label>
                    <Input
                      id="productName"
                      placeholder="Enter product name"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="productSlug">Product Slug</Label>
                    <Input
                      id="productSlug"
                      placeholder="Enter product Slug"
                      value={productSlug}
                      onChange={(e) => setProductSlug(e.target.value)}
                    />
                  </div>
                </div>

                {/* Cover Image */}
                <div className="space-y-2">
                  <Label>Cover Image</Label>
                  <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-8 h-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Drop file here or click to upload
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Image size 1920 x 1080
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fabric & Shape */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectWithAdd
                    label="Fabric"
                    placeholder="Select fabric name"
                    value={fabric}
                    onChange={setFabric}
                  />
                  <SelectWithAdd
                    label="Shape"
                    placeholder="Select Shape name"
                    value={shape}
                    onChange={setShape}
                  />
                </div>

                {/* Brand & Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectWithAdd
                    label="Brand"
                    placeholder="Select Category Name"
                    value={brand}
                    onChange={setBrand}
                  />
                  <SelectWithAdd
                    label="Category"
                    placeholder="Select Category Name"
                    value={category}
                    onChange={setCategory}
                  />
                </div>

                {/* Sub Category & Child Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectWithAdd
                    label="Sub Category"
                    placeholder="Enter Sub Category Name"
                    value={subCategory}
                    onChange={setSubCategory}
                  />
                  <SelectWithAdd
                    label="Child Category"
                    placeholder="Enter Child Category Name"
                    value={childCategory}
                    onChange={setChildCategory}
                  />
                </div>

                {/* Sort Description */}
                <RichTextPlaceholder label="Sort Description" />

                {/* Description */}
                <RichTextPlaceholder label="Description" />

                {/* Shipping and Return */}
                <RichTextPlaceholder label="Shipping and Return" />

                {/* Purchase Price & Sells Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="purchasePrice">Purchase Price</Label>
                    <Input
                      id="purchasePrice"
                      placeholder="Enter product price"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sellsPrice">Up to Price</Label>
                    <Input
                      id="sellsPrice"
                      placeholder="Up to sells price"
                      value={sellsPrice}
                      onChange={(e) => setSellsPrice(e.target.value)}
                    />
                  </div>
                </div>

                {/* Discount Type & Amount */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="discountType">Discount type</Label>
                    <Input
                      id="discountType"
                      placeholder="Select discount type"
                      value={discountType}
                      onChange={(e) => setDiscountType(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discountAmount">Discount amount</Label>
                    <Input
                      id="discountAmount"
                      placeholder="Enter discount amount"
                      value={discountAmount}
                      onChange={(e) => setDiscountAmount(e.target.value)}
                    />
                  </div>
                </div>

                {/* Tax Price & Tax Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="taxPrice">Tax Price</Label>
                    <Input
                      id="taxPrice"
                      placeholder="Tax price"
                      value={taxPrice}
                      onChange={(e) => setTaxPrice(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxType">Tax type</Label>
                    <Input
                      id="taxType"
                      placeholder="Select tax type"
                      value={taxType}
                      onChange={(e) => setTaxType(e.target.value)}
                    />
                  </div>
                </div>

                {/* Color & Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="color">Color</Label>
                    <select
                      id="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>
                        Select color
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Size</Label>
                    <select
                      id="size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>
                        Select size
                      </option>
                    </select>
                  </div>
                </div>

                {/* Product Video & TV Video */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="productVideo">Product video</Label>
                    <Input
                      id="productVideo"
                      placeholder="Product video URL"
                      value={productVideo}
                      onChange={(e) => setProductVideo(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tvVideo">Tv Video</Label>
                    <Input
                      id="tvVideo"
                      placeholder="TV video URL"
                      value={tvVideo}
                      onChange={(e) => setTvVideo(e.target.value)}
                    />
                  </div>
                </div>

                {/* Stamp & Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="stamp">Stamp</Label>
                    <Input
                      id="stamp"
                      placeholder="Enter stamp"
                      value={stamp}
                      onChange={(e) => setStamp(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      placeholder="Enter quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
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
                    onClick={() => navigate("/products")}
                  >
                    <List className="w-4 h-4 mr-2" />
                    List
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="ml-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-10 h-10"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <ArrowUp className="w-4 h-4" />
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

export default ProductCreate;
