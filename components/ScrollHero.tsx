'use client'

import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react';


const ScrollHero = () => {
    return (
        <motion.div 
            className=""
            initial = {{
                opacity : 0
            }}
            animate = {{
                opacity : 1,
                transition : {
                    duration : 0.6,
                    delay : 0.8
                }
            }}
        >
            <Link href="#about">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-purple p-2">
                    <motion.div
                        animate={{
                            y : [0, 26, 0],
                        }}
                        transition={{
                            duration : 1.5,
                            repeat : Infinity,
                            repeatType : 'loop'
                        }}
                        className='rounded-full w-3 h-3 bg-purple'
                    />
                </div>
            </Link>
        </motion.div> 
    )
}

export default ScrollHero