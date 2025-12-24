import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueSection from './components/ValueSection';
import ProductFeature from './components/ProductFeature';
import DemoSection from './components/DemoSection';
import FaqSection from './components/FaqSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <ValueSection />
        <ProductFeature />
        <DemoSection />
        <FaqSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
