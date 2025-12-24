import React from 'react';
import { HeartPulse, Radar, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionId } from '../types';

const painPoints = [
  {
    title: '距离与时间的割裂',
    description: '异地生活让子女难以持续陪伴，老人日常情绪缺乏稳定回应。',
  },
  {
    title: '沟通质量不高',
    description: '电话聊天碎片化，难以传递表情与情绪，陪伴感不足。',
  },
  {
    title: '关怀与看护缺口',
    description: '健康状态变化不易察觉，紧急情况缺少及时提醒。',
  },
];

const solutionPillars = [
  {
    icon: <Sparkles size={26} />,
    title: '立体呈现',
    description: '裸眼3D光场技术，让“看见”更真实，陪伴更有温度。',
  },
  {
    icon: <Radar size={26} />,
    title: '情感理解',
    description: '多轮对话 + 情绪识别，主动关怀，而非机械答复。',
  },
  {
    icon: <ShieldCheck size={26} />,
    title: '家庭守护',
    description: '健康与异常提醒同步子女端，远程也能安心。',
  },
];

const flowSteps = [
  '采集子女照片与语音素材，快速生成数字人',
  '终端设备部署到家中，随插即用',
  '全天候对话陪伴，主动记录情绪变化',
  '子女端实时同步，必要时介入通话',
];

const stats = [
  { label: '核心模块验证', value: '3 项' },
  { label: '情感陪伴场景', value: '8+' },
  { label: '交互响应时间', value: '< 1s' },
];

const ValueSection: React.FC = () => {
  return (
    <section id={SectionId.VALUE} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            <HeartPulse size={16} />
            为什么是“光影亲情”
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 font-display">
            从真实痛点出发的陪伴方案
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mt-4">
            我们把“看得见、聊得好、守得住”做成一个完整闭环，让老人感受到日常的真实陪伴。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {solutionPillars.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 border border-orange-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">体验流程</h3>
            <ol className="space-y-4">
              {flowSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-slate-600 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-900 text-white rounded-2xl p-6 text-center shadow-xl">
                <p className="text-2xl font-bold mb-2 font-display">{stat.value}</p>
                <p className="text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
