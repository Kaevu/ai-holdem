import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

interface MenuProps {
  currency: number;
}

export const Menu: FC<MenuProps> = ({ currency }) => {
  const { dark, toggle } = useTheme();
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-slate-900">
      <div className="max-w-lg w-full">
        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700 p-6 text-white">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="text-3xl">♠️</span>
                <h1 className="text-3xl font-bold tracking-tight">AI Poker</h1>
              </div>
              <button
                onClick={toggle}
                className="px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-medium"
                aria-label="Toggle theme"
              >
                {dark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
            <p className="text-emerald-100 text-sm">Test your skills against AI opponents</p>
          </div>

          {/* Balance Display */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-gray-700 dark:to-gray-750 p-6 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300 font-medium">Your Balance</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span className="text-3xl font-bold text-gray-900 dark:text-gray-100 font-mono">
                  ${currency.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 space-y-4">
            <Link
              to="/play"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-xl">🎮</span>
              <span>Join Game</span>
            </Link>
            
            <Link
              to="/create"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-xl">✨</span>
              <span>Create Game</span>
            </Link>

            <Link
              to="/leaderboard"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-xl font-semibold border-2 border-gray-300 dark:border-gray-600 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-xl">🏆</span>
              <span>View Leaderboard</span>
            </Link>
          </div>

          {/* Footer Stats/Info */}
          <div className="bg-gray-50 dark:bg-gray-750 p-4 text-center border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <span>♥️</span>
                <span>♦️</span>
                <span>♣️</span>
                <span>♠️</span>
              </div>
              <span className="text-xs">Good luck at the tables!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};