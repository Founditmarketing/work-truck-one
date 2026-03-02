import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

import FloatingInput from './FloatingInput';

export default function LeadForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="quote" className="py-24 bg-industrial-black relative border-t-4 border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Copy */}
          <div>
            <h2 className="text-safety-amber font-display font-black tracking-widest uppercase text-lg mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-safety-amber"></span>
              REQUEST A QUOTE
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-8 italic tracking-tighter">
              LET'S BUILD YOUR <br />
              <span className="text-stroke">NEXT WORKHORSE.</span>
            </h3>
            <p className="text-xl text-gray-400 font-medium mb-12 max-w-lg leading-relaxed">
              Fill out the form below with your project details, and our commercial upfitting specialists will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-industrial-gray border-2 border-white/10 flex items-center justify-center flex-shrink-0 clip-br">
                  <span className="font-display font-black text-safety-amber text-2xl">01</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-black text-2xl mb-2 uppercase tracking-wide">Tell Us What You Need</h4>
                  <p className="text-gray-400 font-medium text-lg">Provide details about your truck and the specific upfitting required.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-industrial-gray border-2 border-white/10 flex items-center justify-center flex-shrink-0 clip-br">
                  <span className="font-display font-black text-safety-amber text-2xl">02</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-black text-2xl mb-2 uppercase tracking-wide">Get a Custom Estimate</h4>
                  <p className="text-gray-400 font-medium text-lg">Our team will review your specs and provide a detailed, competitive quote.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-industrial-gray border-2 border-white/10 flex items-center justify-center flex-shrink-0 clip-br">
                  <span className="font-display font-black text-safety-amber text-2xl">03</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-black text-2xl mb-2 uppercase tracking-wide">Schedule the Build</h4>
                  <p className="text-gray-400 font-medium text-lg">Drop off your vehicle at our Alexandria facility and let our experts go to work.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-industrial-gray p-8 md:p-12 border-4 border-white/10 relative overflow-hidden clip-br"
          >
            {formState === 'success' ? (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <CheckCircle2 className="w-24 h-24 text-safety-amber mb-8" />
                </motion.div>
                <h4 className="text-4xl font-display font-black text-white mb-4 uppercase tracking-wider">QUOTE REQUEST RECEIVED</h4>
                <p className="text-gray-400 font-medium max-w-md text-lg">
                  Thank you for reaching out. One of our commercial upfitting specialists will contact you shortly to discuss your project.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-10 text-safety-amber font-display font-black uppercase tracking-widest hover:text-white transition-colors border-b-2 border-safety-amber hover:border-white pb-1"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
                  <FloatingInput id="firstName" label="First Name" required />
                  <FloatingInput id="lastName" label="Last Name" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
                  <FloatingInput id="email" label="Email Address" type="email" required />
                  <FloatingInput id="phone" label="Phone Number" type="tel" required />
                </div>

                <FloatingInput id="company" label="Company Name (Optional)" />

                <FloatingInput id="project" label="Project Details" required isTextArea />

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full group flex items-center justify-center gap-3 bg-safety-amber hover:bg-white text-industrial-black font-display font-black text-xl py-5 px-8 transition-all uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed clip-br mt-8"
                >
                  {formState === 'submitting' ? (
                    'SENDING...'
                  ) : (
                    <>
                      SUBMIT REQUEST
                      <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-1 bg-safety-amber"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-safety-amber"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
