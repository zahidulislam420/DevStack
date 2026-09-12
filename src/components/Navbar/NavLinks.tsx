import { NavLink } from 'react-router-dom';

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
      {navLinks.map((link) => (
        <NavLink
          key={link}
          to={`#${link.toLowerCase()}`}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'text-gray-950'
                : 'text-gray-600 hover:text-gray-950'
            }`
          }
        >
          {link}
        </NavLink>
      ))}
    </nav>
  );
}