import React, { useState, useEffect } from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: SectionId.HOME, label: '首页' },
    { id: SectionId.PRODUCT, label: '产品介绍' },
    { id: SectionId.DEMO, label: '在线体验' },
    { id: SectionId.ABOUT, label: '关于我们' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
            <div className="bg-gradient-to-r from-orange-400 to-red-500 p-2 rounded-lg text-white mr-3">
              <HeartPulse size={24} />
            </div>
            <div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-slate-800' : 'text-slate-900'} block leading-none`}>咫尺科技</span>
              <span className={`text-xs ${isScrolled ? 'text-slate-500' : 'text-slate-600'} font-medium`}>ZhiChi Tech</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-800'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection(SectionId.CONTACT)}
              className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg"
            >
              联系我们
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-800">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-slate-700 font-medium py-2 border-b border-slate-100"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="bg-orange-500 text-white py-3 rounded-lg font-bold text-center w-full"
          >
            联系我们
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;