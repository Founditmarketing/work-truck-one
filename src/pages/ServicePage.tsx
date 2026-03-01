import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';

export default function ServicePage() {
    const { id } = useParams<{ id: string }>();
    const service = services.find((s) => s.id === id);

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
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-industrial-black overflow-hidden border-b-4 border-safety-amber">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center text-safety-amber hover:text-white font-display uppercase tracking-widest mb-8 text-sm group transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="max-w-4xl">
                        <h1 className="text-5xl sm:text-7xl font-black italic text-white leading-[0.85] mb-6 tracking-tighter uppercase">
                            {service.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 font-medium max-w-2xl leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-industrial-gray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-lg mb-4 flex items-center gap-4">
                                <span className="w-12 h-1 bg-safety-amber"></span>
                                THE DETAILS
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 uppercase italic tracking-tighter">
                                BUILT FOR THE DEMANDS OF YOUR JOB SITE.
                            </h3>
                            <div className="prose prose-lg prose-invert text-gray-400">
                                <p className="leading-relaxed">
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div className="mt-12">
                                <a href="#quote" className="group inline-flex items-center gap-3 bg-safety-amber text-industrial-black hover:bg-white font-display font-black uppercase tracking-widest py-4 px-8 transition-colors clip-br">
                                    Get a Custom Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        <div className="relative border-4 border-white/10 p-2 transform md:rotate-2 hover:rotate-0 transition-transform duration-500 bg-industrial-black h-96 lg:h-full min-h-[400px]">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <LeadForm />
        </>
    );
}
