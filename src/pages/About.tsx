import { ArrowRight, CheckCircle2, Award, Users, Shield } from 'lucide-react';
import LeadForm from '../components/LeadForm';

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-industrial-black overflow-hidden border-b-4 border-safety-amber">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1541888052185-1178556637e1?q=80&w=2940&auto=format&fit=crop"
                        alt="Work Truck One Facility"
                        className="w-full h-full object-cover grayscale opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl sm:text-7xl font-black italic text-white leading-[0.85] mb-6 tracking-tighter uppercase">
                            DECADES OF <br />UNCOMPROMISING <span className="text-safety-amber">DURABILITY.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 font-medium max-w-2xl leading-relaxed">
                            We aren't just truck upfitters. We are engineers of operational efficiency, building the backbone of Louisiana's workforce since day one.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-industrial-gray text-industrial-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-lg mb-4 flex items-center gap-4">
                                <span className="w-12 h-1 bg-safety-amber"></span>
                                OUR LEGACY
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 uppercase italic tracking-tighter">
                                BUILT TOUGH IN <br />CENTRAL LOUISIANA.
                            </h3>
                            <div className="prose prose-lg prose-invert text-gray-400">
                                <p className="leading-relaxed mb-6">
                                    Work Truck One was founded on a simple, uncompromising principle: commercial tradesmen deserve equipment that works as hard as they do. Located in the heart of Alexandria, LA, our state-of-the-art facility is dedicated entirely to the science of upfitting heavy-duty work trucks.
                                </p>
                                <p className="leading-relaxed">
                                    We don't do automotive repair. We don't sell passenger cars. We focus 100% of our engineering, fabrication, and installation expertise on commercial fleet solutions. From single-axle service bodies to massive articulating cranes, every bolt we turn is designed to extend the lifespan of your chassis and maximize your daily profitability on the job site.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-industrial-black border border-white/10 p-8 flex flex-col items-center justify-center text-center">
                                <Award className="w-12 h-12 text-safety-amber mb-4" />
                                <h4 className="text-4xl font-black text-white mb-2">30+</h4>
                                <p className="text-gray-400 uppercase tracking-widest font-bold text-sm">Years Experience</p>
                            </div>
                            <div className="bg-industrial-black border border-white/10 p-8 flex flex-col items-center justify-center text-center">
                                <Users className="w-12 h-12 text-safety-amber mb-4" />
                                <h4 className="text-4xl font-black text-white mb-2">500+</h4>
                                <p className="text-gray-400 uppercase tracking-widest font-bold text-sm">Active Fleets</p>
                            </div>
                            <div className="bg-industrial-black border border-white/10 p-8 flex flex-col items-center justify-center text-center col-span-2">
                                <Shield className="w-12 h-12 text-safety-amber mb-4" />
                                <h4 className="text-4xl font-black text-white mb-2">100%</h4>
                                <p className="text-gray-400 uppercase tracking-widest font-bold text-sm">NHTSA/DOT Compliant Builds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Difference Segment */}
            <section className="py-24 bg-industrial-black text-industrial-light border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-lg mb-4 flex items-center justify-center gap-4">
                            <span className="w-12 h-1 bg-safety-amber"></span>
                            THE WORK TRUCK ONE DIFFERENCE
                            <span className="w-12 h-1 bg-safety-amber"></span>
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                            WHY FLEET MANAGERS TRUST US.
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Master Fabricators", desc: "Our team consists of certified welders and 12-volt electrical specialists. We don't just bolt parts on; we engineer fully integrated systems." },
                            { title: "Premium Partnerships", desc: "We are authorized dealers and installers for the top heavy-duty equipment manufacturers in the world. We only install what we would trust ourselves." },
                            { title: "Turnkey Delivery", desc: "From the initial CAD layout design to the final DOT inspection, we handle the entire upfit process so you can keep focusing on your core business." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-industrial-gray p-8 border-l-4 border-white hover:border-safety-amber transition-colors">
                                <CheckCircle2 className="w-8 h-8 text-safety-amber mb-6" />
                                <h4 className="text-2xl font-display font-black text-white mb-4 uppercase tracking-wide">{item.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LeadForm />
        </>
    );
}
