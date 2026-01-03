import React from 'react';

const HoloDeviceDemo: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 group">
      <div className="relative mx-auto w-[260px] sm:w-[300px] aspect-[3/4] rounded-[999px] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-40 glass-shine bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

        <div className="absolute inset-6 rounded-[999px] border border-white/10 bg-black/40 flex items-center justify-center">
          <div className="relative w-40 h-40 sm:w-44 sm:h-44">
            <img
              src="/images/galley-char.jpg"
              alt="Hologram character"
              className="h-full w-full object-cover rounded-full opacity-80 hologram-effect holo-spin holo-flicker group-hover:opacity-100 group-hover:animate-[holo-spin_2.5s_linear_infinite]"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/40 to-fuchsia-500/40 blur-2xl opacity-60"></div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-20">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-12 rounded-full bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800 border border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.45)]"></div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[55%] h-2 rounded-full bg-cyan-300/40 led-breathe"></div>
        </div>
      </div>

      <div className="absolute left-0 top-16 flex items-center gap-2 text-xs text-slate-200">
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">144 LEDs/m</span>
        <div className="h-px w-16 bg-white/20"></div>
      </div>
      <div className="absolute right-0 bottom-10 flex items-center gap-2 text-xs text-slate-200">
        <div className="h-px w-16 bg-white/20"></div>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">BLDC Motor</span>
      </div>
    </div>
  );
};

export default HoloDeviceDemo;
