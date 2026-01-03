import { Zap, Shield, Search } from 'lucide-react';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { GlassCard } from './components/GlassCard';
import { SectionTitle } from './components/SectionTitle';
import { ClientWrapper, CTAButton } from './components/ClientWrapper';

// 流程步骤数据
const processSteps = [
  { id: '1', title: '聊需求', desc: '告诉我你想要什么' },
  { id: '2', title: '写代码', desc: '把想法变成网页' },
  { id: '3', title: '上线', desc: '网站正式开放访问' },
];

// 特性数据
const features = [
  { icon: Zap, color: 'blue', title: '打开快', desc: '不用等，点开就能看。不管客户在哪，网站都能秒开。' },
  { icon: Shield, color: 'purple', title: '不怕黑', desc: '没有后台、没有数据库，黑客根本没法攻击。省心又安全。' },
  { icon: Search, color: 'orange', title: '好搜到', desc: '百度、Google 更容易收录你的网站，客户搜得到你。' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-500/20 font-sans overflow-x-hidden relative">
      <BackgroundDecorations />
      
      <ClientWrapper>
        {/* Features Section */}
        <section aria-labelledby="features-title" className="py-12 md:py-32 px-4 sm:px-5 max-w-7xl mx-auto">
          <SectionTitle id="features-title" title="简单省心" subtitle="不用买服务器，不用请人维护，做完就能用。" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const colorClasses = {
                blue: 'bg-blue-500/10 text-blue-600',
                purple: 'bg-purple-500/10 text-purple-600',
                orange: 'bg-orange-500/10 text-orange-600',
              };
              return (
                <GlassCard key={idx} delay={idx * 100}>
                  <article className="flex items-start gap-4 md:block">
                    <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center md:mb-4 ${colorClasses[feature.color as keyof typeof colorClasses]}`} aria-hidden="true">
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </article>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section aria-labelledby="process-title" className="py-12 md:py-32 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-gray-900/[0.02] pointer-events-none select-none" aria-hidden="true">PROCESS</div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <SectionTitle id="process-title" title="怎么做" />
            <ol className="relative">
              {/* 桌面端横线 */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2" aria-hidden="true" />
              
              {/* 移动端：横向滚动卡片 */}
              <div className="flex md:hidden gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
                {processSteps.map((step, idx) => (
                  <li key={idx} className="flex-shrink-0 w-[75vw] snap-center bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 border-2 border-blue-500/30 rounded-full flex items-center justify-center mb-3">
                      <span className="text-blue-600 font-bold text-sm">{step.id}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                  </li>
                ))}
              </div>
              
              {/* 桌面端：三列布局 */}
              <div className="hidden md:grid md:grid-cols-3 gap-12 relative z-10">
                {processSteps.map((step, idx) => (
                  <li key={idx} className="text-center">
                    <div className="w-16 h-16 bg-white border-2 border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm" aria-hidden="true">
                      <span className="text-blue-600 font-bold text-xl">{step.id}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-500 mt-1">{step.desc}</p>
                  </li>
                ))}
              </div>
            </ol>
          </div>
        </section>

        {/* Pricing Section */}
        <section aria-labelledby="pricing-title" className="py-12 md:py-32 px-4 sm:px-5 max-w-7xl mx-auto">
          <SectionTitle id="pricing-title" title="多少钱" subtitle="你只管付款，剩下的我来搞定。" />
          <div className="max-w-sm mx-auto">
            <div className="relative bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl overflow-hidden">
              {/* 装饰背景 */}
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-blue-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
              
              <div className="relative">
                <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full mb-4 md:mb-6">
                  限时特惠
                </div>
                
                <div className="mb-1 md:mb-2">
                  <span className="text-lg text-gray-400 line-through mr-2">¥1</span>
                  <span className="text-5xl md:text-7xl font-bold text-gray-900">¥0.01</span>
                </div>
                
                <div className="h-px bg-gray-200 mb-5 md:mb-6 mt-6 md:mt-8" />
                
                <ul className="text-sm text-gray-600 space-y-3 md:space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    不用自己买服务器
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    不用懂技术
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    拿到链接就能用
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    支持自定义
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" aria-labelledby="cta-title" className="py-16 md:py-20 px-5 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 id="cta-title" className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-gray-900">想做个<span className="text-blue-600">好看的网站</span>？</h2>
            <p className="text-sm md:text-xl text-gray-500 mb-8 font-light">聊聊你的想法，报价免费。</p>
            <div className="flex justify-center">
              <CTAButton />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 bg-gray-50 py-6 md:py-8 px-5 text-center text-xs text-gray-400 safe-bottom">
          <p>&copy; {new Date().getFullYear()} Static Web Solutions.</p>
        </footer>
      </ClientWrapper>
    </div>
  );
}
