import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { PlayPage } from './pages/PlayPage';
import { CreateGamePage } from './pages/CreateGamePage';
import { Leaderboard } from './pages/LeaderboardPage';
import './index.css'; // Tailwind base imports

function App() {
  const [currency] = useState<number>(1000);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu currency={currency} />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="/create" element={<CreateGamePage />} />
        <Route
          path="/leaderboard"
          element={<Leaderboard  />}
        />
      </Routes>
    </Router>
  );
}

export default App;
