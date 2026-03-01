import Hero from '../components/Hero';
import TrustSignals from '../components/TrustSignals';
import ServicesGrid from '../components/ServicesGrid';
import CrossSellBanner from '../components/CrossSellBanner';
import LeadForm from '../components/LeadForm';

export default function Home() {
    return (
        <>
            <Hero />
            <TrustSignals />
            <ServicesGrid />
            <CrossSellBanner />
            <LeadForm />
        </>
    );
}
