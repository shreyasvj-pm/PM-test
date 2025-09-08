import React from 'react';
import Card from './Card';
import type { Metrics } from '../types';

interface GameEndProps {
  onRestart: () => void;
  finalMetrics: Metrics;
}

const getSummaryMessage = (metrics: Metrics): string => {
    if (metrics.nps > 50 && metrics.revenue > 120) {
        return "A true visionary! You masterfully balanced customer happiness and revenue growth, creating a beloved and profitable product.";
    }
    if (metrics.adoption > 75) {
        return "Growth champion! You focused on expanding your user base, making the product a market leader, though perhaps at the cost of stability or revenue.";
    }
    if (metrics.nps > 60) {
        return "Customer advocate! You prioritized user satisfaction above all, creating a stable and trusted product, even if it meant slower growth.";
    }
    if (metrics.revenue < 80) {
        return "A tough journey. The path was difficult, and sacrifices were made. A valuable learning experience in the harsh realities of product management.";
    }
    return "A balanced approach. You navigated the treacherous waters of product management with a steady hand, making difficult trade-offs along the way.";
}

const GameEnd: React.FC<GameEndProps> = ({ onRestart, finalMetrics }) => {
  const summaryMessage = getSummaryMessage(finalMetrics);

  return (
    <Card className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">Adventure Complete</h2>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
        {summaryMessage}
      </p>
       <div className="bg-gray-900/50 rounded-lg p-4 mb-8 border border-gray-700">
        <h3 className="text-lg font-bold text-amber-400 mb-3">Final Metrics</h3>
        <div className="flex justify-around text-center">
            <div>
                <p className="text-2xl font-bold text-cyan-400">{finalMetrics.adoption}%</p>
                <p className="text-sm text-gray-400">Adoption</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-cyan-400">{finalMetrics.nps}</p>
                <p className="text-sm text-gray-400">NPS</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-cyan-400">${finalMetrics.revenue}k</p>
                <p className="text-sm text-gray-400">Revenue</p>
            </div>
        </div>
      </div>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
        Reflect on which trade-offs paid off. In each round, balancing technical debt, AI ambition, platform growth, and legacy management led to different outcomes.
      </p>
      <button
        onClick={onRestart}
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Play Again
      </button>
    </Card>
  );
};

export default GameEnd;