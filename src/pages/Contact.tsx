import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import LeadForm from '../components/LeadForm';

export default function Contact() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-industrial-black overflow-hidden border-b-4 border-safety-amber">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/about-facility.png"
                        alt="Contact Work Truck One"
                        className="w-full h-full object-cover grayscale opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl sm:text-7xl font-black italic text-white leading-[0.85] mb-6 tracking-tighter uppercase">
                            REACH OUT. <span className="text-safety-amber">GEAR UP.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
                            Based in Alexandria, LA. Shipping and upfitting fleets nationwide. Fill out the form below or call us directly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content - Contact Info & Map Placeholder */}
            <section className="py-24 bg-industrial-gray text-industrial-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Information Cards */}
                        <div className="space-y-8">
                            <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-lg mb-8 flex items-center gap-4">
                                <span className="w-12 h-1 bg-safety-amber"></span>
                                DIRECT LINES
                            </h2>

                            <div className="bg-industrial-black border border-white/10 p-8 flex items-start gap-6 group hover:border-safety-amber transition-colors">
                                <div className="bg-safety-amber p-4 rounded-sm flex-shrink-0">
                                    <Phone className="w-8 h-8 text-industrial-black" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-display font-black text-white mb-2 uppercase tracking-wide">Sales & Support</h4>
                                    <a href="tel:3184432337" className="text-xl text-gray-300 hover:text-safety-amber transition-colors font-medium block mb-1">318-443-BEDS</a>
                                    <p className="text-gray-500 text-sm tracking-wide uppercase">Available Mon-Fri, 8AM - 5PM</p>
                                </div>
                            </div>

                            <div className="bg-industrial-black border border-white/10 p-8 flex items-start gap-6 group hover:border-safety-amber transition-colors">
                                <div className="bg-safety-amber p-4 rounded-sm flex-shrink-0">
                                    <MapPin className="w-8 h-8 text-industrial-black" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-display font-black text-white mb-2 uppercase tracking-wide">Headquarters</h4>
                                    <p className="text-xl text-gray-300 font-medium block leading-relaxed mb-1">
                                        2203 MacArthur Dr <br />
                                        Alexandria, LA 71303
                                    </p>
                                    <p className="text-gray-500 text-sm tracking-wide uppercase">Facility Tours by Appointment</p>
                                </div>
                            </div>

                            <div className="bg-industrial-black border border-white/10 p-8 flex items-start gap-6 group hover:border-safety-amber transition-colors">
                                <div className="bg-safety-amber p-4 rounded-sm flex-shrink-0">
                                    <Mail className="w-8 h-8 text-industrial-black" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-display font-black text-white mb-2 uppercase tracking-wide">Email Us</h4>
                                    <a href="mailto:info@worktruck.one" className="text-xl text-gray-300 hover:text-safety-amber transition-colors font-medium block mb-1">info@worktruck.one</a>
                                    <p className="text-gray-500 text-sm tracking-wide uppercase">Typical Response Time: 2 Hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Simulated Map / Facility Image */}
                        <div className="relative border-4 border-white/10 p-2 transform md:-rotate-1 bg-industrial-black h-96 lg:h-full min-h-[500px]">
                            <img
                                src="/images/contact-map.png"
                                alt="Work Truck One Facility Map View"
                                className="w-full h-full object-cover grayscale opacity-80"
                            />
                            <div className="absolute inset-0 bg-industrial-black/20"></div>

                            {/* Overlay Pin Location */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="w-16 h-16 bg-safety-amber rounded-full flex items-center justify-center animate-bounce shadow-xl shadow-safety-amber/20 border-4 border-industrial-black">
                                    <MapPin className="w-8 h-8 text-industrial-black" />
                                </div>
                                <div className="bg-industrial-black border-2 border-safety-amber text-safety-amber px-6 py-2 mt-4 font-display font-black tracking-widest text-sm uppercase shadow-2xl">
                                    Alexandria, LA Facility
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Embedded Lead Form */}
            <LeadForm />
        </>
    );
}
