const footerLinks = {
  Product: [
    { label: 'Home', href: '#home' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Projects', href: '#projects' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#careers' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ],
};

const socialLinks = ['GitHub', 'Twitter', 'LinkedIn'];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:gap-8">
          <div>
            <img src="/logo-text.png" alt="Dev Stack" className="h-[22px] w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-6 flex gap-5 text-sm font-medium text-gray-700">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-950">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-pink-600">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-400 md:flex-row md:items-center">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-gray-700">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-700">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
