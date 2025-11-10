import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: "teal" | "purple" | "green" | "blue";
}

const colorClasses = {
  teal: "from-teal-dark to-teal",
  purple: "from-purple/90 to-purple",
  green: "from-green to-teal-light",
  blue: "from-secondary to-blue",
};

export const StatCard = ({ title, value, icon: Icon, color }: StatCardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorClasses[color]} p-6 text-white`}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-wider opacity-90 mb-1">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
          </div>
          <div className="p-2 bg-white/20 rounded-lg">
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-16 opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full h-12 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
