'use client';

import { useEffect, useState } from 'react'
import Spotlight from '@/components/ui/Spotlight'
import TextGenerateEffect from './ui/TextGenerateEffect'
import MagicButton from '@/components/ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import ButtonScrollTop from '@/components/ButtonScrollTop'
import LineWidth from '@/components/lineWidth';

const Hero = () => {
    const [showBtn, setShowBtn] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 140) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="pb-20 pt-24">
            <div className="">
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight 
                    className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" 
                />
            </div>

            <div 
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0"
            >
                <div 
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" 
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <LineWidth />
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col gap-[20px] items-center justify-center">
                    <h2 className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-96">
                        Building Web sites Brilliance with the Latest Technologies in Web Development
                    </h2>
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-4xl lg:text-5xl"
                        words="Crafting Innovative Solutions for Engaging User Interactions"
                    />

                    <p className="text-center mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi 👋! I&apos;m Mehdi, a Full Stack Developer based in Morocco 😊😉.
                    </p>

                    <a href="#projects">
                        <MagicButton
                            title="Show My Work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
            {
                showBtn && <ButtonScrollTop />
            }
        </div>
    )
}

export default Hero