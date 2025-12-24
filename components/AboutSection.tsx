import React from 'react';
import { SectionId } from '../types';
import { GraduationCap, Lightbulb, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">关于咫尺科技</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              我们是来自自动化专业的大学生创业团队。在《创新创业导论》课程中，我们关注到老龄化社会日益严重的“空巢”问题。
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              科技不应只是冰冷的算法和代码，更应是有温度的关怀。我们结合自动化控制、计算机视觉与人工智能技术，创立了“咫尺科技”。我们的愿景是用科技缩短心与心的距离，让爱不再有距离。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-orange-100 rounded-lg text-orange-600">
                  <GraduationCap size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-slate-900">专业背景</h4>
                  <p className="text-slate-600 mt-1">依托自动化专业优势，结合软硬件开发能力，打造稳定可靠的智能终端。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-orange-100 rounded-lg text-orange-600">
                  <Lightbulb size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-slate-900">创新理念</h4>
                  <p className="text-slate-600 mt-1">首创“数字亲情陪伴”模式，填补市场在深度情感交互领域的空白。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-orange-100 rounded-lg text-orange-600">
                  <Users size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-slate-900">社会责任</h4>
                  <p className="text-slate-600 mt-1">关注老年群体心理健康，用技术手段解决社会痛点，传递青年担当。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-transparent rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
            <img 
              src="https://picsum.photos/seed/teamwork/600/800" 
              alt="Student Team" 
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
              <p className="text-slate-800 font-medium italic">
                “我们希望每一位老人都能在科技的陪伴下，感受到家人的温暖。”
              </p>
              <p className="text-slate-500 text-sm mt-2 text-right">— 咫尺科技创始人团队</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
