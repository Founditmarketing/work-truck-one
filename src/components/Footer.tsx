import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-industrial-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-display text-2xl font-black tracking-tight text-white">
                WORK TRUCK <span className="text-safety-amber">ONE</span>
              </span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">
              Central Louisiana's premier commercial truck upfitting and vehicle enhancement facility. Built tough. Built for the job.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-industrial-gray border border-white/10 flex items-center justify-center text-gray-400 hover:text-safety-amber hover:border-safety-amber/50 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-industrial-gray border border-white/10 flex items-center justify-center text-gray-400 hover:text-safety-amber hover:border-safety-amber/50 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-black text-xl mb-6 uppercase tracking-widest">SERVICES</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm">Service Bodies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm">Platforms & Flatbeds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm">Liftgates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm">Cranes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm">Accessories</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-black text-xl mb-6 uppercase tracking-widest">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-safety-amber flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 font-medium leading-relaxed uppercase tracking-wide text-sm">
                  2203 MacArthur Dr<br />
                  Alexandria, LA 71303
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-safety-amber flex-shrink-0" />
                <a href="tel:3184432337" className="text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm">
                  318-443-BEDS
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-safety-amber flex-shrink-0" />
                <a href="mailto:info@worktruck.one" className="text-gray-400 hover:text-safety-amber transition-colors font-medium uppercase tracking-wide text-sm">
                  info@worktruck.one
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white font-display font-black text-xl mb-6 uppercase tracking-widest">HOURS</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-400 font-medium uppercase tracking-wide text-sm">Mon - Fri</span>
                <span className="text-white font-medium uppercase tracking-wide text-sm">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-400 font-medium uppercase tracking-wide text-sm">Saturday</span>
                <span className="text-white font-medium uppercase tracking-wide text-sm">By Appointment</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-400 font-medium uppercase tracking-wide text-sm">Sunday</span>
                <span className="text-safety-amber font-medium uppercase tracking-wide text-sm">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Work Truck One. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
