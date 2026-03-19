import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';

export function Services() {
  const waLink = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e gostaria de agendar um horário!")}`;

  const categories = [
    {
      title: "Cabelo",
      services: [
        { name: "Corte Clássico", desc: "Corte tradicional à tesoura ou máquina com acabamento.", price: "15€" },
        { name: "Corte Degradê / Fade", desc: "Transição perfeita nas laterais para um visual moderno.", price: "18€" },
        { name: "Corte Infantil", desc: "Atendimento especializado e paciente para os pequenos.", price: "12€" },
        { name: "Platinado / Coloração", desc: "Mudança radical de visual com descoloração segura.", price: "35€" }
      ]
    },
    {
      title: "Barba",
      services: [
        { name: "Barba Simples", desc: "Aparação e alinhamento básico.", price: "8€" },
        { name: "Barba Terapia Completa", desc: "Toalha quente, massagem facial, óleos essenciais e navalha.", price: "12€" },
        { name: "Pigmentação de Barba", desc: "Cobertura de falhas e fios brancos para um visual mais denso.", price: "15€" },
      ]
    },
    {
      title: "Combos & Extras",
      services: [
        { name: "Cabelo + Barba Simples", desc: "O essencial para o dia a dia.", price: "20€" },
        { name: "Cabelo + Barba Terapia", desc: "O pacote premium de relaxamento e estilo.", price: "25€" },
        { name: "Sobrancelha na Navalha", desc: "Limpeza e design de sobrancelhas.", price: "5€" },
        { name: "Limpeza de Pele", desc: "Remoção de cravos e impurezas com máscara facial.", price: "15€" },
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <SectionTitle title="Nossos Serviços" subtitle="Tabela de Preços" centered />
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
            Escolha o serviço ideal para o seu estilo. Utilizamos os melhores produtos do mercado para garantir um resultado impecável.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-gray-dark p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-heading text-orange-brand uppercase tracking-wider mb-6 sm:mb-8 border-b border-gray-medium pb-4">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {category.services.map((service, sIdx) => (
                  <div key={sIdx} className="flex flex-col sm:flex-row justify-between sm:items-center group">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center justify-between sm:justify-start gap-4 mb-2">
                        <h4 className="text-xl font-bold text-white-soft group-hover:text-orange-brand transition-colors">
                          {service.name}
                        </h4>
                        <span className="text-lg font-bold text-orange-brand bg-black-deep px-3 py-1 rounded-md sm:hidden">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{service.desc}</p>
                    </div>

                    <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
                      <span className="text-xl font-bold text-orange-brand block">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 sm:mt-20 text-center bg-black-deep border border-orange-brand/30 p-6 sm:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-orange-brand/5"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-heading text-white-soft mb-4">Pronto para dar um upgrade no visual?</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Garanta seu horário com facilidade pelo WhatsApp. Resposta rápida e sem burocracia.
            </p>
            <Button size="lg" onClick={() => window.open(waLink, '_blank')}>
              Agendar Meu Horário Agora
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
