"use client";

import { motion } from "framer-motion";

function AnimationWrapper({ children, className = "", animation = "fade-up", delay = 0 }) {
    const variants = {
        "fade-up": {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        },
        "scale-in": {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            variants={variants[animation] || variants["fade-up"]}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default AnimationWrapper;
