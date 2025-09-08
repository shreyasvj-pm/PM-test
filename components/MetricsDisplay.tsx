import React, { useEffect, useState } from 'react';
import type { Metrics, MetricImpact } from '../types';

interface MetricBarProps {
  label: string;
  value: number;
  icon: string;
  change: number | null;
  barColorClass: string;
  barWidthPercent: number;
  unit?: string;
}

const MetricChangeIndicator: React.FC<{ change: number }> = ({ change }) => {
    if (change === 0) return null;
    const isPositive = change > 0;
    const text = isPositive ? `+${change}` : `${change}`;
    const colorClass = isPositive ? 'text-green-400' : 'text-red-400';

    return (
        <span className={`absolute -top-5 right-0 font-bold animate-pop-in ${colorClass}`}>
            {text}
        </span>
    );
};


const MetricBar: React.FC<MetricBarProps> = ({ label, value, icon, change, barColorClass, barWidthPercent, unit = '' }) => {
  const [showChange, setShowChange] = useState(false);

  useEffect(() => {
    if (change !== null) {
      setShowChange(true);
      const timer = setTimeout(() => setShowChange(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [change]);
  
  return (
    <div className="flex-1 bg-gray-800/60 p-4 rounded-lg border border-gray-700 relative">
      <div className="flex justify-between items-baseline mb-1">
        <p className="text-sm font-medium text-gray-300">{icon} {label}</p>
        <p className="text-xl font-bold text-white">{value}{unit}</p>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className={`${barColorClass} h-2 rounded-full transition-all duration-500 ease-out`} 
          style={{ width: `${barWidthPercent}%` }}
        ></div>
      </div>
      {showChange && change !== null && <MetricChangeIndicator change={change} />}
    </div>
  );
};


interface MetricsDisplayProps {
  metrics: Metrics;
  changes: MetricImpact | null;
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metrics, changes }) => {
  const { adoption, nps, revenue } = metrics;

  const getNpsColor = (npsValue: number): string => {
    if (npsValue < -20) return 'bg-red-500';
    if (npsValue < 20) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const npsWidth = ((nps + 100) / 200) * 100;
  // Assuming max revenue for the bar is around 200k for visual purposes
  const revenueWidth = Math.min((revenue / 200) * 100, 100);

  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 animate-fade-in">
      <MetricBar 
        label="Adoption"
        icon="📈"
        value={adoption}
        change={changes?.adoption ?? null}
        barColorClass="bg-cyan-500"
        barWidthPercent={adoption}
        unit="%"
      />
      <MetricBar 
        label="Customer NPS"
        icon="😊"
        value={nps}
        change={changes?.nps ?? null}
        barColorClass={getNpsColor(nps)}
        barWidthPercent={npsWidth}
      />
      <MetricBar 
        label="Revenue"
        icon="💰"
        value={revenue}
        change={changes?.revenue ?? null}
        barColorClass="bg-amber-500"
        barWidthPercent={revenueWidth}
        unit="k"
      />
    </div>
  );
};

export default MetricsDisplay;