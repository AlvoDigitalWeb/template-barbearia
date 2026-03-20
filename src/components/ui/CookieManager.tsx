import React, { useState } from 'react';
import { useConsent } from '../../contexts/ConsentContext';
import type { CookieConsent } from '../../contexts/ConsentContext';
import { X, Shield, BarChart3, Target, Check } from 'lucide-react';

export const CookieManager: React.FC = () => {
  const { isManagerOpen, closeManager, consent, savePreferences } = useConsent();
  const [localPrefs, setLocalPrefs] = useState<CookieConsent>(consent);

  if (!isManagerOpen) return null;

  const handleToggle = (key: keyof CookieConsent) => {
    if (key === 'essential') return;
    setLocalPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    savePreferences(localPrefs);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black-deep/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-gray-dark border border-gray-medium w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-gray-medium flex justify-between items-center">
          <h2 className="text-xl font-heading tracking-wider">Gestão de Preferências</h2>
          <button onClick={closeManager} className="text-gray-400 hover:text-white-soft transition-colors p-1 cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-gray-400 leading-relaxed italic">
            Respeitamos a sua privacidade. Pode escolher quais as categorias de cookies que deseja permitir. 
            Alguns são necessários para o funcionamento básico do site.
          </p>

          <div className="space-y-4">
            {/* Essential */}
            <div className="bg-black-deep/40 p-5 rounded-xl border border-gray-medium/30 flex items-start gap-4">
              <div className="bg-orange-brand/10 p-2.5 rounded-lg shrink-0">
                <Shield className="w-5 h-5 text-orange-brand" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white-soft">Cookies Essenciais</h4>
                  <span className="text-[10px] uppercase font-bold text-orange-brand tracking-widest bg-orange-brand/10 px-2 py-0.5 rounded">Sempre Ativo</span>
                </div>
                <p className="text-xs text-gray-400">Necessários para o funcionamento do site, segurança e ferramentas básicas. Não podem ser desativados.</p>
              </div>
            </div>

            {/* Statistics */}
            <div 
              onClick={() => handleToggle('statistics')}
              className={`p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                localPrefs.statistics ? 'bg-orange-brand/5 border-orange-brand/30' : 'bg-black-deep/20 border-gray-medium/30'
              }`}
            >
              <div className={`p-2.5 rounded-lg shrink-0 ${localPrefs.statistics ? 'bg-orange-brand text-black-deep' : 'bg-gray-medium/30 text-gray-400'}`}>
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white-soft">Estatísticas</h4>
                  <div className={`w-10 h-5 rounded-full relative transition-colors ${localPrefs.statistics ? 'bg-orange-brand' : 'bg-gray-medium'}`}>
                    <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${localPrefs.statistics ? 'left-6' : 'left-1'}`} />
                  </div>
                </div>
                <p className="text-xs text-gray-400">Permitem-nos analisar o tráfego do site e melhorar a experiência do utilizador de forma anónima (ex: Google Analytics).</p>
              </div>
            </div>

            {/* Marketing */}
            <div 
              onClick={() => handleToggle('marketing')}
              className={`p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                localPrefs.marketing ? 'bg-orange-brand/5 border-orange-brand/30' : 'bg-black-deep/20 border-gray-medium/30'
              }`}
            >
              <div className={`p-2.5 rounded-lg shrink-0 ${localPrefs.marketing ? 'bg-orange-brand text-black-deep' : 'bg-gray-medium/30 text-gray-400'}`}>
                <Target className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white-soft">Marketing</h4>
                  <div className={`w-10 h-5 rounded-full relative transition-colors ${localPrefs.marketing ? 'bg-orange-brand' : 'bg-gray-medium'}`}>
                    <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${localPrefs.marketing ? 'left-6' : 'left-1'}`} />
                  </div>
                </div>
                <p className="text-xs text-gray-400">Utilizados para apresentar anúncios mais relevantes para si e limitar a frequência com que os vê.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-medium flex gap-3">
          <button
            onClick={closeManager}
            className="flex-1 px-6 py-3 text-xs uppercase font-bold tracking-widest border border-gray-medium hover:bg-gray-medium transition-colors rounded-lg cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-6 py-3 bg-orange-brand text-black-deep text-xs uppercase font-bold tracking-widest hover:bg-white-soft transition-colors rounded-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <Check className="w-4 h-4" /> Guardar Preferências
          </button>
        </div>
      </div>
    </div>
  );
};
