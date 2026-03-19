import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export function Contacts() {
  const waLink = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e gostaria de agendar um horário!")}`;

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle title="Fale Connosco" subtitle="Contactos" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">

          {/* Contact Information */}
          <div className="bg-gray-dark p-6 sm:p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-heading text-white-soft mb-6 sm:mb-8 border-b border-gray-medium pb-4">
              Informações Práticas
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-black-deep p-3 rounded-full text-orange-brand shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white-soft text-lg mb-1">Localização</h4>
                  <p className="text-gray-400">R. Rosa Araújo, 1250-148 Lisboa<br />Portugal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black-deep p-3 rounded-full text-orange-brand shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white-soft text-lg mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-400">+351 999 999 999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black-deep p-3 rounded-full text-orange-brand shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white-soft text-lg mb-1">E-mail</h4>
                  <p className="text-gray-400">contacto@barbearia.pt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black-deep p-3 rounded-full text-orange-brand shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white-soft text-lg mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-400">Segunda a Sexta: 09:00h - 20:00h<br />Sábado: 09:00h - 18:00h<br />Domingo: Encerrado</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-medium">
              <h4 className="font-bold text-white-soft text-lg mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-black-deep p-3 rounded-full text-white-soft hover:text-orange-brand hover:bg-gray-dark transition-all">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-black-deep p-3 rounded-full text-white-soft hover:text-orange-brand hover:bg-gray-dark transition-all">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="mt-10">
              <Button fullWidth size="lg" onClick={() => window.open(waLink, '_blank')}>
                Enviar Mensagem no WhatsApp
              </Button>
            </div>
          </div>

          {/* Map Display */}
          <div className="h-full min-h-[300px] sm:min-h-[500px] w-full bg-gray-dark rounded-2xl overflow-hidden shadow-2xl relative">
            <iframe
              src="https://maps.google.com/maps?q=R.%20Rosa%20Ara%C3%BAjo,%201250-148%20Lisboa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) brightness(80%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Lisboa"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}
