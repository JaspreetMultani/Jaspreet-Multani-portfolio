import { motion } from 'framer-motion';

export default function ScrollAnimation({ children, direction = 'up', delay = 0 }) {
    const animations = {
        up: {
            initial: { y: 50, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
        },
        down: {
            initial: { y: -50, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
        },
        left: {
            initial: { x: -50, opacity: 0 },
            whileInView: { x: 0, opacity: 1 },
        },
        right: {
            initial: { x: 50, opacity: 0 },
            whileInView: { x: 0, opacity: 1 },
        },
        fade: {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
        },
    };

    const selectedAnimation = animations[direction] || animations.up;

    return (
        <motion.div
            initial={selectedAnimation.initial}
            whileInView={selectedAnimation.whileInView}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.5,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
} 