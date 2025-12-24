import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Sparkles, RefreshCcw } from 'lucide-react';
import { SectionId, Message } from '../types';
import { sendMessageToGemini, initializeChat, isGeminiConfigured } from '../services/geminiService';

const DemoSection: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '爷爷/奶奶，我是晨晨呀！今天身体怎么样？有没有按时吃饭呀？', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDemoMode] = useState(!isGeminiConfigured());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const quickPrompts = [
    '晨晨，我今天有点腰疼。',
    '晨晨，我想你了。',
    '今天下雨了，你那边冷吗？',
    '给我讲个小故事吧。',
  ];

  useEffect(() => {
    initializeChat();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);

    const modelMessage: Message = {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      { role: 'model', text: '爷爷/奶奶，我是晨晨呀！今天身体怎么样？有没有按时吃饭呀？', timestamp: new Date() }
    ]);
    initializeChat();
  };

  const handleQuickSend = (text: string) => {
    setInput(text);
  };

  return (
    <section id={SectionId.DEMO} className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            在线体验 beta
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            试着和“晨晨”聊聊天
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            这是一个模拟体验。在真实的“光影亲情”终端上，您看到的将是您孙辈的3D全息影像。
            <br className="hidden md:block"/>
            试着输入：“晨晨，我今天有点腰疼” 或 “晨晨，我想你了”。
          </p>
          {isDemoMode && (
            <p className="text-xs text-slate-500 mt-3">当前为演示模式（未配置 Gemini API Key）</p>
          )}
        </div>

        {/* Demo Interface */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch h-[600px]">
          
          {/* Visual Representation (Hologram Placeholder) */}
          <div className="lg:w-1/3 bg-slate-900 rounded-3xl p-6 relative overflow-hidden flex flex-col items-center justify-end shadow-2xl border border-slate-700">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/space/600/800')] opacity-20 bg-cover bg-center"></div>
            
            {/* Hologram Container */}
            <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img 
                  src="https://picsum.photos/seed/grandchild/300/300" 
                  alt="Digital Avatar" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-cyan-400/50 hologram-effect opacity-90 animate-float"
                />
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center bg-cyan-900/50 border border-cyan-500/30 rounded-full px-4 py-1 text-cyan-300 text-sm backdrop-blur-md">
                  <Sparkles size={14} className="mr-2" />
                  3D 实时渲染中
                </div>
                <p className="text-slate-400 text-xs mt-3">系统状态: 情感连接稳定</p>
              </div>
            </div>

            {/* Projection Base Effect */}
            <div className="w-3/4 h-8 bg-cyan-500/20 blur-xl rounded-[100%] absolute bottom-10"></div>
          </div>

          {/* Chat Interface */}
          <div className="lg:w-2/3 bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden border border-slate-100">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="font-bold text-slate-700">数字孙子 - 晨晨</span>
              </div>
              <button onClick={resetChat} className="text-slate-400 hover:text-slate-600 transition-colors" title="重置对话">
                <RefreshCcw size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-orange-500 text-white rounded-br-none' 
                      : 'bg-white text-slate-800 border border-slate-100 rounded-bl-none'
                  }`}>
                    <p className="text-base leading-relaxed">{msg.text}</p>
                    <p className={`text-[10px] mt-1 ${msg.role === 'user' ? 'text-orange-100' : 'text-slate-400'}`}>
                      {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-5 py-4 shadow-sm flex space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickSend(prompt)}
                    className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <div className="relative flex items-center">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="请输入您想说的话..."
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 resize-none h-14"
                />
                <div className="absolute right-2 flex space-x-2">
                  <button className="p-2 text-slate-400 hover:text-orange-500 transition-colors" title="语音输入（模拟）">
                    <Mic size={20} />
                  </button>
                  <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className={`p-2 rounded-lg transition-colors ${
                      input.trim() && !isLoading 
                        ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md' 
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
              <p className="text-center text-xs text-slate-400 mt-2">
                由 Gemini AI 提供即时情感交互支持
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
