import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CrossSellBanner() {
  return (
    <section className="py-12 bg-industrial-black border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-industrial-gray border-2 border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group clip-br hover:border-safety-amber/50 transition-colors duration-500"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
          </div>
          
          {/* Hazard stripe accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 hazard-bg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="flex-1 relative z-10">
            <h3 className="text-safety-amber font-display font-black uppercase tracking-widest text-sm mb-2 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-safety-amber"></span>
              NEED VEHICLE ACCESSORIES?
            </h3>
            <h4 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 italic tracking-wider">
              VISIT OUR SISTER COMPANY
            </h4>
            <p className="text-gray-400 font-medium max-w-xl text-lg">
              For premium window tinting, spray-on bedliners, toolboxes, and custom truck accessories, visit Glass Tint Etc. located right next door.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10">
            <a
              href="https://glasstintetc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 hover:border-safety-amber text-white hover:text-safety-amber font-display font-black py-5 px-10 transition-all uppercase tracking-widest clip-br"
            >
              Glass Tint Etc.
              <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform text-safety-amber" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
