import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatCard } from "@/components/StatCard";
import { Wallet, CreditCard, ShoppingCart, DollarSign, Users, Package, MoreVertical, ChevronDown } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const salesData = [
  { time: "00am", value: 30 },
  { time: "11am", value: 45 },
  { time: "12am", value: 60 },
  { time: "01am", value: 55 },
  { time: "02am", value: 75 },
  { time: "03am", value: 55 },
  { time: "04am", value: 65 },
  { time: "05am", value: 80 },
  { time: "08am", value: 75 },
];

const COLORS = ["#5B21B6", "#EF4444", "#F97316", "#1E293B", "#6B7280", "#3B82F6", "#8B5CF6", "#EC4899"];

const orderStatusData = [
  { name: "pending", value: 20, color: "#5B21B6" },
  { name: "pending", value: 20, color: "#EF4444" },
  { name: "pending", value: 20, color: "#F97316" },
  { name: "pending", value: 20, color: "#1E293B" },
  { name: "pending", value: 20, color: "#6B7280" },
  { name: "pending", value: 20, color: "#3B82F6" },
];

const analyticsData = [
  { name: "Sale", value: 35, color: "#5B21B6" },
  { name: "Distribute", value: 45, color: "#16a085" },
  { name: "Return", value: 20, color: "#EC4899" },
];

const topClients = [
  { id: "#876364", name: "Camera Lens", value: "$178", quantity: 325 },
  { id: "#876368", name: "Black Sleep Dress", value: "$14", quantity: 13 },
  { id: "#876412", name: "Argan Oil", value: "$21", quantity: 78 },
];

const recentOrders = [
  { id: "#876364", product: "Camera Lens", price: "$178", total: 325, amount: "$146,660" },
  { id: "#876368", product: "Black Sleep Dress", price: "$14", total: 53, amount: "$46,660" },
  { id: "#876412", product: "Argan Oil", price: "$21", total: 78, amount: "$3,146,676" },
  { id: "#876621", product: "EAU DE Parfum", price: "$32", total: 98, amount: "$3,46,981" },
];

const latestOrders = [
  { id: "#876364", customer: "Akshay SK", email: "Akshaysk@gmail.com", date: "02/05/2025", product: "Camera Lens", price: "$178", total: 325, amount: "$146,660", status: "Processing", statusColor: "text-orange" },
  { id: "#876368", customer: "Akshay SK", email: "Akshaysk@gmail.com", date: "02/05/2025", product: "Black Sleep Dress", price: "$14", total: 53, amount: "$46,660", status: "Shiped", statusColor: "text-blue" },
  { id: "#876412", customer: "Akshay SK", email: "Akshaysk@gmail.com", date: "02/05/2025", product: "Argan Oil", price: "$21", total: 78, amount: "$3,146,676", status: "Delivered", statusColor: "text-green" },
  { id: "#876621", customer: "Akshay SK", email: "Akshaysk@gmail.com", date: "02/05/2025", product: "EAU DE Parfum", price: "$32", total: 98, amount: "$3,46,981", status: "Cancelled", statusColor: "text-destructive" },
];

const topProducts = [
  { name: "NIKE Shoes Black Pattern", price: "$87", image: "🥾", rating: 4 },
  { name: "iPhone 12", price: "$987", image: "📱", rating: 3 },
];

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-[1600px] mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <Button className="bg-primary hover:bg-primary/90">
                Feb 2023
                <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard title="Total Sales" value="$0" icon={Wallet} color="teal" />
              <StatCard title="Total Purchase" value="$0" icon={CreditCard} color="purple" />
              <StatCard title="Total Orders" value="0" icon={ShoppingCart} color="green" />
              <StatCard title="Total Profit" value="$0" icon={DollarSign} color="blue" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard title="Total Customers" value="0" icon={Users} color="teal" />
              <StatCard title="Total Suppliers" value="0" icon={Users} color="blue" />
              <StatCard title="Total Products" value="0" icon={Package} color="green" />
              <StatCard title="Total Seller" value="0" icon={Users} color="blue" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="lg:col-span-2 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Reports</h2>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#16a085" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#16a085" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#16a085"
                      strokeWidth={2}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Analytics</h2>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <ResponsiveContainer width={200} height={200}>
                      <PieChart>
                        <Pie
                          data={analyticsData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {analyticsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold">80%</div>
                        <div className="text-xs text-muted-foreground">Transactions</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  {analyticsData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Order Status</h2>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie
                        data={orderStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        dataKey="value"
                      >
                        {orderStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {orderStatusData.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                      </div>
                      <div className="text-muted-foreground">{item.name}</div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="lg:col-span-2 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Top client</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left text-sm text-muted-foreground">
                        <th className="pb-3 font-medium">Name</th>
                        <th className="pb-3 font-medium">total order value</th>
                        <th className="pb-3 font-medium">Order quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topClients.map((client, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs">
                                📷
                              </div>
                              <div>
                                <div className="text-sm text-muted-foreground">{client.id}</div>
                                <div className="font-medium">{client.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 font-semibold">{client.value}</td>
                          <td className="py-4">
                            <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">
                              {client.quantity}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="lg:col-span-2 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Recent Orders</h2>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left text-muted-foreground">
                        <th className="pb-3 font-medium">Tracking no</th>
                        <th className="pb-3 font-medium">Product Name</th>
                        <th className="pb-3 font-medium">Price</th>
                        <th className="pb-3 font-medium">Total Order</th>
                        <th className="pb-3 font-medium">Total Amount</th>
                        <th className="pb-3 font-medium">view All</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-4">{order.id}</td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-muted rounded"></div>
                              <span>{order.product}</span>
                            </div>
                          </td>
                          <td className="py-4">{order.price}</td>
                          <td className="py-4">
                            <span className="bg-orange/10 text-orange px-3 py-1 rounded-full text-xs">
                              {order.total}
                            </span>
                          </td>
                          <td className="py-4 font-semibold">{order.amount}</td>
                          <td className="py-4">
                            <Button className="bg-primary hover:bg-primary/90 text-xs">
                              Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Top selling Products</h2>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-16 h-16 bg-blue/10 rounded-lg flex items-center justify-center text-2xl">
                        {product.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm mb-1">{product.name}</h3>
                        <div className="flex items-center gap-1 mb-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={i < product.rating ? "text-orange" : "text-gray-300"}>
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="text-blue font-semibold">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Latest Order</h2>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                  <Button variant="link" className="text-primary">
                    view All
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-muted-foreground">
                      <th className="pb-3 font-medium">Tracking no</th>
                      <th className="pb-3 font-medium">Customer</th>
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium">Product Name</th>
                      <th className="pb-3 font-medium">Price</th>
                      <th className="pb-3 font-medium">Total Order</th>
                      <th className="pb-3 font-medium">Total Amount</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">view All</th>
                    </tr>
                  </thead>
                  <tbody>
                    {latestOrders.map((order, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-4">{order.id}</td>
                        <td className="py-4">
                          <div>
                            <div className="font-medium">{order.customer}</div>
                            <div className="text-xs text-muted-foreground">{order.email}</div>
                          </div>
                        </td>
                        <td className="py-4">{order.date}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-muted rounded"></div>
                            <span>{order.product}</span>
                          </div>
                        </td>
                        <td className="py-4">{order.price}</td>
                        <td className="py-4">
                          <span className="bg-orange/10 text-orange px-3 py-1 rounded-full text-xs">
                            {order.total}
                          </span>
                        </td>
                        <td className="py-4 font-semibold">{order.amount}</td>
                        <td className="py-4">
                          <span className={`font-medium ${order.statusColor}`}>{order.status}</span>
                        </td>
                        <td className="py-4">
                          <Button className="bg-primary hover:bg-primary/90 text-xs">
                            Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
