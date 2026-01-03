import React from 'react';
import { Flag, Rocket, Link2, Trophy } from 'lucide-react';
import { SectionId } from '../types';

const roadmap = [
  {
    title: '阶段 1｜摩点众筹预热',
    description: '在摩点发布产品故事与核心技术，收集首批意向用户与反馈。',
    icon: <Flag size={20} />,
  },
  {
    title: '阶段 2｜校园内测',
    description: '在宿舍与社团场景试用，验证交互体验与稳定性。',
    icon: <Rocket size={20} />,
  },
  {
    title: '阶段 3｜游戏 IP 联名',
    description: '与热门游戏 IP 联名（如《崩坏：星穹铁道》），推出限定角色卡与动作包。',
    icon: <Link2 size={20} />,
  },
  {
    title: '阶段 4｜量产发售',
    description: '优化供应链与模具，启动稳定批量交付。',
    icon: <Trophy size={20} />,
  },
];

const FaqSection: React.FC = () => {
  return (
    <section id={SectionId.ROADMAP} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-200 text-sm font-semibold border border-fuchsia-500/30">
            路线图
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 font-display">
            众筹计划与 IP 联名节奏
          </h2>
          <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
            用阶段式节奏推进产品落地，先验证体验，再通过联名与量产放大影响力。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmap.map((item) => (
            <div key={item.title} className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4 text-cyan-200">
                <span className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                  {item.icon}
                </span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-panel rounded-3xl p-8 border border-white/10 text-center">
          <p className="text-slate-300">
            联名方向覆盖 ACG、校园社团与城市文化 IP，打造可收藏、可分享的桌面级全息内容生态。
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
