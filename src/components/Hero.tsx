import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-industrial-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580674684081-776733156bf6?q=80&w=2940&auto=format&fit=crop"
          alt="Heavy duty truck in workshop"
          className="w-full h-full object-cover grayscale opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-black via-transparent to-industrial-black mix-blend-multiply"></div>
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl transform -skew-x-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black italic text-white leading-[0.85] mb-2 tracking-tighter">
              BUILT <span className="text-stroke">TOUGH.</span>
            </h1>
            <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black italic text-safety-amber leading-[0.85] mb-8 tracking-tighter">
              NO EXCUSES.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="transform skew-x-6 pl-4 border-l-4 border-safety-amber mb-12"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-bold max-w-2xl leading-tight uppercase tracking-wide">
              Louisiana's trusted authority for commercial work-truck upfitting & heavy-duty enhancements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 transform skew-x-6"
          >
            <a
              href="#quote"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto bg-safety-amber hover:bg-white text-industrial-black font-display font-black text-xl py-5 px-10 transition-all uppercase tracking-widest clip-br"
            >
              Request a Quote
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="tel:3184432337"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-safety-amber text-white hover:text-safety-amber font-display font-black text-xl py-5 px-10 transition-all uppercase tracking-widest clip-br"
            >
              <Phone className="w-6 h-6" />
              318-443-BEDS
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-safety-amber text-industrial-black font-display font-black text-2xl py-4 overflow-hidden z-20 border-y-4 border-black">
        <div className="animate-marquee flex gap-12 items-center tracking-widest">
          <span>// SERVICE BODIES</span>
          <span>// LIFTGATES</span>
          <span>// CRANES</span>
          <span>// DUMP BODIES</span>
          <span>// HOOKLIFTS</span>
          <span>// CUSTOM FABRICATION</span>
          {/* Duplicate for seamless loop */}
          <span>// SERVICE BODIES</span>
          <span>// LIFTGATES</span>
          <span>// CRANES</span>
          <span>// DUMP BODIES</span>
          <span>// HOOKLIFTS</span>
          <span>// CUSTOM FABRICATION</span>
        </div>
      </div>
    </section>
  );
}
