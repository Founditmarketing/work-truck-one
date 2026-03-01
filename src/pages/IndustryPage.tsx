import { useParams, Link } from 'react-router-dom';
import { industries } from '../data/industries';
import { services } from '../data/services';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import LeadForm from '../components/LeadForm';

export default function IndustryPage() {
    const { id } = useParams<{ id: string }>();
    const industry = industries.find((i) => i.id === id);

    if (!industry) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-industrial-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-black mb-4 uppercase tracking-widest text-safety-amber">Industry Not Found</h1>
                    <Link to="/" className="text-gray-400 hover:text-white inline-flex items-center group">
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    // Map the recommended service IDs to their full data objects
    const relatedServices = industry.recommendedServices
        .map(serviceId => services.find(s => s.id === serviceId))
        .filter((s): s is typeof services[0] => s !== undefined);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-industrial-black overflow-hidden border-b-4 border-safety-amber">
                <div className="absolute inset-0 z-0">
                    <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover grayscale opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl pt-8">
                        <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-sm mb-4">
                            INDUSTRY SOLUTION
                        </h2>
                        <h1 className="text-5xl sm:text-7xl font-black italic text-white leading-[0.85] mb-6 tracking-tighter uppercase">
                            {industry.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 font-medium max-w-2xl leading-relaxed">
                            {industry.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content - Challenges and Solutions */}
            <section className="py-24 bg-industrial-gray text-industrial-light border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* The Challenge */}
                        <div>
                            <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-lg mb-8 flex items-center gap-4">
                                <span className="w-12 h-1 bg-safety-amber"></span>
                                THE CHALLENGES
                            </h2>
                            <div className="space-y-6">
                                {industry.challenges.map((challenge, idx) => (
                                    <div key={idx} className="bg-industrial-black p-6 border-l-4 border-red-800">
                                        <p className="text-xl font-medium text-gray-300">{challenge}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* The Solution */}
                        <div>
                            <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-lg mb-8 flex items-center gap-4">
                                <span className="w-12 h-1 bg-safety-amber"></span>
                                OUR SOLUTIONS
                            </h2>
                            <div className="space-y-6">
                                {industry.solutions.map((solution, idx) => (
                                    <div key={idx} className="bg-industrial-black p-6 border-l-4 border-safety-amber flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-safety-amber flex-shrink-0 mt-1" />
                                        <p className="text-xl font-medium text-white">{solution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Recommended Upfits Grid */}
            <section className="py-24 bg-industrial-black text-industrial-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-lg mb-4 flex items-center justify-center gap-4">
                            <span className="w-12 h-1 bg-safety-amber"></span>
                            RECOMMENDED UPFITS
                            <span className="w-12 h-1 bg-safety-amber"></span>
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                            PURPOSE-BUILT EQUIPMENT.
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="group flex flex-col bg-industrial-gray border border-white/10 hover:border-safety-amber transition-colors clip-br overflow-hidden"
                            >
                                <div className="h-64 relative overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-gray to-transparent"></div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow relative bg-industrial-gray">
                                    {/* Line accent */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-safety-amber scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

                                    <h4 className="text-2xl font-display font-black text-white uppercase italic mb-3">{service.title}</h4>
                                    <p className="text-gray-400 mb-8 line-clamp-3">{service.description}</p>

                                    <div className="mt-auto flex items-center text-safety-amber font-display font-black tracking-widest uppercase text-sm">
                                        View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadForm />
        </>
    );
}
