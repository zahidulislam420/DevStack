import { useEffect } from 'react';
import { AuthButtons } from './AuthButtons';

const mobileLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/30 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-xl md:hidden">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <img src="/logo-text.png" alt="Dev Stack" className="h-7 w-auto" />
          <button
            onClick={onClose}
            className="p-2 text-2xl leading-none text-gray-600"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="flex-1 space-y-1 p-4" aria-label="Mobile navigation">
          {mobileLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                onClose();
                document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full rounded-lg px-4 py-3 text-left text-base font-medium text-gray-800 hover:bg-gray-100"
            >
              {link}
            </button>
          ))}
        </nav>
        <div className="border-t border-gray-200 p-4">
          <AuthButtons className="w-full flex-col gap-2" />
        </div>
      </aside>
    </>
  );
}