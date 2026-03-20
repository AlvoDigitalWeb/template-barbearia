import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloatingButton } from '../ui/WhatsAppFloatingButton';
import { CookieBanner } from '../ui/CookieBanner';
import { CookieManager } from '../ui/CookieManager';

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black-deep text-white-soft">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <CookieBanner />
      <CookieManager />
    </div>
  );
}
