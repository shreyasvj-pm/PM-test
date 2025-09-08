import React, { useState, useCallback } from 'react';
import { GAME_ROUNDS, TOTAL_ROUNDS } from './constants';
import Scenario from './components/Scenario';
import Choices from './components/Choices';
import Outcome from './components/Outcome';
import GameEnd from './components/GameEnd';
import MetricsDisplay from './components/MetricsDisplay';
import type { Choice, MetricImpact, Metrics } from './types';

const INITIAL_METRICS: Metrics = {
    adoption: 50,
    nps: 10,
    revenue: 100,
};

const App: React.FC = () => {
  const [currentRound, setCurrentRound] = useState(1);
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>(null);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [metrics, setMetrics] = useState<Metrics>(INITIAL_METRICS);
  const [lastMetricChange, setLastMetricChange] = useState<MetricImpact | null>(null);

  const handleChoiceSelect = useCallback((choice: Choice) => {
    setSelectedOutcome(choice.outcome);
    setLastMetricChange(choice.metrics);
    setMetrics(prev => ({
        adoption: Math.max(0, Math.min(100, prev.adoption + choice.metrics.adoption)),
        nps: Math.max(-100, Math.min(100, prev.nps + choice.metrics.nps)),
        revenue: Math.max(0, prev.revenue + choice.metrics.revenue),
    }));
  }, []);

  const handleNextRound = useCallback(() => {
    setLastMetricChange(null);
    if (currentRound < TOTAL_ROUNDS) {
      setCurrentRound(prev => prev + 1);
      setSelectedOutcome(null);
    } else {
      setIsGameFinished(true);
    }
  }, [currentRound]);

  const handleRestart = useCallback(() => {
    setCurrentRound(1);
    setSelectedOutcome(null);
    setIsGameFinished(false);
    setMetrics(INITIAL_METRICS);
    setLastMetricChange(null);
  }, []);

  const currentRoundData = GAME_ROUNDS[currentRound - 1];

  const renderContent = () => {
    if (isGameFinished) {
      return <GameEnd onRestart={handleRestart} finalMetrics={metrics} />;
    }

    if (selectedOutcome) {
      return (
        <Outcome 
          outcomeText={selectedOutcome} 
          onNext={handleNextRound}
          isLastRound={currentRound === TOTAL_ROUNDS}
        />
      );
    }

    if (currentRoundData) {
      return (
        <>
          <Scenario
            roundNumber={currentRoundData.roundNumber}
            scenarioText={currentRoundData.scenario}
          />
          <Choices
            choices={currentRoundData.choices}
            onSelectChoice={handleChoiceSelect}
          />
        </>
      );
    }

    return null; // Should not happen
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
        <header className="text-center mb-6 w-full max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-2">
                Product Manager Adventure
            </h1>
            <p className="text-gray-400 text-lg">Your strategic choices will shape your product's destiny.</p>
        </header>
        <main className="w-full max-w-4xl">
            <MetricsDisplay metrics={metrics} changes={lastMetricChange} />
            <div className="mt-6">
                {renderContent()}
            </div>
        </main>
        <footer className="text-center mt-8 text-gray-500 text-sm">
            <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
    </div>
  );
};

export default App;