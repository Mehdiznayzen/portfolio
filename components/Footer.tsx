import { socialMedia } from "@/constants"
import Image from "next/image"
import { FaLocationArrow } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import Link from "next/link"
import ContactDialog from "@/components/ContactDialog"
import { AnimatedTooltip } from "./ui/AnimatedTooltip"

const Footer = () => {
    return (
        <div
            className="h-full relative"
        >
            <footer
                className="w-full pt-20 pb-10"
            >
                <div className="w-full absolute left-0 -bottom-72 min-h-full">
                    <Image
                        src="/assets/footer-grid.svg"
                        alt="grid"
                        className="w-full h-full opacity-50"
                        width={100}
                        height={100}
                    />
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="heading lg:max-w-[45vw]">
                        Ready to take <span className="text-purple">your</span> digital
                        presence to the next level ?
                    </h1>
                    <p className="text-white-200 md:mt-10 my-5 text-center">
                        Reach out to me today and let&apos;s discuss how I can help you
                        achieve your goals.
                    </p>
                    <ContactDialog>
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow />}
                            position="right"
                            />
                    </ContactDialog>
                </div>
                <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-[30px]">
                    <Link href="/">
                        <Image
                            src={"/assets/logos/logo.png"}
                            alt="logo-img"
                            width={40}
                            height={40}
                            className="object-contain"
                            />
                    </Link>

                    <AnimatedTooltip
                        items={socialMedia}
                        />
                </div>
            </footer>
        </div>
    )
}

export default Footer