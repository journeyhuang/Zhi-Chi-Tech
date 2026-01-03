import React from 'react';

const HoloVideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="relative mx-auto w-[260px] sm:w-[300px] aspect-[3/4] rounded-[999px] overflow-hidden border border-white/10 bg-white/5">
        <video
          src="/videos/holo-spin.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent)]"></div>
        <div className="pointer-events-none absolute inset-0 scanline-overlay"></div>

        <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
          Live Preview
        </div>

        <button
          type="button"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold text-white backdrop-blur-md hover:border-cyan-300/70 hover:text-cyan-100 transition-colors"
        >
          360 View
        </button>
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-56 rounded-full bg-black/60 blur-2xl shadow-[0_0_30px_rgba(0,243,255,0.25)]"></div>
    </div>
  );
};

export default HoloVideoPlayer;
