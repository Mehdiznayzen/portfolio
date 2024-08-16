"use client";

import { FaArrowCircleUp } from "react-icons/fa";
import { motion } from 'framer-motion';

const ButtonScrollTop = () => {

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="fixed bottom-4 right-5">
            <motion.button
                onClick={handleScrollTop}
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className="px-2 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200 z-50"
            >
                <FaArrowCircleUp 

                />
            </motion.button>
        </div>
    )
}

export default ButtonScrollTop