import React, { useState, useEffect } from 'react';
import { Menu, X, Disc } from 'lucide-react';
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
    { id: SectionId.FEATURES, label: '交互亮点' },
    { id: SectionId.SHOWCASE, label: '桌搭美学' },
    { id: SectionId.SPECS, label: '硬核参数' },
    { id: SectionId.BUSINESS, label: '商业模式' },
    { id: SectionId.ROADMAP, label: '路线图' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
            <div className="bg-gradient-to-r from-cyan-400/90 to-fuchsia-500/90 p-2 rounded-lg text-white mr-3 shadow-[0_0_20px_rgba(0,243,255,0.4)]">
              <Disc size={24} />
            </div>
            <div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-slate-100'} block leading-none`}>灵境舱</span>
              <span className={`text-xs ${isScrolled ? 'text-slate-300' : 'text-slate-400'} font-medium tracking-[0.2em]`}>SPIRIT CABIN</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium hover:text-cyan-300 transition-colors ${isScrolled ? 'text-slate-200' : 'text-slate-100'}`}
              >
                {link.label}
              </button>
            ))}
          <button 
            onClick={() => scrollToSection(SectionId.BUSINESS)}
            className="bg-cyan-400/90 text-slate-900 px-5 py-2 rounded-full font-semibold hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,243,255,0.35)]"
          >
            查看版本价格
          </button>
        </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-100">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 absolute top-full left-0 w-full shadow-lg py-4 px-4 flex flex-col space-y-4 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-slate-100 font-medium py-2 border-b border-white/10"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection(SectionId.BUSINESS)}
            className="bg-cyan-400 text-slate-900 py-3 rounded-lg font-bold text-center w-full"
          >
            查看版本价格
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
