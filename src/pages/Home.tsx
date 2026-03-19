import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Clock, Star, Zap, MapPin } from 'lucide-react';

export function Home() {
  const waLink = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e gostaria de agendar um horário!")}`;

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3")' }}
        >
          <div className="absolute inset-0 bg-black-deep/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading text-white-soft uppercase tracking-wide mb-6 animate-in slide-in-from-bottom-4 duration-700">
            A Arte da <span className="text-orange-brand">Barbearia</span> Clássica e Moderna
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-2 animate-in slide-in-from-bottom-6 duration-700 delay-150">
            Cortes impecáveis, atendimento premium e um ambiente exclusivo. Agende seu horário pelo WhatsApp e não perca tempo na fila.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button size="lg" onClick={() => window.open(waLink, '_blank')}>
              Agendar no WhatsApp
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Nossos Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-24 bg-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nossos Serviços Principais" subtitle="O que fazemos de melhor" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Corte Clássico', desc: 'Fade, degradê ou social. O corte perfeito para o seu estilo com acabamento impecável.', price: '15€' },
              { title: 'Barba Terapia', desc: 'Aparação, toalha quente e óleos essenciais para uma barba perfeitamente alinhada.', price: '10€' },
              { title: 'Combo: Cabelo + Barba', desc: 'A experiência completa. Saia renovado e pronto para qualquer desafio.', price: '22€' }
            ].map((service, idx) => (
              <div key={idx} className="bg-black-deep p-5 sm:p-8 rounded-xl border border-gray-medium hover:border-orange-brand transition-colors group flex flex-col">
                <h3 className="text-2xl font-heading text-white-soft mb-3 group-hover:text-orange-brand transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-6 flex-1">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-orange-brand">{service.price}</span>
                  <Button variant="ghost" size="sm" onClick={() => window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá, vim pelo site e gostaria de agendar um ${service.title}`)}`, '_blank')}>Agendar</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => window.location.href = '/servicos'}>Ver Todos os Serviços</Button>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-black-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Por Que Nos Escolher?" subtitle="Nossos Diferenciais" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-dark rounded-full flex items-center justify-center mb-6 text-orange-brand">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-heading text-white-soft mb-3">Atendimento Rápido</h3>
              <p className="text-gray-400">Com agendamento via WhatsApp, você não perde tempo em filas de espera.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-dark rounded-full flex items-center justify-center mb-6 text-orange-brand">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-heading text-white-soft mb-3">Qualidade Premium</h3>
              <p className="text-gray-400">Profissionais experientes e produtos de alta qualidade para o melhor resultado.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-dark rounded-full flex items-center justify-center mb-6 text-orange-brand">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-heading text-white-soft mb-3">Horário Flexível</h3>
              <p className="text-gray-400">Adaptamo-nos à sua rotina. Uma experiência pensada especialmente para você.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nosso Trabalho e Ambiente" subtitle="Galeria" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-12">
            {[
              "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
            ].map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt="Trabalho da barbearia"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-black-deep relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Onde Estamos" subtitle="Localização" />

          <div className="flex flex-col lg:flex-row gap-12 mt-12 items-center">
            {/* Map Placeholder */}
            <div className="w-full lg:w-2/3 h-64 sm:h-96 bg-gray-dark rounded-xl overflow-hidden shadow-2xl relative">
              <iframe
                src="https://maps.google.com/maps?q=R.%20Rosa%20Ara%C3%BAjo,%201250-148%20Lisboa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) brightness(80%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>

            <div className="w-full lg:w-1/3 bg-gray-dark p-5 sm:p-8 rounded-xl shadow-2xl text-center lg:text-left">
              <h3 className="text-2xl font-heading text-white-soft mb-6">Venha Nos Visitar</h3>
              <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                <MapPin className="text-orange-brand h-6 w-6" />
                <span className="text-gray-300">R. Rosa Araújo, 1250-148 Lisboa</span>
              </div>
              <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                <Clock className="text-orange-brand h-6 w-6" />
                <span className="text-gray-300">Seg - Sáb: 09:00 - 20:00<br />Domingo: Encerrado</span>
              </div>

              <Button fullWidth size="lg" onClick={() => window.open(waLink, '_blank')}>
                Agende Já Seu Horário
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
