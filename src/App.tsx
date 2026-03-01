/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import ServicesGrid from './components/ServicesGrid';
import CrossSellBanner from './components/CrossSellBanner';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-industrial-black text-industrial-light selection:bg-safety-amber selection:text-industrial-black">
      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <ServicesGrid />
        <CrossSellBanner />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
