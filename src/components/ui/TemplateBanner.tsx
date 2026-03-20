import React, { useState } from 'react';
import { ExternalLink, Info, X } from 'lucide-react';

export const TemplateBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gray-dark border-b-2 border-orange-brand py-4 px-4 relative z-[110] animate-in slide-in-from-top duration-500 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Info className="w-6 h-6 text-orange-brand shrink-0 mb-2 sm:mb-0" />
          <p className="text-sm sm:text-base font-medium text-white-soft leading-relaxed">
            Este site é apenas um <span className="text-orange-brand font-bold uppercase tracking-wider">template</span> e pode ser adquirido através do site{' '}
            <a 
              href="https://alvodigitalweb.pt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-brand hover:text-white-soft underline decoration-2 underline-offset-4 transition-colors inline-flex items-center gap-1.5 font-bold"
            >
              alvodigitalweb.pt
              <ExternalLink className="w-4 h-4" />
            </a>
          </p>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="flex items-center gap-2 px-6 py-2 bg-orange-brand text-black-deep text-sm uppercase font-bold tracking-widest hover:bg-white-soft transition-all transform hover:scale-105 active:scale-95 rounded-md cursor-pointer shrink-0 shadow-md"
        >
          <span>OK</span>
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
