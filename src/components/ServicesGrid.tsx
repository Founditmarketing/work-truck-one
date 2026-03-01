import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-industrial-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-lg mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-safety-amber"></span>
              OUR CAPABILITIES
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.9] italic tracking-tighter">
              ENGINEERED FOR THE <br className="hidden md:block" />
              TOUGHEST JOBS.
            </h3>
          </div>
          <div className="mt-8 md:mt-0">
            {/* View All Services button removed as all services are displayed directly in the grid below */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-industrial-black border-2 border-white/10 hover:border-safety-amber transition-colors duration-300 clip-br ${service.span}`}
            >
              <Link to={`/services/${service.id}`} className="absolute inset-0 z-30" aria-label={`View ${service.title} details`}></Link>
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-3xl md:text-4xl font-display font-black text-white mb-3 tracking-wider uppercase italic">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2 text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-safety-amber flex items-start justify-end p-3 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                  <ArrowUpRight className="w-8 h-8 text-industrial-black" />
                </div>
              </div>

              {/* Hazard stripe border effect on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-2 hazard-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
