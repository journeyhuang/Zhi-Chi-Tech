import React from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin, Disc } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 text-slate-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center text-white mb-6">
              <Disc size={28} className="mr-3 text-cyan-300" />
              <span className="text-2xl font-bold">灵境舱 Spirit Cabin</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              桌面级全息数字手办创新项目，融合硬件美学与沉浸交互，让角色在你的桌面真实“活起来”。
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cyan-400/20 transition-colors cursor-pointer">
                <span className="font-bold">WX</span>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-fuchsia-400/20 transition-colors cursor-pointer">
                <span className="font-bold">WB</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li><a href={`#${SectionId.HOME}`} className="hover:text-cyan-300 transition-colors">首页</a></li>
              <li><a href={`#${SectionId.FEATURES}`} className="hover:text-cyan-300 transition-colors">交互亮点</a></li>
              <li><a href={`#${SectionId.SPECS}`} className="hover:text-cyan-300 transition-colors">硬核参数</a></li>
              <li><a href={`#${SectionId.BUSINESS}`} className="hover:text-cyan-300 transition-colors">商业模式</a></li>
              <li><a href={`#${SectionId.ROADMAP}`} className="hover:text-cyan-300 transition-colors">路线图</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">联系信息</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-cyan-300 flex-shrink-0" />
                <span>自动化学院创新实验室 302 室（示例）</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-cyan-300 flex-shrink-0" />
                <span>+86 1XX XXXX XXXX（示例）</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-cyan-300 flex-shrink-0" />
                <span>spiritcabin@demo.edu（示例）</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">课程声明</h3>
            <p className="text-slate-400 text-sm mb-4">
              本项目为创新创业课程展示用途，页面内容为概念演示与商业模型说明。
            </p>
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-xs text-cyan-100">
              关注众筹与联名更新可在展示现场获取更多信息。
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; 2024 Spirit Cabin. All rights reserved.</p>
          <p className="mt-2">灵境舱 · 桌面级全息数字手办创新项目</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
