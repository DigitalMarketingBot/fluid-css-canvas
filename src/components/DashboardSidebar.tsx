import { LayoutDashboard, Users, Package, ShoppingCart, BarChart3, FileText, Bell, Settings, LifeBuoy, Monitor, Palette, UserCircle } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Customer", hasSubmenu: true },
  { icon: Package, label: "Product", hasSubmenu: true },
  { icon: ShoppingCart, label: "Order", hasSubmenu: true },
  { icon: BarChart3, label: "marketing", hasSubmenu: true },
  { icon: FileText, label: "blog", badge: "9" },
  { icon: Bell, label: "Notification", hasSubmenu: true },
];

const managementItems = [
  { icon: Users, label: "follow-ups", hasSubmenu: true },
  { icon: BarChart3, label: "staffs", hasSubmenu: true },
  { icon: FileText, label: "Invoice", hasSubmenu: true },
  { icon: Package, label: "stock adjustment" },
  { icon: FileText, label: "Other Expense", hasSubmenu: true },
  { icon: FileText, label: "Other Income", hasSubmenu: true },
  { icon: Bell, label: "Notification", hasSubmenu: true },
  { icon: LifeBuoy, label: "support", hasSubmenu: true },
  { icon: Settings, label: "Settings", hasSubmenu: true },
];

const websiteItems = [
  { icon: Monitor, label: "Design", hasSubmenu: true },
  { icon: Palette, label: "Theme", hasSubmenu: true },
  { icon: UserCircle, label: "profile", hasSubmenu: true },
];

export const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen overflow-y-auto border-r border-border flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded"></div>
          <span className="font-bold text-xl text-foreground">ELG</span>
        </div>
      </div>

      <nav className="flex-1 px-3">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm ${
                item.active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-destructive text-white text-xs px-1.5 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
              {item.hasSubmenu && <span className="text-xs">›</span>}
            </button>
          ))}
        </div>

        <div className="mt-6 mb-2 px-3">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            management
          </span>
        </div>

        <div className="space-y-1">
          {managementItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm text-muted-foreground hover:bg-muted"
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.hasSubmenu && <span className="text-xs">›</span>}
            </button>
          ))}
        </div>

        <div className="mt-6 mb-2 px-3">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            website
          </span>
        </div>

        <div className="space-y-1 mb-6">
          {websiteItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm text-muted-foreground hover:bg-muted"
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.hasSubmenu && <span className="text-xs">›</span>}
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4">
        <div className="bg-gradient-to-br from-teal to-teal-dark rounded-2xl p-4 text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/30 rounded-full"></div>
            </div>
            <button className="w-full bg-white text-primary text-sm font-medium py-2 rounded-lg hover:bg-white/90 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 p-2">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Eatin"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Eatin Arafat</p>
            <p className="text-xs text-muted-foreground truncate">Free Account</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
