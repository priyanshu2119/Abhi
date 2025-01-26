import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Track } from './pages/Track';
import { Impact } from './pages/Impact';
import { Rewards } from './pages/Rewards';
import { Distributors } from './pages/Distributors';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track" element={<Track />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/distributors" element={<Distributors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;