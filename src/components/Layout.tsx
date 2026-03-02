import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';

export default function Layout() {
    const location = useLocation();
    const element = useOutlet();

    return (
        <div className="min-h-screen bg-industrial-black text-industrial-light selection:bg-safety-amber selection:text-industrial-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <PageTransition key={location.pathname}>
                        {element}
                    </PageTransition>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}
