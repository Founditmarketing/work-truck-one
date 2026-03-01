import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { services } from '../data/services';
import { industries } from '../data/industries';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobile(null);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseEnter = (menu: string) => {
    clearTimeout(timeoutId);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileExpanded = (menu: string) => {
    if (expandedMobile === menu) {
      setExpandedMobile(null);
    } else {
      setExpandedMobile(menu);
    }
  };

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

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 text-sm font-semibold transition-colors focus:outline-none ${activeDropdown === 'services' ? 'text-safety-amber' : 'text-industrial-light hover:text-safety-amber'}`}>
                SERVICES <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-0 mt-4 w-64 bg-industrial-black border border-white/10 shadow-2xl transition-all duration-200 origin-top ${activeDropdown === 'services' ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
              >
                <div className="absolute -top-4 left-0 w-full h-4"></div> {/* Hover bridge */}
                <div className="h-1 w-full bg-safety-amber"></div>
                <div className="py-2">
                  {services.map(s => (
                    <Link key={s.id} to={`/services/${s.id}`} className="block px-6 py-3 text-sm font-medium text-gray-300 hover:text-industrial-black hover:bg-safety-amber transition-colors uppercase tracking-wide">
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 text-sm font-semibold transition-colors focus:outline-none ${activeDropdown === 'industries' ? 'text-safety-amber' : 'text-industrial-light hover:text-safety-amber'}`}>
                INDUSTRIES <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-0 mt-4 w-72 bg-industrial-black border border-white/10 shadow-2xl transition-all duration-200 origin-top ${activeDropdown === 'industries' ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
              >
                <div className="absolute -top-4 left-0 w-full h-4"></div> {/* Hover bridge */}
                <div className="h-1 w-full bg-safety-amber"></div>
                <div className="py-2">
                  {industries.map(i => (
                    <Link key={i.id} to={`/industries/${i.id}`} className="block px-6 py-3 text-sm font-medium text-gray-300 hover:text-industrial-black hover:bg-safety-amber transition-colors uppercase tracking-wide">
                      {i.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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
        <div className="md:hidden bg-industrial-black border-b border-white/10 absolute top-full left-0 right-0 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="px-4 pt-4 pb-8 space-y-2">
            <Link
              to="/"
              className="block px-3 py-3 text-base font-semibold text-industrial-light hover:text-safety-amber"
            >
              HOME
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => toggleMobileExpanded('services')}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold text-industrial-light hover:text-safety-amber focus:outline-none"
              >
                SERVICES
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${expandedMobile === 'services' ? 'rotate-180 text-safety-amber' : ''}`} />
              </button>
              {expandedMobile === 'services' && (
                <div className="pl-6 py-2 space-y-1 my-1 border-l-2 border-white/10 mx-3 bg-white/5">
                  {services.map(s => (
                    <Link key={s.id} to={`/services/${s.id}`} className="block py-2.5 px-3 text-sm font-medium text-gray-300 hover:text-safety-amber uppercase tracking-wide">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Accordion */}
            <div>
              <button
                onClick={() => toggleMobileExpanded('industries')}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold text-industrial-light hover:text-safety-amber focus:outline-none"
              >
                INDUSTRIES
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${expandedMobile === 'industries' ? 'rotate-180 text-safety-amber' : ''}`} />
              </button>
              {expandedMobile === 'industries' && (
                <div className="pl-6 py-2 space-y-1 my-1 border-l-2 border-white/10 mx-3 bg-white/5">
                  {industries.map(i => (
                    <Link key={i.id} to={`/industries/${i.id}`} className="block py-2.5 px-3 text-sm font-medium text-gray-300 hover:text-safety-amber uppercase tracking-wide">
                      {i.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="block px-3 py-3 text-base font-semibold text-industrial-light hover:text-safety-amber"
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-3 text-base font-semibold text-industrial-light hover:text-safety-amber"
            >
              CONTACT
            </Link>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col space-y-4 px-3">
              <a
                href="tel:3184432337"
                className="flex items-center justify-center space-x-2 text-base font-bold text-white bg-white/5 py-3 rounded-sm hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>318-443-BEDS</span>
              </a>
              <a
                href="#quote"
                className="block text-center bg-safety-amber text-industrial-black font-display font-bold py-3 rounded-sm uppercase tracking-wide hover:bg-white transition-colors clip-br"
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
