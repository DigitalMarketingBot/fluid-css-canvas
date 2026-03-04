import { useState, useSyncExternalStore } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCharges, deleteCharge, subscribe } from "@/store/deliveryCharges";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const DeliveryChargeList = () => {
  const charges = useSyncExternalStore(subscribe, getCharges);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const { toast } = useToast();
  const navigate = useNavigate();

  const totalEntries = charges.length;
  const totalPages = Math.max(1, Math.ceil(totalEntries / entriesPerPage));
  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedCharges = charges.slice(startIndex, startIndex + entriesPerPage);

  const handleDelete = (id: number) => {
    deleteCharge(id);
    toast({ title: "Delivery charge deleted" });
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    for (let i = 1; i <= Math.min(totalPages, 4); i++) pages.push(i);
    if (totalPages > 5) pages.push("...", totalPages);
    else if (totalPages === 5) pages.push(5);
    return pages;
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
              <h2 className="text-lg font-semibold text-foreground mb-6">Delivery Charge List</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-muted-foreground">
                      <th className="pb-3 font-medium">No ↕</th>
                      <th className="pb-3 font-medium">Name ↕</th>
                      <th className="pb-3 font-medium">Price ↕</th>
                      <th className="pb-3 font-medium">Status ↕</th>
                      <th className="pb-3 font-medium">Action ↕</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedCharges.map((item, index) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-4">{startIndex + index + 1}</td>
                        <td className="py-4">{item.name}</td>
                        <td className="py-4">{item.price}</td>
                        <td className="py-4">{item.status}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <button onClick={() => navigate(`/delivery-charge?edit=${item.id}`)} className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="w-8 h-8 rounded bg-destructive text-destructive-foreground flex items-center justify-center hover:bg-destructive/90 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {paginatedCharges.length === 0 && (
                      <tr><td colSpan={5} className="py-8 text-center text-muted-foreground">No delivery charges found</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-4">
                <div className="text-sm text-muted-foreground">
                  <p>Showing {totalEntries > 0 ? startIndex + 1 : 0} to {Math.min(startIndex + entriesPerPage, totalEntries)} Of {totalEntries} Entries</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span>Show</span>
                    <select value={entriesPerPage} onChange={(e) => { setEntriesPerPage(Number(e.target.value)); setCurrentPage(1); }} className="border border-input rounded px-2 py-1 text-sm bg-background">
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                    <span>Entries</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>Previous</Button>
                  {getPageNumbers().map((page, index) => (
                    <Button key={index} variant={currentPage === page ? "default" : "outline"} size="sm" className={currentPage === page ? "bg-primary text-primary-foreground" : ""} onClick={() => typeof page === "number" && setCurrentPage(page)} disabled={typeof page === "string"}>{page}</Button>
                  ))}
                  <Button variant="outline" size="sm" onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>Next</Button>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DeliveryChargeList;
