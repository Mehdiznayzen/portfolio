import { Technologies, WorkExperience } from "@/constants"
import { Button } from "./ui/MovingBorders"
import Image from "next/image"
import React from "react"

const WorkExperienceComponent = () => {
    return (
        <div 
            className="py-20 w-full flex flex-col gap-[47px]" 
            id="experiences"
        >
            <h1 className="heading">
                My <span className="text-purple">work experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {
                    WorkExperience.map((experience) => (
                        <Button
                            key={experience.id}
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                            style={{
                                background: "rgb(4,7,29)",
                                backgroundColor:
                                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                                borderRadius: `calc(1.75rem* 0.96)`,
                            }}
                            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                                <Image
                                    src={experience.thumbnail}
                                    alt={experience.thumbnail}
                                    className="lg:w-32 md:w-20 w-16"
                                    width={100}
                                    height={100}
                                />
                                <div className="lg:ms-5">
                                    <h1 className="text-start text-xl md:text-2xl font-bold">
                                        {experience.title}
                                    </h1>
                                    <p className="text-start text-white-100 mt-3 font-semibold">
                                        {experience.desc}
                                    </p>
                                </div>
                            </div>
                        </Button>
                    ))
                }
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                {
                    Technologies.map((company) => (
                        <React.Fragment key={company.id}>
                            <div className="flex md:max-w-60 max-w-32 gap-2">
                                <Image
                                    src={company.img}
                                    alt={company.name}
                                    className="md:w-10 w-5"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={company.nameImg}
                                    alt={company.name}
                                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                                    className="md:w-24 w-20"
                                    height={100}
                                />
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default WorkExperienceComponent