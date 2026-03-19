import { SectionTitle } from '../components/ui/SectionTitle';

export function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-12 sm:mb-24">
          <div className="w-full lg:w-1/2">
            <SectionTitle title="Nossa História" subtitle="Tradição e Modernidade" centered={false} />

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mt-8">
              <p>
                Fundada com a missão de resgatar o cuidado masculino clássico e combiná-lo com as tendências contemporâneas, a nossa barbearia é mais do que um local para cortar o cabelo — é um ponto de encontro.
              </p>
              <p>
                Acreditamos que todo homem merece um momento para cuidar de si próprio. Com uma equipa de barbeiros experientes e apaixonados pela profissão, garantimos um atendimento técnico impecável num ambiente onde se sentirá em casa.
              </p>
              <p>
                Desde o momento em que entra até o acabamento final, cada detalhe é pensado para proporcionar uma experiência premium e relaxante.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-brand pl-4">
                <span className="block text-4xl font-heading text-white-soft">10+</span>
                <span className="text-gray-400 text-sm uppercase tracking-wider">Anos de Experiência</span>
              </div>
              <div className="border-l-4 border-orange-brand pl-4">
                <span className="block text-4xl font-heading text-white-soft">5k+</span>
                <span className="text-gray-400 text-sm uppercase tracking-wider">Clientes Satisfeitos</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-orange-brand/20 translate-x-4 translate-y-4 rounded-2xl z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1000"
              alt="O Barbeiro trabalhando"
              className="rounded-2xl relative z-10 w-full object-cover shadow-2xl h-[350px] sm:h-[500px] lg:h-[600px]"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          <SectionTitle title="Nossos Profissionais" subtitle="A Equipa" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { name: "João Silva", role: "Mestre Barbeiro", img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Carlos Mendes", role: "Especialista em Degradê", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
              { name: "Miguel Costa", role: "Barba Terapia", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" }
            ].map((member, idx) => (
              <div key={idx} className="bg-gray-dark rounded-xl overflow-hidden group">
                <div className="h-56 sm:h-80 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-heading text-white-soft mb-1">{member.name}</h4>
                  <p className="text-orange-brand uppercase tracking-wider text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
