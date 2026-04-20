import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Shipping & Returns', path: '/shipping' },
  ];

  return (
    <footer className="bg-surface w-full pt-12 md:pt-16 pb-8 md:pb-12 px-6 md:px-8 border-t border-on-surface/10 z-10 relative">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6 md:gap-10">
        
        {/* Row 1: Logo & Identity */}
        <div className="w-full flex justify-center">
          <Link 
            to="/" 
            className="flex items-center gap-4 group transition-all duration-700"
          >
            <img 
              src="/favicon.png" 
              alt="Velvet Seal" 
              className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(233,193,119,0.15)] group-hover:scale-105 transition-all duration-700"
            />
            <span className="text-xl brand-text text-primary uppercase tracking-[0.2em]">
              VELVET
            </span>
          </Link>
        </div>

        {/* Row 2: Secondary Navigation */}
        <div className="w-full flex flex-wrap items-center justify-center gap-x-6 md:gap-x-12 gap-y-4">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-label text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-on-surface/40 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Row 3: Legal & Attribution */}
        <div className="w-full flex flex-col items-center gap-3 pt-6 border-t border-on-surface/5">
          <p className="font-body text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-on-surface/40 text-center">
            © 2026 Velvet and Fruits Company
          </p>
          <p className="font-body text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-on-surface/40 leading-relaxed text-center">
            Developed & managed exclusively by Etasha Sharma and Surender Kushwaha.
          </p>
        </div>

      </div>
    </footer>
  );
}
