import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, ArrowRight, Settings2, CheckCircle, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import LeadForm from '../components/LeadForm';

// Animation variants
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function ServicePage() {
    const { id } = useParams<{ id: string }>();
    const service = services.find((s) => s.id === id);
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-industrial-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-black mb-4 uppercase tracking-widest text-safety-amber">Service Not Found</h1>
                    <Link to="/" className="text-gray-400 hover:text-white inline-flex items-center group">
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden bg-industrial-black">
            {/* Sensory Depth: Film Grain */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50 fixed-grain" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            {/* Cinematic Hero Section */}
            <section className="relative h-[65vh] min-h-[500px] flex items-end pb-20 bg-industrial-black overflow-hidden border-b-4 border-safety-amber group cursor-default">
                <motion.div style={{ y: heroY, scale: imageScale }} className="absolute inset-0 z-0 origin-bottom">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 origin-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/80 to-transparent"></div>
                </motion.div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl">
                        <motion.div variants={fadeUp}>
                            <Link to="/" className="inline-flex items-center text-safety-amber hover:text-white font-display uppercase tracking-widest mb-8 text-sm group transition-colors">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                RETURN TO CAPABILITIES
                            </Link>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-6xl sm:text-8xl font-black italic text-white leading-[0.85] mb-6 tracking-tighter uppercase drop-shadow-2xl">
                            {service.title}
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl sm:text-3xl text-gray-300 font-medium max-w-2xl leading-relaxed">
                            {service.description}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-32 bg-industrial-black text-industrial-light relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Overview & Core Image with Sticky Scrolling */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
                        <div className="lg:col-span-7">
                            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                                <motion.h2 variants={fadeUp} className="text-safety-amber font-display font-black tracking-widest uppercase text-xl mb-4 flex items-center gap-4">
                                    <span className="w-16 h-1 bg-safety-amber"></span>
                                    THE DETAILS
                                </motion.h2>
                                <motion.h3 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white leading-[1.0] mb-8 uppercase italic tracking-tighter">
                                    ENGINEERED FOR THE <br />DEMANDS OF YOUR JOB SITE.
                                </motion.h3>
                                <motion.div variants={fadeUp} className="prose prose-xl prose-invert text-gray-400 border-l-2 border-white/10 pl-8">
                                    <p className="leading-relaxed">
                                        {service.fullDescription}
                                    </p>
                                </motion.div>

                                <motion.div variants={fadeUp} className="mt-16 flex gap-6">
                                    <motion.a
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#quote"
                                        className="group inline-flex items-center gap-3 bg-safety-amber text-industrial-black font-display font-black uppercase tracking-widest py-5 px-10 transition-colors clip-br hover:shadow-2xl hover:shadow-safety-amber/20"
                                    >
                                        Configure Specs <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Parallax Image Block */}
                        <div className="lg:col-span-5 relative h-[600px] sticky top-32 lg:mt-16 border-4 border-white/5 p-4 bg-industrial-black shadow-2xl overflow-hidden group">
                            <motion.div
                                className="w-full h-full relative overflow-hidden clip-br"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110"
                                />
                                <div className="absolute inset-0 border-[1px] border-safety-amber/30 pointer-events-none mix-blend-overlay"></div>
                            </motion.div>

                            {/* Decorative Cybernetic Elements */}
                            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                                <div className="absolute top-0 right-0 w-full h-1 bg-safety-amber"></div>
                                <div className="absolute top-0 right-0 w-1 h-full bg-safety-amber"></div>
                            </div>
                        </div>
                    </div>

                    {/* Staggered Features Grid */}
                    <div className="py-24 border-t border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                            <div>
                                <h3 className="text-4xl md:text-5xl font-display font-black text-white tracking-widest uppercase italic">Key Upfit Features</h3>
                                <p className="text-gray-400 font-medium text-xl mt-2 uppercase tracking-wide">Precision specs for maximum output.</p>
                            </div>
                            <Settings2 className="w-16 h-16 text-white/10" />
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            {service.features?.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    whileHover={{ y: -5, scale: 1.02, backgroundColor: "rgba(255,184,0,0.05)" }}
                                    className="bg-industrial-gray p-10 border-l-4 border-safety-amber cursor-default transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-industrial-black flex items-center justify-center rounded-sm mb-6 border border-white/10 group-hover:border-safety-amber/50 transition-colors">
                                        <CheckCircle className="w-6 h-6 text-safety-amber" />
                                    </div>
                                    <p className="text-white font-medium text-lg leading-relaxed">{feature}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Split Structure: Benefits & FAQs */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 py-24 border-t border-white/10">
                        {/* Benefits List */}
                        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
                            <h3 className="text-3xl font-display font-black text-white mb-10 tracking-widest uppercase flex items-center gap-4"><Shield className="w-8 h-8 text-safety-amber" /> Operational Edge</h3>
                            <ul className="space-y-8">
                                {service.benefits?.map((benefit, idx) => (
                                    <motion.li key={idx} variants={fadeUp} className="flex items-start gap-6 group">
                                        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-safety-amber text-industrial-black font-black font-display rounded-sm mt-1 shadow-lg shadow-safety-amber/20 group-hover:scale-110 transition-transform">0{idx + 1}</span>
                                        <span className="text-gray-300 text-xl font-medium leading-relaxed bg-white/5 p-4 rounded-sm flex-grow border border-white/5 group-hover:border-safety-amber/30 transition-colors">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* FAQs */}
                        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="relative z-10">
                            <h3 className="text-3xl font-display font-black text-white mb-10 tracking-widest uppercase">Technical Briefing</h3>
                            <div className="space-y-6">
                                {service.faqs?.map((faq, idx) => (
                                    <motion.div key={idx} variants={fadeUp} className="bg-industrial-gray p-8 relative overflow-hidden group hover:bg-industrial-black transition-colors border border-transparent hover:border-white/10 cursor-help">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-safety-amber scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
                                        <h4 className="text-xl font-display font-black text-white mb-3 tracking-wide">{faq.question}</h4>
                                        <p className="text-gray-400 leading-relaxed max-w-lg">{faq.answer}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Call to action */}
            <div className="relative z-10">
                <LeadForm />
            </div>
        </div>
    );
}
