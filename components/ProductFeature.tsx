import React from 'react';
import { Box, User, Mic, HeartHandshake } from 'lucide-react';
import { SectionId } from '../types';

const features = [
  {
    icon: <Box size={32} />,
    title: "3D全息成像",
    description: "采用裸眼3D光场显示技术，将子女形象立体呈现，仿佛真人就在眼前，打破屏幕的隔阂感。"
  },
  {
    icon: <User size={32} />,
    title: "数字人复刻",
    description: "只需少量照片和语音素材，AI深度学习即可生成高保真数字分身，还原子女的神态与声音。"
  },
  {
    icon: <Mic size={32} />,
    title: "自然语音交互",
    description: "基于大语言模型，能理解老人的方言、唠叨，进行有温度的多轮对话，不仅仅是问答，更是谈心。"
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "情感计算引擎",
    description: "实时分析老人情绪状态，主动发起关怀。检测到老人低落时，会自动讲笑话或播放子女的问候视频。"
  }
];

const ProductFeature: React.FC = () => {
  return (
    <section id={SectionId.PRODUCT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">核心科技，为爱赋能</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            我们将前沿的AI与光学技术融入“光影亲情”终端，只为给老人最真实的陪伴体验。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-orange-500 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">不仅仅是硬件，更是连接的纽带</h3>
              <ul className="space-y-4">
                {[
                  "无需佩戴眼镜，一键启动，零学习成本",
                  "子女端APP实时同步，随时介入视频通话",
                  "健康数据监测，异常情况自动预警",
                  "家庭相册云端共享，随时回味温馨时刻"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img 
                src="https://picsum.photos/seed/tech/800/600" 
                alt="Product Lifestyle" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/90"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;