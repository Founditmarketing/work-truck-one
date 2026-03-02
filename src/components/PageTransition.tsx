import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
    key?: string;
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 15,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: -15,
    },
};

const pageTransition = {
    type: 'spring',
    stiffness: 120,
    damping: 20,
    mass: 0.5,
};

export default function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
}
