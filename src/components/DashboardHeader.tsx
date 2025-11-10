import { ChevronDown, Globe } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <header className="bg-gradient-to-r from-teal via-teal-light to-green py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 text-white">
          <div>
            <div className="text-xs opacity-90">Cash Wallet</div>
            <div className="font-semibold">0.001%</div>
          </div>
          <div>
            <div className="text-xs opacity-90">Bank Wallet</div>
            <div className="font-semibold">0.001%</div>
          </div>
          <div>
            <div className="text-xs opacity-90">Mobile Banking</div>
            <div className="font-semibold">0.007%</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-white text-teal px-4 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition-colors">
            Shoes
            <span className="text-xs ml-1">pending business</span>
          </button>
          <button className="flex items-center gap-2 text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors">
            <Globe className="w-4 h-4" />
            <span className="text-sm">English</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
