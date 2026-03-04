import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const chargesData = [
  { id: 1, name: "Dhaka", price: "70 Tk", status: "$3,46,660" },
  { id: 2, name: "Out Side Dhaka", price: "140 Tk", status: "$3,00,000" },
  { id: 3, name: "Shoes", price: "$10", status: "$1,50,000" },
];

const DeliveryChargeList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const totalEntries = 400;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [1, 2, 3, 4];
    if (totalPages > 5) pages.push("...", totalPages);
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
                    {chargesData.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-4">{item.id}</td>
                        <td className="py-4">{item.name}</td>
                        <td className="py-4">{item.price}</td>
                        <td className="py-4">{item.status}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <button className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button className="w-8 h-8 rounded bg-destructive text-destructive-foreground flex items-center justify-center hover:bg-destructive/90 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-4">
                <div className="text-sm text-muted-foreground">
                  <p>Showing 1 to {entriesPerPage} Of {totalEntries} Entries</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span>Show</span>
                    <select
                      value={entriesPerPage}
                      onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                      className="border border-input rounded px-2 py-1 text-sm bg-background"
                    >
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                    <span>Entries</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {getPageNumbers().map((page, index) => (
                    <Button
                      key={index}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      className={currentPage === page ? "bg-primary text-primary-foreground" : ""}
                      onClick={() => typeof page === "number" && setCurrentPage(page)}
                      disabled={typeof page === "string"}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
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
