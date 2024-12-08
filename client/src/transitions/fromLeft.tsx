import { motion } from 'framer-motion';

const SlideInFromLeft = ({ children }) => {
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
