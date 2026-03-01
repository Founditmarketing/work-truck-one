import { motion } from 'motion/react';

const signals = [
  {
    number: '01',
    title: 'DECADES OF EXPERIENCE',
    description: 'Trusted by Central Louisiana contractors and fleets for over 20 years. We know what works.',
  },
  {
    number: '02',
    title: 'PROFESSIONAL FACILITY',
    description: 'State-of-the-art upfitting bays equipped for heavy-duty commercial jobs and massive fleets.',
  },
  {
    number: '03',
    title: 'COMMERCIAL CAPABILITY',
    description: 'From custom fabrication to complex hydraulic installations, we handle it all in-house.',
  },
];

export default function TrustSignals() {
  return (
    <section className="bg-industrial-black border-b-4 border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-white/10">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-12 group hover:bg-industrial-gray transition-colors duration-300 relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-safety-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <span className="text-6xl font-display font-black text-stroke-amber mb-6 block group-hover:text-safety-amber transition-colors duration-300">
                {signal.number}
              </span>
              
              <h3 className="text-2xl font-display font-black text-white mb-4 tracking-wider uppercase">
                {signal.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed font-medium text-lg">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
