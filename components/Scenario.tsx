
import React from 'react';
import Card from './Card';

interface ScenarioProps {
  roundNumber: number;
  scenarioText: string;
}

const Scenario: React.FC<ScenarioProps> = ({ roundNumber, scenarioText }) => {
  return (
    <Card>
      <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">Round {roundNumber}</h2>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{scenarioText}</p>
    </Card>
  );
};

export default Scenario;
