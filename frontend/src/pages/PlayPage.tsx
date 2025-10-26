import type{ FC } from 'react';
import { Link } from 'react-router-dom';

export const PlayPage: FC = () => (
  <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow text-center">
    <h2 className="text-2xl font-bold mb-4">Play Game</h2>
    <p className="mb-6">Game interface coming soon.</p>
    <Link to="/" className="text-blue-500 hover:underline">
      Back to Menu
    </Link>
  </div>
);
