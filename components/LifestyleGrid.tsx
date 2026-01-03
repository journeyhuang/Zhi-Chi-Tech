import React from 'react';
import { SectionId } from '../types';

const LifestyleGrid: React.FC = () => {
  return (
    <section id={SectionId.SHOWCASE} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
            桌搭美学升级
          </h2>
          <p className="text-slate-300 text-lg mt-4">
            极简外壳，赛博灵魂。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 md:col-span-2">
            <img
              src="/images/galley-hero.jpg"
              alt="Cyberpunk desktop setup"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-sm font-bold text-white backdrop-blur bg-black/40 px-3 py-1 rounded-full">
                赛博桌搭升级
              </span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-[#ff007f] transition-colors">
            <img
              src="/images/galley-nfc.jpg"
              alt="NFC interaction"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-sm font-bold text-white backdrop-blur bg-black/40 px-3 py-1 rounded-full">
                NFC 灵魂注入
              </span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-[#00f3ff] transition-colors">
            <img
              src="/images/galley-char.jpg"
              alt="Hologram character close-up"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-sm font-bold text-white backdrop-blur bg-black/40 px-3 py-1 rounded-full">
                128 像素全息细节
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleGrid;
