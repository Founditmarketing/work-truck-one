import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-industrial-black/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-display text-2xl font-black tracking-tight text-white select-none">
              WORK TRUCK <span className="text-safety-amber">ONE</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-semibold text-industrial-light hover:text-safety-amber transition-colors">
              HOME
            </Link>
            <Link to="/about" className="text-sm font-semibold text-industrial-light hover:text-safety-amber transition-colors">
              ABOUT
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-industrial-light hover:text-safety-amber transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:3184432337"
              className="flex items-center space-x-2 text-sm font-bold text-white hover:text-safety-amber transition-colors tracking-widest"
            >
              <Phone className="w-4 h-4" />
              <span>318-443-BEDS</span>
            </a>
            <a
              href="#quote"
              className="bg-safety-amber hover:bg-white text-industrial-black font-display font-black py-2.5 px-6 transition-colors uppercase tracking-widest text-sm clip-br"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-industrial-light hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-industrial-black border-b border-white/10 absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link
              to="/"
              className="block text-base font-semibold text-industrial-light hover:text-safety-amber"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="block text-base font-semibold text-industrial-light hover:text-safety-amber"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="block text-base font-semibold text-industrial-light hover:text-safety-amber"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
              <a
                href="tel:3184432337"
                className="flex items-center justify-center space-x-2 text-base font-bold text-white bg-white/5 py-3 rounded-sm"
              >
                <Phone className="w-5 h-5" />
                <span>318-443-BEDS</span>
              </a>
              <a
                href="#quote"
                className="block text-center bg-safety-amber text-industrial-black font-display font-bold py-3 rounded-sm uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
