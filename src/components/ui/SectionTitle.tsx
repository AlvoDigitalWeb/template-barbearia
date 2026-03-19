

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({ title, subtitle, centered = true, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <span className="text-orange-brand font-bold uppercase tracking-widest text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading text-white-soft">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-orange-brand mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
