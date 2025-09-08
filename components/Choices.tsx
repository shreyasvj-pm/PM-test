import React from 'react';
import type { Choice } from '../types';

interface ChoicesProps {
  choices: Choice[];
  onSelectChoice: (choice: Choice) => void;
}

const Choices: React.FC<ChoicesProps> = ({ choices, onSelectChoice }) => {
  return (
    <div className="w-full animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => onSelectChoice(choice)}
          className="bg-gray-700/80 border border-gray-600 rounded-lg p-5 text-left transition-all duration-300 hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-800 border border-cyan-400 rounded-full flex items-center justify-center font-bold text-cyan-400">
              {choice.id}
            </div>
            <p className="flex-1 text-gray-200">{choice.text}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Choices;