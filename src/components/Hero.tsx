import { Phone, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Slower, heavier parallax for the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  // Very subtle parallax for the text content
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-industrial-black">
      {/* Background Image with Ken Burns & Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-[-10%] z-0" // Extended inset to hide edges during pan/zoom
      >
        <motion.img
          src="/images/hero.png"
          alt="Heavy duty service truck on jobsite"
          className="w-full h-full object-cover grayscale opacity-40 origin-center"
          // Ken Burns Effect: Slow infinite zoom
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-black/90 via-transparent to-industrial-black mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-transparent to-transparent pointer-events-none"></div>
      </motion.div>

      {/* Atmospheric Film Grain (Sensory Depth) */}
      <div className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-4xl transform -skew-x-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Custom spring-like ease
          >
            <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black italic text-white leading-[0.85] mb-2 tracking-tighter">
              BUILT <span className="text-stroke">TOUGH.</span>
            </h1>
            <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black italic text-safety-amber leading-[0.85] mb-8 tracking-tighter">
              NO EXCUSES.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="transform skew-x-6 pl-5 border-l-4 border-safety-amber mb-12 relative"
          >
            {/* Subtle glow on the border */}
            <div className="absolute left-[-4px] top-0 bottom-0 w-[4px] bg-safety-amber blur-sm opacity-50"></div>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-bold max-w-2xl leading-tight uppercase tracking-wide">
              Louisiana's Trusted Provider of Commercial Work-Truck Upfitting, Service Bodies, Cranes & Heavy-Duty Accessories.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 transform skew-x-6"
          >
            {/* Magnetic/Kinetic CTA Button */}
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto bg-safety-amber text-industrial-black font-display font-black text-xl py-5 px-10 transition-all uppercase tracking-widest clip-br overflow-hidden shadow-[0_0_30px_rgba(255,171,0,0.15)] hover:shadow-[0_0_40px_rgba(255,171,0,0.3)]"
            >
              {/* Kinetic Hover Fill */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10">Request a Quote</span>
              <ArrowRight className="relative w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 ease-out z-10" />
            </motion.a>

            <motion.a
              href="tel:3184432337"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-safety-amber text-white hover:text-safety-amber font-display font-black text-xl py-5 px-10 transition-all uppercase tracking-widest clip-br overflow-hidden"
            >
              {/* Kinetic Hover Fill */}
              <div className="absolute inset-0 bg-safety-amber/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <Phone className="relative w-6 h-6 z-10" />
              <span className="relative z-10">318-443-BEDS</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-safety-amber text-industrial-black font-display font-black text-2xl py-4 overflow-hidden z-20 border-y-4 border-black shadow-2xl shadow-safety-amber/20">
        <div className="animate-marquee flex gap-12 items-center tracking-widest">
          <span>// SERVICE BODIES</span>
          <span>// LIFTGATES</span>
          <span>// CRANES</span>
          <span>// FLATBEDS</span>
          <span>// DUMP BODIES</span>
          <span>// HOOKLIFTS</span>
          <span>// CUSTOM FABRICATION</span>
          <span>// STROBES & LIGHTING</span>
          <span>// TOWING ACCESSORIES</span>
          {/* Duplicate for seamless loop */}
          <span>// SERVICE BODIES</span>
          <span>// LIFTGATES</span>
          <span>// CRANES</span>
          <span>// FLATBEDS</span>
          <span>// DUMP BODIES</span>
          <span>// HOOKLIFTS</span>
          <span>// CUSTOM FABRICATION</span>
          <span>// STROBES & LIGHTING</span>
          <span>// TOWING ACCESSORIES</span>
        </div>
      </div>
    </section>
  );
}
