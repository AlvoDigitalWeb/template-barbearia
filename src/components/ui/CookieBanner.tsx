import React from 'react';
import { useConsent } from '../../contexts/ConsentContext';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieBanner: React.FC = () => {
  const { hasResponded, acceptAll, rejectAll, openManager } = useConsent();

  if (hasResponded) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-dark border border-gray-medium shadow-2xl rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="hidden md:flex bg-orange-brand/10 p-3 rounded-full">
              <ShieldCheck className="w-8 h-8 text-orange-brand" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-heading tracking-wide mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-brand md:hidden" />
                Privacidade e Cookies
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Utilizamos cookies para melhorar a sua experiência, analisar o tráfego e otimizar os nossos serviços. 
                Pode aceitar todos ou gerir as suas preferências. Consulte a nossa{' '}
                <Link to="/politica-cookies" className="text-orange-brand hover:underline">Política de Cookies</Link>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <button
                onClick={openManager}
                className="flex-1 md:flex-none px-6 py-2.5 text-xs uppercase font-bold tracking-widest border border-gray-medium hover:bg-gray-medium transition-colors rounded-lg cursor-pointer"
              >
                Gerir Preferências
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 md:flex-none px-6 py-2.5 text-xs uppercase font-bold tracking-widest border border-gray-medium hover:bg-gray-medium transition-colors rounded-lg cursor-pointer"
              >
                Rejeitar
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 md:flex-none px-6 py-2.5 bg-orange-brand text-black-deep text-xs uppercase font-bold tracking-widest hover:bg-white-soft transition-colors rounded-lg cursor-pointer"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
