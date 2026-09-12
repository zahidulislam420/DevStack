import { useState } from 'react';
import { NavLinks } from './NavLinks';
import { AuthButtons } from './AuthButtons';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-[72px] w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto grid h-full w-full max-w-[1320px] grid-cols-[auto_1fr_auto] items-center gap-6 px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <img src="/hamburger.png" alt="" className="h-6 w-10 object-contain" />
        </button>

        <a href="#home" className="justify-self-center md:justify-self-start" aria-label="Dev Stack home">
          <img src="/logo-text.png" alt="Dev Stack" className="h-[22px] w-auto" />
        </a>

        <div className="hidden justify-self-center md:flex">
          <NavLinks />
        </div>

        <div className="hidden justify-self-end md:flex">
          <AuthButtons />
        </div>

        <div className="md:hidden">
          <AuthButtons className="gap-2" />
        </div>
      </nav>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
