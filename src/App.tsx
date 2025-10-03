import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Biography from './pages/Biography';
import MusicPage from './pages/Music';
import LivePerformances from './pages/LivePerformances';
import Contact from './pages/Contact';
import ContactButtons from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biografie" element={<Biography />} />
            <Route path="/muziek" element={<MusicPage />} />
            <Route path="/optredens" element={<LivePerformances />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ContactButtons />
      </div>
    </Router>
  );
}

export default App;