import React from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin, HeartPulse } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center text-white mb-6">
              <HeartPulse size={28} className="mr-3 text-orange-500" />
              <span className="text-2xl font-bold">咫尺科技</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              专注于老年情感陪伴领域的创新科技企业。让距离不再是亲情的阻碍，让爱触手可及。
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="font-bold">WX</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="font-bold">WB</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li><a href={`#${SectionId.HOME}`} className="hover:text-orange-400 transition-colors">首页</a></li>
              <li><a href={`#${SectionId.PRODUCT}`} className="hover:text-orange-400 transition-colors">产品介绍</a></li>
              <li><a href={`#${SectionId.DEMO}`} className="hover:text-orange-400 transition-colors">在线体验</a></li>
              <li><a href={`#${SectionId.ABOUT}`} className="hover:text-orange-400 transition-colors">关于我们</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-orange-500 flex-shrink-0" />
                <span>大学生活动中心 创新创业孵化基地 302室</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-orange-500 flex-shrink-0" />
                <span>+86 1XX XXXX XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-orange-500 flex-shrink-0" />
                <span>contact@zhichitech.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Slogan */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">关注项目进展</h3>
            <p className="text-slate-400 text-sm mb-4">
              订阅我们的通讯，第一时间了解“光影亲情”终端的研发进度和上市信息。
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="您的邮箱地址" 
                className="bg-slate-800 border-none text-white px-4 py-2 rounded-l-lg focus:ring-1 focus:ring-orange-500 w-full outline-none"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors">
                订阅
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© 2024 ZhiChi Technology. All rights reserved. 咫尺科技 版权所有</p>
          <p className="mt-2">本项目为《创新创业导论》课程模拟项目，网站内容为演示用途。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;