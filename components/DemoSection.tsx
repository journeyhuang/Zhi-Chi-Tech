import React from 'react';
import { Coins, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

const DemoSection: React.FC = () => {
  return (
    <section id={SectionId.BUSINESS} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-200 text-sm font-semibold border border-cyan-500/30">
            商业模式
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 font-display">
            硬件交个朋友，内容持续盈利
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-4">
            标准版低门槛触达大学生走量市场，Pro 版提升客单价；NFC 灵境卡与 DLC 动作包形成持续复购。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="glass-panel rounded-3xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">N.E.O. Core</h3>
              <span className="text-cyan-300 text-sm">极致性价比</span>
            </div>
            <p className="text-4xl font-bold text-white mb-4">￥299</p>
            <ul className="space-y-3 text-sm text-slate-300">
              {['POV 全息旋转显示', 'NFC 灵境卡换人', '基础角色套装'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-3xl p-8 border border-cyan-400/40 shadow-[0_0_35px_rgba(0,243,255,0.25)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">N.E.O. Pro</h3>
              <span className="text-fuchsia-300 text-sm">珍藏版</span>
            </div>
            <p className="text-4xl font-bold text-white mb-4">￥699-899</p>
            <ul className="space-y-3 text-sm text-slate-300">
              {['透明触控 + RGB 灯效', '离线语音识别', '联名角色优先体验'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-3xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">NFC 灵境卡</h3>
              <span className="text-cyan-300 text-sm">高毛利耗材</span>
            </div>
            <p className="text-4xl font-bold text-white mb-4">￥39/张</p>
            <ul className="space-y-3 text-sm text-slate-300">
              {['NFC 盲盒卡', '节日动作包（￥6-18）', '情人节送花 DLC'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-panel rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 font-display">商业模式画布</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-200">
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-4">
                <div className="flex items-center gap-2 text-cyan-200 mb-3">
                  <Coins size={16} />
                  硬件引流
                </div>
                <p className="text-slate-300">标准版低门槛触达大学生走量市场，建立角色入口。</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-full border border-white/10 p-2 text-slate-300">
                  <ArrowRight size={18} />
                </div>
              </div>
              <div className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-500/10 p-4">
                <div className="flex items-center gap-2 text-fuchsia-200 mb-3">
                  <Layers size={16} />
                  内容盈利
                </div>
                <p className="text-slate-300">NFC 卡与 DLC 动作包持续上新，形成高频复购。</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
              模式口号：硬件交个朋友，内容持续盈利。
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 font-display">课程需求匹配</h3>
            <p className="text-slate-300 leading-relaxed">
              硬件 + 内容双轮驱动的商业模式，适配创新创业课程展示。通过低门槛硬件建立用户基础，
              以内容与联名实现持续营收与品牌扩散。
            </p>
            <div className="mt-6 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-3 text-xs text-fuchsia-100">
              预计毛利主要来自 NFC 卡与 DLC 动作包，硬件承担规模效应与用户增长。
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-300">
              <Sparkles size={16} className="text-cyan-200" />
              IP 联名与节日款提升溢价空间。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
