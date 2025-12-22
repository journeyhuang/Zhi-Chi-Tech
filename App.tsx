import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductFeature from './components/ProductFeature';
import DemoSection from './components/DemoSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <ProductFeature />
        <DemoSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;