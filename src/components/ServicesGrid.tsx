import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function ServicesGrid() {
  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const currentItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="py-24 bg-industrial-gray relative overflow-hidden">
      {/* Subtle atmospheric noise overlay for sensory depth */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-lg mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-safety-amber"></span>
              OUR CAPABILITIES
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.9] italic tracking-tighter">
              ENGINEERED FOR THE <br className="hidden md:block" />
              TOUGHEST JOBS.
            </h3>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={currentItemVariants}
              whileHover={{ y: -8 }} // Magnetic lift on hover
              className={`group relative overflow-hidden bg-industrial-black border-2 border-white/10 hover:border-safety-amber transition-all duration-500 clip-br hover:shadow-[0_20px_40px_rgba(255,171,0,0.15)] ${service.span}`}
            >
              <Link to={`/services/${service.id}`} className="absolute inset-0 z-30 flex" aria-label={`View ${service.title} details`}>
                <span className="sr-only">View {service.title}</span>
              </Link>
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end pointer-events-none">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h4 className="text-3xl md:text-4xl font-display font-black text-white mb-3 tracking-wider uppercase italic drop-shadow-lg">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2 text-lg drop-shadow-md">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner accent - smooth slide in */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-safety-amber flex items-start justify-end p-3 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                  <ArrowUpRight className="w-8 h-8 text-industrial-black" />
                </div>
              </div>

              {/* Hazard stripe border effect on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-2 hazard-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] origin-left z-20 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
