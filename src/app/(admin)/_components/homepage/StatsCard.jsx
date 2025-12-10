import { ArrowUpRight } from "lucide-react";

// Reusable Currency Card Component
function CurrencyCard({ icon, name, amount, bg, iconBg }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3 overflow-hidden">
      {/* Icon Section */}
      <div className="flex items-center justify-between">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${bg}`}
        >
          {icon}
        </div>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center ${iconBg}`}
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Text Section */}
      <div>
        <p className="text-gray-500 text-sm">{name}</p>
        <p className="text-xl font-semibold">{amount}</p>
      </div>
    </div>
  );
}
export default CurrencyCard;
