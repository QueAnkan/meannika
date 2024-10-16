"use client";
import { motion } from "framer-motion";

import Image from "next/image";

const ScrollDown = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={handleScroll}
            className='absolute h-20 right-16 bottom-44 '
        >
            <motion.div
                initial={{ y: -20
					
				 }}
                animate={{
					 y: 15,
					scaleX: [1, 1.3],
					scaleY: [1.1, 1],
					 
				 }}
                transition={{
					delay: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.8,
					
                    bounce: 0.8, 
                }}
                className='h-12'
            >
                <Image
                    src='/arrow-down.svg'
                    alt=''
                    width={0}
                    height={73}
                    style={{ width: "auto" }}
                    className='h-full'
                />
            </motion.div>
        </button>
    );
};

export default ScrollDown;
