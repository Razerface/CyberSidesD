import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}