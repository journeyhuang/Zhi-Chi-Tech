import React from 'react';
import { Cpu, Fan, Zap, Layers } from 'lucide-react';
import { SectionId } from '../types';

const coreSpecs = [
  {
    icon: <Cpu size={26} />,
    title: 'STM32F407ZGT6 主控',
    description: '168MHz + FPU，保障转子控制与光场渲染的实时性。',
  },
  {
    icon: <Fan size={26} />,
    title: '静音 BLDC 电机',
    description: '稳定转速 + 过孔导电滑环，实现 360° 无限旋转与低噪体验。',
  },
  {
    icon: <Zap size={26} />,
    title: '144 灯/米高密度灯带',
    description: '等效 128x128 像素，细节呈现更清晰。',
  },
  {
    icon: <Layers size={26} />,
    title: 'CNC 6061 铝合金',
    description: '金属底座 + 高透 PMMA/高硼硅玻璃舱体，AF 防指纹涂层更耐用。',
  },
];

const systemSpecs = [
  { label: '显示原理', value: 'POV 旋转光场成像' },
  { label: '角色切换', value: 'NFC 灵境卡（加密鉴权）' },
  { label: '交互方式', value: '触控（Pro）+ 离线语音 + RGB 拾音灯效' },
  { label: '等效分辨率', value: '128 x 128' },
  { label: '灯带密度', value: '144 LEDs / m' },
  { label: '供电方式', value: '桌面 USB-C / 适配器' },
];

const ProductFeature: React.FC = () => {
  return (
    <section id={SectionId.SPECS} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-200 text-sm font-semibold border border-cyan-500/30">
            硬核参数
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 font-display">
            自动化专业背景下的硬件深度
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-4">
            以稳定转子控制与高密度灯带为核心，结合结构与电控设计，突出硬件极客关心的技术细节。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreSpecs.map((spec, index) => (
              <div key={index} className="glass-panel rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 text-fuchsia-200 flex items-center justify-center mb-4">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{spec.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>

          <div className="glass-panel rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 font-display">系统规格一览</h3>
            <dl className="space-y-4">
              {systemSpecs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                  <dt className="text-slate-400">{spec.label}</dt>
                  <dd className="text-slate-100 font-semibold">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3 text-xs text-cyan-200">
              结构与电控兼顾量产可行性，适合课程创新创业展示与众筹落地。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
