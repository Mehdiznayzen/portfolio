"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "@/components/ui/Pin";
import { projects } from "@/constants";
import Image from "next/image";
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google';
import { cn } from '@/lib/utils';

const font = Dancing_Script({
    subsets: ["latin"],
    weight : ['400', '500', '600', '700'] 
});

const RecentProjects = () => {
    return (
        <div 
            className="py-20" 
            id="projects"
        >
            <h1 className={cn("heading", font.className)}>
                A small selection of my{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 w-full">
                {
                    projects.map((item) => (
                        <div
                            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                            key={item.id}
                        >
                            <PinContainer
                                title={item.name}
                                href={item.link}
                            >
                                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                    <div
                                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                        style={{ backgroundColor: "#13162D" }}
                                    >
                                        <Image 
                                            src="/assets/bg.png" 
                                            alt="bgimg" 
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                    <Image
                                        src={item.img}
                                        alt="cover"
                                        className="absolute bottom-0"
                                        width={300}
                                        height={300}
                                    />
                                </div>

                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {item.title}
                                </h1>

                                <p
                                    className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
                                    style={{
                                        color: "#BEC1DD",
                                        margin: "1vh 0",
                                    }}
                                >
                                    {item.des}
                                </p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {
                                    item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <Image 
                                                src={icon} 
                                                alt="icon5" 
                                                className="p-2" 
                                                width={54}
                                                height={54}
                                            />
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="flex justify-center items-center">
                                <Link 
                                    className="flex lg:text-lg md:text-xs text-sm text-purple"
                                    href={item.link}
                                    target={"_blank"}
                                >
                                    Check Live Site
                                </Link>
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </div>
                        </div>
                        </PinContainer>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RecentProjects;