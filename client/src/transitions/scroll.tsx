import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
