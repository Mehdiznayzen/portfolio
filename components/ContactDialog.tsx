
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import ContactForm from "./ContactForm"


const ContactDialog = ({ children } : { children : React.ReactNode }) => {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle
                        className="flex flex-col items-center justify-center gap-[16px]"
                    >
                        <Image
                            src={'/assets/logos/logo.png'}
                            width={50}
                            height={50}
                            alt="Logo"
                            className='object-contain'
                        />
                        <div className="text-center text-muted-foreground tracking-[1px]">Fill these fields to talk to me ❤️⭐</div>
                    </DialogTitle>
                </DialogHeader>

                <ContactForm />
            </DialogContent>
        </Dialog>
    )
}

export default ContactDialog