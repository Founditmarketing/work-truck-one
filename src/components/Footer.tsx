import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-industrial-black border-t-2 border-safety-amber pt-20 pb-10 relative overflow-hidden">
      {/* Sensory Depth: Film Grain */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-display text-2xl font-black tracking-tight text-white select-none">
                WORK TRUCK <span className="text-safety-amber">ONE</span>
              </Link>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">
              Central Louisiana's premier commercial truck upfitting and vehicle enhancement facility. Built tough. Built for the job.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-12 h-12 rounded bg-industrial-black border-2 border-white/10 flex items-center justify-center text-gray-400 hover:text-industrial-black hover:bg-safety-amber hover:border-safety-amber transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-12 h-12 rounded bg-industrial-black border-2 border-white/10 flex items-center justify-center text-gray-400 hover:text-industrial-black hover:bg-safety-amber hover:border-safety-amber transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-black text-xl mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-safety-amber rounded-full"></span>
              SERVICES
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Service Bodies', path: '/services/service-bodies' },
                { name: 'Platforms & Flatbeds', path: '/services/flatbeds' },
                { name: 'Liftgates', path: '/services/liftgates' },
                { name: 'Cranes', path: '/services/cranes' },
                { name: 'Accessories', path: '/services/accessories' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="transform -translate-x-6 group-hover:translate-x-0 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-display font-black text-xl mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-safety-amber rounded-full"></span>
              INDUSTRIES
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Construction', path: '/industries/construction' },
                { name: 'Landscaping', path: '/industries/landscaping' },
                { name: 'Heavy Mechanics', path: '/industries/heavy-mechanic' },
                { name: 'Municipalities', path: '/industries/municipality' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="transform -translate-x-6 group-hover:translate-x-0 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-display font-black text-xl mt-10 mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-safety-amber rounded-full"></span>
              COMPANY
            </h4>
            <ul className="space-y-4 flex flex-wrap gap-4">
              <li><Link to="/about" className="text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm border-b border-white/10 hover:border-safety-amber pb-1">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm border-b border-white/10 hover:border-safety-amber pb-1">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-black text-xl mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-safety-amber rounded-full"></span>
              CONTACT US
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 bg-white/5 p-4 border border-white/5 hover:border-safety-amber/30 transition-colors">
                <MapPin className="w-6 h-6 text-safety-amber flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium leading-relaxed uppercase tracking-wide text-sm">
                  2203 MacArthur Dr<br />
                  Alexandria, LA 71303
                </span>
              </li>
              <li className="flex items-center space-x-4 bg-white/5 p-4 border border-white/5 hover:border-safety-amber/30 transition-colors">
                <Phone className="w-6 h-6 text-safety-amber flex-shrink-0" />
                <a href="tel:3184432337" className="text-gray-300 hover:text-safety-amber transition-colors font-black uppercase tracking-widest text-lg">
                  318-443-BEDS
                </a>
              </li>
              <li className="flex items-center space-x-4 bg-white/5 p-4 border border-white/5 hover:border-safety-amber/30 transition-colors">
                <Mail className="w-6 h-6 text-safety-amber flex-shrink-0" />
                <a href="mailto:info@worktruck.one" className="text-gray-300 hover:text-safety-amber transition-colors font-bold uppercase tracking-wide text-sm">
                  info@worktruck.one
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Work Truck One. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm font-medium transition-colors hover:underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm font-medium transition-colors hover:underline underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
