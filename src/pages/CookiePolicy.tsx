import React from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Cookie, MousePointer2, Settings, Info, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useConsent } from '../contexts/ConsentContext';

export const CookiePolicy: React.FC = () => {
  const { openManager } = useConsent();

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Política de Cookies" subtitle="Transparência e Controlo" centered={false} />
        
        {/* Aviso Obrigatório */}
        <div className="mt-8 bg-orange-brand/10 border-l-4 border-orange-brand p-6 rounded-r-xl flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-orange-brand shrink-0 mt-1" />
          <div className="text-sm text-gray-200">
            <p className="font-bold text-white-soft mb-1">⚠️ Aviso Importante</p>
            <p>
              Este é um modelo de política de cookies para barbearias. 
              <strong> Deve ser adaptado à realidade do seu negócio antes da publicação. </strong>
              Recomenda-se validação jurídica para garantir conformidade legal.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-12 text-gray-300 leading-relaxed font-sans">
          
          {/* Identificação Placeholder */}
          <section className="bg-gray-dark/30 p-6 rounded-xl border border-gray-medium/10 text-xs">
            <p>Responsável pelo Site: <span className="text-white-soft font-bold">[Nome da Barbearia]</span> | E-mail: <span className="text-white-soft font-bold">[Email de contacto]</span></p>
          </section>

          {/* O que são cookies */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Info className="w-6 h-6 text-orange-brand" />
              <h3 className="text-xl font-heading text-white-soft">1. O que são Cookies?</h3>
            </div>
            <p className="text-sm">
              Cookies são pequenos ficheiros de texto que são armazenados no seu computador ou dispositivo móvel quando visita um website. 
              Eles ajudam o site a reconhecer o seu dispositivo e a lembrar informações sobre a sua visita, tornando a sua navegação mais 
              eficiente e personalizada.
            </p>
          </section>

          {/* Uso Condicional */}
          <section className="bg-orange-brand/5 p-8 rounded-2xl border border-orange-brand/20">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-orange-brand" />
              <h3 className="text-xl font-heading text-white-soft">2. Uso de Cookies</h3>
            </div>
            <p className="text-sm mb-4 italic">
              "Este site poderá utilizar cookies para melhorar a experiência do utilizador."
            </p>
            <p className="text-sm">
              Não assumimos o uso direto de todos os tipos de cookies. A utilização de cookies não essenciais depende sempre do seu 
              consentimento prévio, obtido através do nosso banner de cookies.
            </p>
          </section>

          {/* Tipos de cookies */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Settings className="w-6 h-6 text-orange-brand" />
              <h3 className="text-xl font-heading text-white-soft">3. Tipos de Cookies que Podemos Utilizar</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-dark/50 p-6 rounded-xl border border-gray-medium/20">
                <CheckCircle2 className="w-8 h-8 text-orange-brand mb-4" />
                <h4 className="font-heading text-white-soft mb-2">Essenciais</h4>
                <p className="text-xs text-gray-400">Necessários para o funcionamento básico e segurança do website. Não podem ser desativados.</p>
              </div>
              <div className="bg-gray-dark/50 p-6 rounded-xl border border-gray-medium/20">
                <MousePointer2 className="w-8 h-8 text-orange-brand mb-4" />
                <h4 className="font-heading text-white-soft mb-2">Estatísticos</h4>
                <p className="text-xs text-gray-400">Ajudam-nos a perceber como os visitantes interagem com o site (ex: Google Analytics). Opcionais.</p>
              </div>
              <div className="bg-gray-dark/50 p-6 rounded-xl border border-gray-medium/20">
                <Cookie className="w-8 h-8 text-orange-brand mb-4" />
                <h4 className="font-heading text-white-soft mb-2">Marketing</h4>
                <p className="text-xs text-gray-400">Utilizados para apresentar publicidade relevante e medir campanhas. Opcionais.</p>
              </div>
            </div>
          </section>

          {/* Gestão e Consentimento */}
          <section className="bg-gray-dark/30 p-8 rounded-2xl border border-gray-medium/20">
            <h3 className="text-xl font-heading text-white-soft mb-6">4. Consentimento e Gestão</h3>
            <p className="text-sm mb-6 font-medium text-orange-brand">
              "O uso de cookies não essenciais depende do consentimento prévio do utilizador, obtido através de um banner de cookies."
            </p>
            <p className="text-sm mb-8">
              Pode aceitar, rejeitar ou configurar as suas preferências a qualquer momento. Além disso, pode gerir cookies através das 
              definições do seu navegador (Chrome, Firefox, Safari, Edge).
            </p>
            <div className="text-center">
              <button 
                onClick={openManager}
                className="inline-flex items-center gap-2 px-8 py-3 bg-orange-brand text-black-deep font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-white-soft transition-colors"
              >
                <Settings className="w-4 h-4" /> Personalizar Cookies
              </button>
            </div>
          </section>

          {/* Tabela de Cookies */}
          <section>
            <h3 className="text-xl font-heading text-white-soft mb-6">5. Tabela de Cookies (Exemplo)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-medium/30">
                    <th className="py-3 px-4 text-orange-brand font-bold uppercase tracking-wider">Nome</th>
                    <th className="py-3 px-4 text-orange-brand font-bold uppercase tracking-wider">Finalidade</th>
                    <th className="py-3 px-4 text-orange-brand font-bold uppercase tracking-wider">Duração</th>
                    <th className="py-3 px-4 text-orange-brand font-bold uppercase tracking-wider">Tipo</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-medium/10">
                    <td className="py-3 px-4 font-mono">_ga</td>
                    <td className="py-3 px-4">Análise estatística (Google)</td>
                    <td className="py-3 px-4">2 anos</td>
                    <td className="py-3 px-4">Estatístico</td>
                  </tr>
                  <tr className="border-b border-gray-medium/10">
                    <td className="py-3 px-4 font-mono">consent-mode</td>
                    <td className="py-3 px-4">Preferências de cookies</td>
                    <td className="py-3 px-4">1 ano</td>
                    <td className="py-3 px-4">Essencial</td>
                  </tr>
                  {/* Adicionar outros conforme necessário */}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[10px] text-gray-500 italic">
              * Esta tabela deve ser preenchida de acordo com as ferramentas efetivamente instaladas no site.
            </p>
          </section>

          <footer className="pt-8 border-t border-gray-medium/30 text-xs text-gray-500">
            Última atualização: [Mês/Ano]. Esta política pode ser atualizada periodicamente.
          </footer>

        </div>
      </div>
    </div>
  );
};
