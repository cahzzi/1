// 纯展示组件，服务端渲染
export const SectionTitle = ({ id, title, subtitle }: { id?: string, title: string, subtitle?: string }) => (
  <div className="text-center mb-8 md:mb-16 px-2 relative z-10">
    <h2 id={id} className="text-xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4 tracking-tight">{title}</h2>
    {subtitle && <p className="text-sm md:text-lg text-gray-500 font-light max-w-md md:max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);
