import { Link } from 'react-router';
import { Scissors, MapPin, Phone, Clock, Instagram, Facebook, Settings } from 'lucide-react';
import { useConsent } from '../../contexts/ConsentContext';

export function Footer() {
  const { openManager } = useConsent();
  return (
    <footer className="bg-black-deep border-t border-gray-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Scissors className="h-8 w-8 text-orange-brand" />
              <span className="font-heading text-2xl tracking-widest uppercase text-white-soft">
                Barber<span className="text-orange-brand">Shop</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Elevando a sua autoestima com cortes de cabelo e barba impecáveis. Atendimento premium e experiência única.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-orange-brand transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-brand transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e gostaria de agendar um horário")}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-brand transition-colors">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5 .5 0 0 0 1 0V9a.5 .5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0-1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-heading text-xl uppercase tracking-wider mb-6 text-white-soft">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-brand transition-colors text-sm">Início</Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-orange-brand transition-colors text-sm">Serviços</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-orange-brand transition-colors text-sm">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/contactos" className="text-gray-400 hover:text-orange-brand transition-colors text-sm">Contactos</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-heading text-xl uppercase tracking-wider mb-6 text-white-soft">Contactos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-orange-brand flex-shrink-0 mt-0.5" />
                <span>R. Rosa Araújo, 1250-148 Lisboa<br />Portugal</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-orange-brand flex-shrink-0" />
                <span>+351 999 999 999</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h3 className="font-heading text-xl uppercase tracking-wider mb-6 text-white-soft">Horário</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center text-gray-400 border-b border-gray-dark pb-2">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-orange-brand" /> Seg - Sex</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between items-center text-gray-400 border-b border-gray-dark pb-2">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-orange-brand" /> Sábado</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center text-gray-500 pt-1">
                <span className="flex items-center gap-2">Domingo</span>
                <span>Encerrado</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-dark pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} BarberShop. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2 md:mt-0 font-sans">
            Desenvolvido por <a href="https://www.alvodigitalweb.pt" target="_blank" rel="noopener noreferrer"><span className="text-orange-brand hover:text-white-soft cursor-pointer transition-colors">Alvo Digital Web</span></a>
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/politica-privacidade" className="text-gray-500 hover:text-orange-brand text-[10px] uppercase tracking-widest transition-colors font-bold">Privacidade</Link>
            <Link to="/politica-cookies" className="text-gray-500 hover:text-orange-brand text-[10px] uppercase tracking-widest transition-colors font-bold">Cookies</Link>
            <button 
              onClick={openManager}
              className="text-gray-500 hover:text-orange-brand text-[10px] uppercase tracking-widest transition-colors font-bold flex items-center gap-1 cursor-pointer"
            >
              <Settings className="w-3 h-3" /> Gerir Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
