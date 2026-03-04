import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, name: "Bluetooth Devices", image: "🎧", purchasePrice: "$150.00", sellsPrice: "$180.00", quantity: 50, status: "Active", saq: "BT-001" },
  { id: 2, name: "Airdot", image: "🎵", purchasePrice: "$80.00", sellsPrice: "$120.00", quantity: 120, status: "Active", saq: "AD-002" },
  { id: 3, name: "Shoes", image: "👟", purchasePrice: "$200.00", sellsPrice: "$350.00", quantity: 75, status: "Active", saq: "SH-003" },
  { id: 4, name: "Kids T-Shirt", image: "👕", purchasePrice: "$25.00", sellsPrice: "$45.00", quantity: 200, status: "Inactive", saq: "KT-004" },
  { id: 5, name: "Smart Watch", image: "⌚", purchasePrice: "$300.00", sellsPrice: "$450.00", quantity: 30, status: "Active", saq: "SW-005" },
  { id: 6, name: "Girls Top", image: "👚", purchasePrice: "$18.00", sellsPrice: "$35.00", quantity: 150, status: "Active", saq: "GT-006" },
  { id: 7, name: "Smart Watch", image: "⌚", purchasePrice: "$250.00", sellsPrice: "$400.00", quantity: 45, status: "Inactive", saq: "SW-007" },
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const totalEntries = 400;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-foreground">Product List</h1>
              <Button className="bg-primary hover:bg-primary/90 gap-2">
                <Plus className="w-4 h-4" />
                Add new product
              </Button>
            </div>

            <Card className="p-0 overflow-hidden">
              {/* Show entries */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  Show
                  <select
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                    className="border border-input rounded px-2 py-1 text-sm bg-background text-foreground"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select>
                  Entries
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">No</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Purchase Price</th>
                      <th className="text-left py-3 px-4 font-medium text-primary">Sells Price</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Quantity</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">SAQ</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id} className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="py-3 px-4 text-foreground">{String(index + 1).padStart(2, "0")}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-lg">
                              {product.image}
                            </div>
                            <span className="font-medium text-foreground">{product.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-foreground">{product.purchasePrice}</td>
                        <td className="py-3 px-4 text-primary font-medium">{product.sellsPrice}</td>
                        <td className="py-3 px-4 text-foreground">{product.quantity}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              product.status === "Active"
                                ? "bg-primary/10 text-primary"
                                : "bg-destructive/10 text-destructive"
                            }`}
                          >
                            {product.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{product.saq}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors">
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button className="w-8 h-8 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20 transition-colors">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between p-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Showing {(currentPage - 1) * entriesPerPage + 1} to{" "}
                  {Math.min(currentPage * entriesPerPage, totalEntries)} of {totalEntries} Entries
                </p>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 text-sm rounded-md border border-input text-muted-foreground hover:bg-muted disabled:opacity-50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 text-sm rounded-md transition-colors ${
                        currentPage === page
                          ? "bg-primary text-primary-foreground"
                          : "border border-input text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <span className="px-1 text-muted-foreground">...</span>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`w-8 h-8 text-sm rounded-md transition-colors ${
                      currentPage === totalPages
                        ? "bg-primary text-primary-foreground"
                        : "border border-input text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {totalPages}
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 text-sm rounded-md border border-input text-muted-foreground hover:bg-muted disabled:opacity-50 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
