
import React from 'react';
import Card from './Card';

interface OutcomeProps {
  outcomeText: string;
  isLastRound: boolean;
  onNext: () => void;
}

const Outcome: React.FC<OutcomeProps> = ({ outcomeText, isLastRound, onNext }) => {
  return (
    <Card className="flex flex-col items-center">
      <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">Outcome</h3>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center mb-8">{outcomeText}</p>
      <button
        onClick={onNext}
        className="px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
      >
        {isLastRound ? 'Finish Game' : 'Next Round'}
      </button>
    </Card>
  );
};

export default Outcome;
