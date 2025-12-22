import React from 'react';
import { ChevronRight, Heart } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    document.getElementById(SectionId.DEMO)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
              大学生创新创业项目
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              光影连接亲情 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                让陪伴近在咫尺
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              “咫尺科技”致力于为独居老人打造智能情感陪伴终端。通过3D全息成像技术复刻子女形象，打破时空界限，为老人提供全天候的情感慰藉与智能看护。
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToDemo}
                className="flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-xl"
              >
                立即体验数字亲情
                <ChevronRight className="ml-2" size={20} />
              </button>
              <button className="flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
                了解更多
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white animate-float">
              <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="Elderly person smiling" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">系统在线 - 情感连接中</span>
                </div>
                <p className="text-white/90 text-sm">
                  "虽然孩子在千里之外，但感觉他就在我身边。"
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-full text-red-500">
                <Heart size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs text-slate-500">情感陪伴指数</p>
                <p className="font-bold text-slate-800">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;