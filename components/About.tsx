'use client'

import animation from '@/public/animation_about_page.json'
import animationData from '@/public/confetti.json'
import Lottie from 'react-lottie'
import { cn } from '@/lib/utils';
import { Dancing_Script } from 'next/font/google';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/utils';
import MagicButton from './ui/MagicButton';
import { useState } from 'react';
import { MdOutlineContentCopy, MdOutlineLibraryAddCheck } from "react-icons/md";

const font = Dancing_Script({
    subsets: ["latin"],
    weight : ['400', '500', '600', '700'] 
});

const About = () => {
    const [copied, setCopied] = useState<boolean>(false)

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        navigator.clipboard.writeText("mehdiznayzen@gmail.com")
        setCopied(true)
        setInterval(() => {
            setCopied(false)
        }, 7000)
    }

    return (
        <section
            id="about"
            className="min-h-full mb-[40px] flex flex-col gap-[10px] px-6 sm:px-10 lg:px-16"
        >
            <div
                className="flex flex-col items-center justify-center gap-[20px] w-[100%]"
            >
                <div
                    className="flex flex-col gap-[10px]"
                >
                    <motion.h1
                        style={{
                            fontSize:'50px',
                            letterSpacing:'2px',
                            color:'#864AF9' 
                        }}
                        variants={fadeIn("left", "spring", 0.4, 0.6)}
                        initial="hidden"
                        whileInView='show'
                        className={cn(`text-center text-black font-bold text-[40px] tracking-[2px]"`, font.className)}
                    >
                        What About Me ? 😄😇
                    </motion.h1>
                    <motion.div 
                        className="animation_about"
                        variants={fadeIn("down", "spring", 0.5, 0.7)}
                        initial="hidden"
                        whileInView='show'
                    >
                        <Lottie 
                            options={{
                                loop: true,
                                autoplay: true, 
                                animationData: animation
                            }}
                            style={{
                                width : '420px'
                            }}
                        />
                    </motion.div>
                </div>
                <motion.p 
                    variants={fadeIn("right", "spring", 0.5, 0.7)}
                    initial="hidden"
                    whileInView='show'
                    className="text-center text-muted-foreground text-[16px]"
                >
                    Welcome to my portfolio ! I&apos;m Mehdi Znayzen, a passionate Full Stack developer. <br />
                    With expertise in front-end and back-end technologies, I create seamless and dynamic web experiences. <br />
                    Explore my projects and see how I bring innovative ideas to life with cutting-edge tools and technologies. <br />
                    Let&apos;s connect and build something amazing together !
                </motion.p>
                
                <div className="relative">
                    {
                        copied && (
                            <div className="absolute top-[-20px]">
                                <Lottie
                                    options={defaultOptions}
                                />
                            </div>
                        )
                    }
                    
                    <MagicButton
                        icon={copied ? <MdOutlineLibraryAddCheck /> : <MdOutlineContentCopy />}
                        position='left'
                        title={copied ? "Email Copied 💥" : "Copy My Email ❤️‍🔥"}
                        onClick={handleCopy}
                    />
                </div>
            </div>
        </section>
    )
}

export default About