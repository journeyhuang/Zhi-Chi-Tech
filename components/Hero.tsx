import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SectionId } from '../types';
import HoloVideoPlayer from './HoloVideoPlayer';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById(SectionId.BUSINESS)?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFeatures = () => {
    document.getElementById(SectionId.FEATURES)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-fuchsia-500/10 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-cyan-400/10 text-cyan-200 text-sm font-semibold mb-6 border border-cyan-400/30">
              <span className="flex h-2 w-2 rounded-full bg-cyan-300 mr-2 animate-pulse-glow"></span>
              年轻人的第一台桌面级全息数字手办
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-display">
              <span className="text-white">灵境舱</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#ff007f]">
                Spirit Cabin
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400">
                打造年轻人的第一台桌面级全息数字手办
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              面向大学生核心走量市场、二次元/ACG 爱好者与硬件极客的桌面全息陪伴舱。以 POV 旋转显示、
              NFC 刷卡换人与离线语音交互，让角色在宿舍桌面“动起来”。
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-slate-300 mb-8">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">宿舍桌面陪伴</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">NFC 刷卡解锁角色</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">节日 DLC 动作包</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToFeatures}
                className="flex items-center justify-center px-8 py-4 bg-cyan-400 text-slate-900 rounded-full font-bold text-lg hover:bg-cyan-300 transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(0,243,255,0.35)]"
              >
                查看交互亮点
                <ChevronRight className="ml-2" size={20} />
              </button>
              <button
                onClick={scrollToPricing}
                className="flex items-center justify-center px-8 py-4 bg-white/5 text-slate-100 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                查看版本价格
              </button>
            </div>
            <div className="mt-6 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                <span>Early Bird Batch: 1000 Units</span>
                <span className="text-slate-500">Limited Availability</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[60%] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"></div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-purple-500/10 to-transparent"></div>
            <HoloVideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
