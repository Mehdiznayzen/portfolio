'use client'

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"


interface CustomInputProps {
    control: Control<any>,
    name: string,
    label?: string,
    placeholder: string,
    typeInput: "input" | "textarea"
}


const CustomInput = (props : CustomInputProps) => {
    return (
        <FormField
            control={props.control}
            name={props.name}
            render={({ field }) => (
                <FormItem
                    className="flex-1"
                >
                    {
                        props.label && (
                            <FormLabel>{props.label}</FormLabel>
                        )
                    }
                    <FormControl>
                        {
                            props.typeInput === 'input' ? (
                                <Input 
                                    placeholder={props.placeholder} 
                                    {...field} 
                                />
                            ) : (
                                <Textarea 
                                    placeholder={props.placeholder} 
                                    {...field} 
                                />
                            )
                        }
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomInput
