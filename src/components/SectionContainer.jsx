import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ children, id, className = '', delay = 0 }) => {
    return (
        <motion.section
            id={id}
            className={`section ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                        delay: delay
                    }
                }
            }}
        >
            {children}
        </motion.section>
    );
};

export default SectionContainer;
