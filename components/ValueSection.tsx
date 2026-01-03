import React from 'react';
import { CreditCard, Mic, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionId } from '../types';

const features = [
  {
    icon: <CreditCard size={28} />,
    title: 'NFC 灵境卡换人系统',
    description: '刷卡即换角色，卡片内置加密鉴权，商业核心同时保留收藏与仪式感。',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'POV 全息旋转视觉效果',
    description: '视觉暂留技术呈现 3D 全息旋转，替代传统静态手办的展示形态。',
  },
  {
    icon: <Mic size={28} />,
    title: 'Pro 版触控 + 离线语音',
    description: '透明触控、离线语音与 RGB 灯效联动，支持“跳个舞/切换角色”等指令。',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: '节日动作包与内容上新',
    description: 'NFC 盲盒卡 + DLC 动作包持续更新，节日可选“情人节送花”等礼物动作。',
  },
];

const ValueSection: React.FC = () => {
  return (
    <section id={SectionId.FEATURES} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-200 text-sm font-semibold border border-fuchsia-500/30">
            交互亮点
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 font-display">
            让桌面角色“活起来”的关键链路
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-4">
            灵境舱聚焦宿舍桌面陪伴与互动娱乐，把换人、互动、内容更新串成完整体验闭环。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-200 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-panel rounded-3xl p-8 border border-white/10 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 font-display">宿舍桌面陪伴</h3>
            <p className="text-slate-300 leading-relaxed">
              灵境舱替代传统静态手办，把全息角色、动态动作与语音反馈组合成“可互动的收藏品”。
              既是桌面摆件，也是一台能回应的陪伴装置。
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-200">
              {['宿舍桌面陪伴', '互动娱乐刷卡换人', '节日送礼动作包'].map((item) => (
                <div key={item} className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">交互闭环</h3>
            <ol className="space-y-3 text-sm text-slate-300">
              {[
                'NFC 刷卡解锁角色',
                '旋转显示呈现动态动作',
                '触控/语音触发反馈',
                '节日动作包持续上新',
              ].map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-200 flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
