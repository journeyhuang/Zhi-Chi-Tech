import React from 'react';
import { ChevronRight, Sparkles, Disc } from 'lucide-react';
import { SectionId } from '../types';

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
              灵境舱 Spirit Cabin
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
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative glass-panel rounded-3xl overflow-hidden p-8 border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,243,255,0.25),_transparent_55%)] opacity-60"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between text-sm text-slate-300 mb-6">
                  <span className="flex items-center gap-2">
                    <Disc size={16} />
                    Holo Core v1.0
                  </span>
                  <span className="text-cyan-300">旋转视觉演示</span>
                </div>

                <div className="relative h-72 md:h-80 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-white/10 overflow-hidden">
                  <div className="absolute inset-x-0 top-8 flex items-center justify-center">
                    <div className="relative w-44 h-44 md:w-52 md:h-52">
                      <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl animate-pulse-glow"></div>
                      <div className="absolute inset-6 rounded-full border border-cyan-300/50 animate-spin-slow"></div>
                      <div className="absolute inset-12 rounded-full border border-fuchsia-400/40 animate-spin-slow"></div>
                      <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-cyan-300/30 to-fuchsia-400/20 backdrop-blur-sm"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/40 rounded-full px-4 py-1 text-cyan-200 text-xs">
                      <Sparkles size={14} />
                      POV 旋转光场成像
                    </div>
                    <p className="text-slate-400 text-xs mt-3">铝合金底座 · 高透亚克力舱体</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-slate-300">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center">
                    静音 BLDC 电机
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center">
                    144 灯/米
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center">
                    NFC 灵境卡
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel rounded-2xl px-5 py-4 border border-white/10">
              <p className="text-xs text-slate-400">众筹目标</p>
              <p className="text-xl font-bold text-white">首批 1000 台</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
