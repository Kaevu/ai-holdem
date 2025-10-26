import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

interface LeaderboardEntry {
  rank: number;
  username: string;
  balance: number;
  gamesPlayed: number;
  winRate: number;
}

// Mock data - replace with your actual data
const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, username: 'PokerPro', balance: 50000, gamesPlayed: 342, winRate: 68 },
  { rank: 2, username: 'AllInAce', balance: 42500, gamesPlayed: 289, winRate: 64 },
  { rank: 3, username: 'BluffMaster', balance: 38200, gamesPlayed: 256, winRate: 61 },
  { rank: 4, username: 'CardShark', balance: 35100, gamesPlayed: 198, winRate: 59 },
  { rank: 5, username: 'ChipLeader', balance: 32800, gamesPlayed: 223, winRate: 57 },
  { rank: 6, username: 'RiverRat', balance: 28900, gamesPlayed: 187, winRate: 55 },
  { rank: 7, username: 'FoldKing', balance: 25600, gamesPlayed: 165, winRate: 53 },
  { rank: 8, username: 'BetBoss', balance: 23400, gamesPlayed: 142, winRate: 51 },
  { rank: 9, username: 'CallMaybe', balance: 21100, gamesPlayed: 134, winRate: 49 },
  { rank: 10, username: 'CheckChamp', balance: 19800, gamesPlayed: 128, winRate: 47 },
];

export const Leaderboard: FC = () => {
  const { dark, toggle } = useTheme();

  return (
    <div className="max-w-4xl mx-auto mt-20 p-8 bg-white dark:bg-gray-800 rounded-lg shadow text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Leaderboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Top players by balance</p>
        </div>
        <button
          onClick={toggle}
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Rank</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Player</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Balance</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Games</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Win Rate</th>
            </tr>
          </thead>
          <tbody>
            {mockLeaderboard.map((entry) => (
              <tr
                key={entry.rank}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {entry.rank <= 3 && (
                      <span className="text-lg">
                        {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉'}
                      </span>
                    )}
                    <span className="font-medium">{entry.rank}</span>
                  </div>
                </td>
                <td className="py-4 px-4 font-medium">{entry.username}</td>
                <td className="py-4 px-4 text-right font-mono">${entry.balance.toLocaleString()}</td>
                <td className="py-4 px-4 text-right text-gray-600 dark:text-gray-400">{entry.gamesPlayed}</td>
                <td className="py-4 px-4 text-right">
                  <span className={`font-medium ${
                    entry.winRate >= 60 ? 'text-green-600 dark:text-green-400' :
                    entry.winRate >= 50 ? 'text-gray-900 dark:text-gray-100' :
                    'text-red-600 dark:text-red-400'
                  }`}>
                    {entry.winRate}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          ← Back to Menu
        </Link>
      </div>
    </div>
  );
};