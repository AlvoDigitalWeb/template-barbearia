import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contactos', path: '/contactos' },
  ];

  const waLink = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e gostaria de agendar um horário!")}`;

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-black-deep/90 backdrop-blur-md border-b border-gray-dark sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 text-white-soft transition-transform hover:scale-105">
              <Scissors className="h-8 w-8 text-orange-brand" />
              <span className="font-heading text-2xl tracking-widest uppercase">
                Barber<span className="text-orange-brand">Shop</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-heading uppercase tracking-wider text-sm transition-colors duration-200 
                ${location.pathname === link.path ? 'text-orange-brand border-b-2 border-orange-brand' : 'text-gray-300 hover:text-white-soft hover:text-orange-brand'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Booking Button (Desktop) */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" onClick={() => window.open(waLink, '_blank')}>
              Agendar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white-soft focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-dark absolute top-20 left-0 w-full shadow-2xl z-30 animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                className={`block px-3 py-4 text-base font-heading uppercase text-center border-b border-gray-medium transition-colors
                  ${location.pathname === link.path ? 'text-orange-brand' : 'text-gray-300 hover:text-white-soft'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3 flex justify-center">
              <Button fullWidth variant="primary" onClick={() => window.open(waLink, '_blank')}>
                Agendar Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
