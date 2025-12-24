import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { SectionId } from '../types';

const initialForm = {
  name: '',
  relation: '',
  phone: '',
  city: '',
  message: '',
};

const ContactSection: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = '请填写姓名';
    if (!form.phone.trim()) {
      nextErrors.phone = '请填写手机号';
    } else if (!/^1\\d{10}$/.test(form.phone.trim())) {
      nextErrors.phone = '手机号格式不正确';
    }
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }
    setIsSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id={SectionId.CONTACT} className="py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-300 font-semibold mb-3">体验预约</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              申请光影亲情体验名额
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              我们会根据课程进度开放小范围体验。留下信息后，我们将通过电话或微信与您联系。
            </p>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
              <p className="text-sm text-slate-200 leading-relaxed">
                提示：本页面为课程项目演示，提交内容不会真实发送，我们会在展示现场使用模拟数据。
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-slate-700">姓名 *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                  placeholder="请输入您的姓名"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">身份关系</label>
                <input
                  type="text"
                  value={form.relation}
                  onChange={(e) => updateField('relation', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                  placeholder="如：子女 / 老人本人"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">手机号 *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                  placeholder="11 位手机号"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">城市</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                  placeholder="所在城市"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-slate-700">补充说明</label>
              <textarea
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/40 resize-none h-24"
                placeholder="简要说明您的需求或场景"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={18} />
              提交预约
            </button>

            {isSubmitted && (
              <div className="mt-4 flex items-center gap-2 text-green-600 text-sm">
                <CheckCircle2 size={18} />
                已提交成功（演示）
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
