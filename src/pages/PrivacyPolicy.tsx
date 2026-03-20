import React from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Shield, Lock, Eye, Edit3, MessageSquare, AlertTriangle, Share2, Globe, FileText, ExternalLink } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Política de Privacidade" subtitle="Modelo para Barbearia" centered={false} />
        
        {/* Aviso Obrigatório */}
        <div className="mt-8 bg-orange-brand/10 border-l-4 border-orange-brand p-6 rounded-r-xl flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-orange-brand shrink-0 mt-1" />
          <div className="text-sm text-gray-200">
            <p className="font-bold text-white-soft mb-1">⚠️ Aviso Importante</p>
            <p>
              Este é um modelo de política de privacidade para barbearias. 
              <strong> Deve ser adaptado à realidade do seu negócio antes da publicação. </strong>
              Recomenda-se validação jurídica para garantir conformidade legal total.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-10 text-gray-300 leading-relaxed font-sans">
          
          {/* Identificação */}
          <section className="bg-gray-dark/30 p-8 rounded-2xl border border-gray-medium/20">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-orange-brand" />
              <h3 className="text-xl font-heading text-white-soft">1. Identificação do Responsável</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p><span className="text-white-soft font-bold">Empresa/Barbearia:</span> [Nome da Barbearia]</p>
                <p><span className="text-white-soft font-bold">NIF/NIPC:</span> [NIF]</p>
                <p><span className="text-white-soft font-bold">Morada:</span> [Morada]</p>
              </div>
              <div className="space-y-2">
                <p><span className="text-white-soft font-bold">E-mail:</span> [Email de contacto]</p>
                <p><span className="text-white-soft font-bold">Telefone:</span> [Telefone]</p>
              </div>
            </div>
          </section>

          {/* Introdução */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-orange-brand" />
              <h3 className="text-xl font-heading text-white-soft">2. Introdução</h3>
            </div>
            <p className="text-sm">
              Esta política descreve como recolhemos e tratamos os seus dados pessoais. Este documento funciona como um modelo adaptável para barbearias, 
              garantindo transparência sobre o uso de informações de clientes e visitantes.
            </p>
          </section>

          {/* Dados Recolhidos */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-orange-brand" />
              <h3 className="text-xl font-heading text-white-soft">3. Dados Recolhidos</h3>
            </div>
            <p className="mb-4 text-sm">Recolhemos dados adaptados à realidade do setor de barbearia:</p>
            <ul className="list-disc pl-6 space-y-3 text-sm">
              <li>
                <span className="text-white-soft font-medium">Dados de Contacto:</span> 
                Nome, telefone e e-mail — utilizados principalmente para gestão de marcações e comunicações diretas.
              </li>
              <li>
                <span className="text-white-soft font-medium">Dados de Agendamento:</span> 
                Serviço escolhido, data, hora e preferências de atendimento.
              </li>
              <li>
                <span className="text-white-soft font-medium">Dados de Navegação:</span> 
                Informações recolhidas via cookies (se aplicável), como endereço IP e comportamento no site.
              </li>
            </ul>
          </section>

          {/* Finalidade */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-orange-brand" />
              <h3 className="text-xl font-heading text-white-soft">4. Finalidade do Tratamento</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-white-soft font-bold mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-brand"></div>
                  Execução de Contrato
                </h4>
                <p className="text-sm pl-4">Gestão de marcações, faturação e prestação do serviço de barbearia solicitado.</p>
              </div>
              <div>
                <h4 className="text-white-soft font-bold mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-brand"></div>
                  Consentimento
                </h4>
                <p className="text-sm pl-4">Utilização de cookies não essenciais, envio de comunicações de marketing ou novidades.</p>
              </div>
              <div>
                <h4 className="text-white-soft font-bold mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-brand"></div>
                  Interesse Legítimo
                </h4>
                <p className="text-sm pl-4">Manutenção da segurança do site e melhoria técnica da plataforma.</p>
              </div>
            </div>
          </section>

          {/* Retenção */}
          <section className="border-l-2 border-orange-brand pl-6">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-orange-brand" />
              <h3 className="text-xl font-heading text-white-soft">5. Retenção de Dados</h3>
            </div>
            <p className="text-sm">
              Os dados pessoais serão conservados apenas pelo período necessário à gestão de marcações e relação com o cliente, 
              podendo variar conforme o tipo de serviço prestado e obrigações fiscais/legais aplicáveis.
            </p>
          </section>

          {/* Partilha e Transferências */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-6 h-6 text-orange-brand" />
                <h3 className="text-xl font-heading text-white-soft">6. Partilha de Dados</h3>
              </div>
              <p className="text-sm">
                Os dados poderão ser partilhados com ferramentas de gestão de marcações, plataformas de comunicação ou serviços de análise, 
                estritamente para as finalidades descritas.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-orange-brand" />
                <h3 className="text-xl font-heading text-white-soft">7. Transferências</h3>
              </div>
              <p className="text-sm">
                Caso utilizemos ferramentas externas (ex: alojamento ou email), os dados poderão ser transferidos para fora do EEE, 
                garantindo sempre níveis de proteção adequados.
              </p>
            </div>
          </section>

          {/* Integrações Típicas */}
          <section className="bg-orange-brand/5 p-8 rounded-2xl border border-orange-brand/20">
            <div className="flex items-center gap-3 mb-6">
              <ExternalLink className="w-6 h-6 text-orange-brand" />
              <h3 className="text-xl font-heading text-white-soft">8. Plataformas Externas</h3>
            </div>
            <p className="text-sm mb-4">
              Este site integra funcionalidades de terceiros comuns ao setor:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-center">
              <li className="bg-gray-dark/50 p-3 rounded border border-gray-medium/10">WhatsApp</li>
              <li className="bg-gray-dark/50 p-3 rounded border border-gray-medium/10">Instagram</li>
              <li className="bg-gray-dark/50 p-3 rounded border border-gray-medium/10">Google Maps</li>
            </ul>
            <p className="mt-6 text-xs italic text-gray-400">
              Caso utilize estas plataformas, o tratamento de dados será da responsabilidade dessas entidades, de acordo com as suas próprias políticas de privacidade.
            </p>
          </section>

          {/* Direitos e Reclamação */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Edit3 className="w-6 h-6 text-orange-brand" />
              <h3 className="text-xl font-heading text-white-soft">9. Direitos e Reclamações</h3>
            </div>
            <p className="mb-6 text-sm">O titular dos dados tem direito a:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-xs">
              <div className="bg-gray-dark/50 p-3 rounded-lg flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-brand rounded-full"></div> Acesso
              </div>
              <div className="bg-gray-dark/50 p-3 rounded-lg flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-brand rounded-full"></div> Retificação
              </div>
              <div className="bg-gray-dark/50 p-3 rounded-lg flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-brand rounded-full"></div> Apagamento
              </div>
              <div className="bg-gray-dark/50 p-3 rounded-lg flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-brand rounded-full"></div> Limitação
              </div>
              <div className="bg-gray-dark/50 p-3 rounded-lg flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-brand rounded-full"></div> Oposição
              </div>
              <div className="bg-gray-dark/50 p-3 rounded-lg flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-brand rounded-full"></div> Portabilidade
              </div>
            </div>
            <div className="p-6 bg-black-deep/40 rounded-xl border border-gray-medium/10">
              <p className="text-sm font-medium text-white-soft mb-2">Comissão Nacional de Proteção de Dados (CNPD)</p>
              <p className="text-xs">
                Tem o direito de apresentar reclamação junto da CNPD caso considere que os seus direitos não estão a ser respeitados.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
