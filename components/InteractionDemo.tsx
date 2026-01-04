import React from 'react';

const InteractionDemo: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
              <span className="text-[#ff007f]">她能感知你的触碰</span>
              <span className="block text-lg md:text-xl text-[#ff5aa8] font-semibold mt-3">
                触感情绪引擎
              </span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mt-5 max-w-xl">
              内置透明电容触控膜。轻触她的脸颊，她会害羞脸红。零距离的连接。
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold text-[#ff5aa8] bg-[#ff007f]/10 border border-[#ff007f]/40">
                纳米银导电网格
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-gradient-to-br from-pink-500 via-fuchsia-500 to-rose-400 p-[2px] shadow-[0_0_30px_rgba(255,0,127,0.4)]">
              <div className="relative rounded-[1.9rem] overflow-hidden border border-pink-500/60 bg-black/40">
                <video
                  className="w-full h-full object-cover aspect-[4/3]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/videos/interaction-shy.mp4"
                />
                <span className="absolute top-4 right-4 rounded-full bg-black/70 text-pink-200 text-xs font-semibold px-3 py-1 border border-pink-500/50 backdrop-blur">
                  Pro 功能
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractionDemo;
