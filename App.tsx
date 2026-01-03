import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueSection from './components/ValueSection';
import ProductFeature from './components/ProductFeature';
import DemoSection from './components/DemoSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent selection:bg-cyan-300/30 selection:text-cyan-100">
      <Navbar />
      <main>
        <Hero />
        <ValueSection />
        <ProductFeature />
        <DemoSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
