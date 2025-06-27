import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import RedirectHandler from './components/RedirectHandler';

const App = () => {
  const urls = JSON.parse(localStorage.getItem('urls')) || [];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:code" element={<RedirectHandler urls={urls} />} />
      </Routes>
    </Router>
  );
};

export default App;
