import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInFromLeftProps {
    children: ReactNode;
}

const SlideInFromLeft = ({ children }: SlideInFromLeftProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};

export default SlideInFromLeft;
