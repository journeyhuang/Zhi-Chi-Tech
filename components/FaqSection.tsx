import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionId } from '../types';

const faqs = [
  {
    question: '这是真实硬件还是网页演示？',
    answer: '本页面为课程项目的产品展示与交互演示，呈现的是我们设想的终端体验与技术路径。',
  },
  {
    question: '没有佩戴设备，老人也能看到 3D 影像吗？',
    answer: '目标是实现裸眼3D显示，让老人无需额外设备即可看到立体影像，降低使用门槛。',
  },
  {
    question: '数字人会不会很“机械”？',
    answer: '我们强调“情感计算 + 多轮对话”，让回应更有温度，同时避免生硬的问答。',
  },
  {
    question: '隐私和安全如何保障？',
    answer: '计划采用本地加密与家庭授权机制，确保素材与对话仅在家庭内部使用。',
  },
  {
    question: '子女可以远程参与吗？',
    answer: '支持子女端同步关键状态，必要时可远程介入或进行视频通话。',
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id={SectionId.FAQ} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">常见问题</h2>
          <p className="text-slate-600 mt-3">我们先替你回答最常被问到的 5 个问题。</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === activeIndex;
            return (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-slate-900 font-semibold">{faq.question}</span>
                  <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-5 bg-white text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
