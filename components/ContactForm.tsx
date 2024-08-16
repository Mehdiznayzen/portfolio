'use client';

import { formContactValidation } from "@/validation";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

import CustomInput from '@/components/CustomInput';
import { Form } from "@/components/ui/form";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import 'react-phone-number-input/style.css'
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader, Send } from "lucide-react";
import axios from 'axios'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const { user } = useUser();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formContactValidation>>({
        resolver: zodResolver(formContactValidation),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        },
    });

    async function onSubmit(values: z.infer<typeof formContactValidation>) {
        setIsLoading(true);
        console.log(values);

        try {
            if (!user) {
                toast({
                    variant: "destructive",
                    title: "You have to be logged in to talk to me!!",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                });
                setIsLoading(false);
                return;
            }

            const contact = {
                username: values.username,
                email: values.email,
                message: values.message,
            };
            

            const newContact = await axios.post("/api/contact", contact);
            if (newContact) {
                emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                    {
                        from_name : values.username,
                        to_name : "Mehdi",
                        from_email : values.email,
                        to_email : 'mehdiznayzen@gmail.com',
                        message : values.message
                    },
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                )
                .then(() => {
                    toast({
                        variant: "default",
                        title: "🎉 Thank you. I will get back to you as soon as possible.🤩💖",
                    });
                })
                .catch((error: any) => {
                    console.log(error)
                    toast({
                        variant: "destructive",
                        title: "Ahh, something went wrong. Please try again.",
                        action: <ToastAction altText="Try again" onClick={form.handleSubmit(onSubmit)}>Try again</ToastAction>,
                    });
                })
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex-1">
                <CustomInput
                    control={form.control}
                    name="username"
                    label="Your username"
                    placeholder="Mehdi"
                    typeInput="input"
                />

                <CustomInput
                    control={form.control}
                    name="email"
                    label="Your email"
                    placeholder="mehdi@gmail.com"
                    typeInput="input"
                />

                <CustomInput
                    control={form.control}
                    name="message"
                    label="Your message"
                    placeholder="Hi !! Mehdi"
                    typeInput="textarea"
                />

                <div className="flex items-end justify-end w-full">
                    <Button 
                        variant="outline" 
                        type="submit"
                        className="flex items-center gap-3"
                    >
                        {isLoading ? (
                            <>
                                Submitting....
                                <Loader className="w-4 h-4 object-contain animate-spin"/>
                            </>
                        ) : (
                            <>
                                Submit
                                <Send className="w-4 h-4"/>
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default ContactForm;
