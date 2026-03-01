import { Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '../data/services';
import { industries } from '../data/industries';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeImagePreview, setActiveImagePreview] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobile(null);
    setActiveDropdown(null);
    setActiveImagePreview(null);
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
    // Set default image preview to the first item's image when opening
    if (menu === 'services' && services.length > 0) {
      setActiveImagePreview(services[0].image);
    } else if (menu === 'industries' && industries.length > 0) {
      setActiveImagePreview(industries[0].image);
    }
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
      setActiveImagePreview(null);
    }, 150);
  };

  const toggleMobileExpanded = (menu: string) => {
    if (expandedMobile === menu) {
      setExpandedMobile(null);
    } else {
      setExpandedMobile(menu);
    }
  };

  // Mega Menu Panel Component for DRY code
  const MegaMenuPanel = ({ items, basePath, title, description }: any) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full min-w-[800px] bg-industrial-black border-t-2 border-safety-amber shadow-2xl mt-4 hidden md:block"
    >
      <div className="absolute -top-4 left-0 w-full h-4"></div> {/* Hover bridge */}
      <div className="flex h-[400px]">
        {/* Left Side: Navigation Links */}
        <div className="w-1/2 p-10 bg-industrial-gray/50 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-black text-safety-amber uppercase tracking-widest mb-6">{title}</h3>
            <div className="grid grid-cols-1 gap-2">
              {items.map((item: any, index: number) => (
                <Link
                  key={item.id}
                  to={`/${basePath}/${item.id}`}
                  onMouseEnter={() => setActiveImagePreview(item.image)}
                  className="group flex items-center justify-between px-4 py-3 bg-industrial-black border border-white/5 hover:border-safety-amber transition-colors"
                >
                  <span className="text-lg font-bold text-white tracking-wide uppercase group-hover:text-safety-amber transition-colors">
                    {item.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-safety-amber transform group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed mt-6">
            {description}
          </p>
        </div>

        {/* Right Side: Dynamic Image Preview */}
        <div className="w-1/2 relative bg-industrial-black overflow-hidden">
          <AnimatePresence mode="wait">
            {activeImagePreview && (
              <motion.img
                key={activeImagePreview}
                src={activeImagePreview}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.8, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity"
              />
            )}
          </AnimatePresence>
          {/* Subtle gradient overlay to match aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-black/80 to-transparent pointer-events-none"></div>

          <div className="absolute bottom-10 left-10">
            <span className="bg-safety-amber text-industrial-black font-black uppercase tracking-widest text-xs px-3 py-1">
              Preview
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-industrial-black/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> {/* Added relative for full-width dropdown positioning */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-display text-2xl font-black tracking-tight text-white select-none relative z-10">
              WORK TRUCK <span className="text-safety-amber">ONE</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 z-10">
            <Link to="/" className="text-sm font-semibold text-industrial-light hover:text-safety-amber transition-colors tracking-wide">
              HOME
            </Link>

            {/* Services Mega-Dropdown */}
            <div
              className="" // Removing relative to allow absolute child to span full width of max-w-7xl relative parent
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors focus:outline-none ${activeDropdown === 'services' ? 'text-safety-amber' : 'text-industrial-light hover:text-safety-amber'}`}>
                SERVICES <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <MegaMenuPanel
                    items={services}
                    basePath="services"
                    title="Our Upfit Capabilities"
                    description="From heavy-duty mechanic cranes to versatile service bodies, we engineer and construct field-ready solutions designed for extreme commercial abuse."
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Industries Mega-Dropdown */}
            <div
              className="" // Removing relative
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors focus:outline-none ${activeDropdown === 'industries' ? 'text-safety-amber' : 'text-industrial-light hover:text-safety-amber'}`}>
                INDUSTRIES <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <MegaMenuPanel
                    items={industries}
                    basePath="industries"
                    title="Trade-Specific Solutions"
                    description="We understand the specific regulatory compliance and operational requirements for highly specialized trades like Heavy Mechanics, Construction, and Municipalities."
                  />
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="text-sm font-semibold text-industrial-light hover:text-safety-amber transition-colors tracking-wide">
              COMPANY
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-industrial-light hover:text-safety-amber transition-colors tracking-wide">
              CONTACT
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6 z-10">
            <a
              href="tel:3184432337"
              className="flex items-center space-x-2 text-sm font-bold text-white hover:text-safety-amber transition-colors tracking-widest"
            >
              <Phone className="w-4 h-4" />
              <span>318-443-BEDS</span>
            </a>
            <a
              href="#quote"
              className="bg-safety-amber hover:bg-white text-industrial-black font-display font-black py-2.5 px-6 transition-colors uppercase tracking-widest text-sm clip-br relative overflow-hidden group"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 h-full w-full hazard-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-industrial-light hover:text-white focus:outline-none"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-industrial-black border-b-2 border-safety-amber absolute top-full left-0 right-0 max-h-[85vh] overflow-y-auto shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              <Link
                to="/"
                className="block px-3 py-3 text-lg font-bold text-white hover:text-safety-amber tracking-wide uppercase"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileExpanded('services')}
                  className="w-full flex items-center justify-between px-3 py-3 text-lg font-bold text-white hover:text-safety-amber focus:outline-none tracking-wide uppercase"
                >
                  Services
                  <motion.div
                    animate={{ rotate: expandedMobile === 'services' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${expandedMobile === 'services' ? 'text-safety-amber' : ''}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedMobile === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 py-2 space-y-1 my-1 border-l-2 border-white/10 mx-3 bg-white/5">
                        {services.map(s => (
                          <Link key={s.id} to={`/services/${s.id}`} className="block py-2.5 px-3 text-sm font-bold text-gray-300 hover:text-safety-amber uppercase tracking-wide">
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileExpanded('industries')}
                  className="w-full flex items-center justify-between px-3 py-3 text-lg font-bold text-white hover:text-safety-amber focus:outline-none tracking-wide uppercase"
                >
                  Industries
                  <motion.div
                    animate={{ rotate: expandedMobile === 'industries' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${expandedMobile === 'industries' ? 'text-safety-amber' : ''}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedMobile === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 py-2 space-y-1 my-1 border-l-2 border-white/10 mx-3 bg-white/5">
                        {industries.map(i => (
                          <Link key={i.id} to={`/industries/${i.id}`} className="block py-2.5 px-3 text-sm font-bold text-gray-300 hover:text-safety-amber uppercase tracking-wide">
                            {i.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                className="block px-3 py-3 text-lg font-bold text-white hover:text-safety-amber tracking-wide uppercase"
              >
                Company
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-3 text-lg font-bold text-white hover:text-safety-amber tracking-wide uppercase"
              >
                Contact
              </Link>

              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col space-y-4 px-3">
                <a
                  href="tel:3184432337"
                  className="flex items-center justify-center space-x-2 text-base font-bold text-black bg-safety-amber py-3 rounded-sm hover:bg-white transition-colors uppercase tracking-widest clip-br"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="#quote"
                  className="block text-center border-2 border-safety-amber text-safety-amber font-display font-bold py-3 rounded-sm uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
