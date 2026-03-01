import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 'service-bodies',
    title: 'Service Bodies',
    description: 'Heavy-duty steel and aluminum bodies designed for maximum storage and durability on the job site.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 'liftgates',
    title: 'Liftgates',
    description: 'Commercial-grade hydraulic liftgates for safe, efficient loading and unloading.',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2940&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 'cranes',
    title: 'Cranes',
    description: 'Telescopic and articulated cranes engineered for heavy lifting in tight spaces.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2940&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 'dump-bodies',
    title: 'Dump Bodies',
    description: 'Rugged dump bodies built to handle the toughest hauling and dumping requirements.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2940&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 'hooklifts',
    title: 'Hooklifts',
    description: 'Versatile hooklift systems allowing one truck to do the work of an entire fleet.',
    image: 'https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?q=80&w=2832&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
];

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
            <a href="#quote" className="group flex items-center gap-3 bg-white text-industrial-black hover:bg-safety-amber font-display font-black uppercase tracking-widest py-4 px-8 transition-colors clip-br">
              View All Services <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
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
