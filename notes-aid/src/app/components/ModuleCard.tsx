import React from "react";
// import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProgressBar from "./ProgressBar";

interface ModuleCardProps {
  module: number;
  topics: number;
  isActive: boolean;
  onClick: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  topics,
  isActive,
  onClick,
}) => {
  const total = 100;
  // const [done, setdone] = useState(20);
  
  // setdone(40);

  return (
    <div
      onClick={onClick}
      className={`
        p-3 
        rounded-lg 
        border 
        transition-all 
        cursor-pointer 
        hover:shadow-md
        ${
          isActive
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/50 dark:border-blue-400"
            : "border-slate-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700"
        }
      `}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              Module {module}
            </h3>
            <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
              {topics} topics
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
              isActive ? "rotate-180" : ""
            }`}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <ProgressBar total={total} completed={20} />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {20}/{total}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
