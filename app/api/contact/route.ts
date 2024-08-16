import { createContact } from "@/lib/actions/contact.action"
import { NextRequest, NextResponse } from "next/server"


export const POST = async (req: NextRequest) => {
    try{
        const body = await req.json()

        if(!body){
            return NextResponse.json({ error : "Invalid request body" }, { status : 400 })
        }

        const newContact = await createContact(body)

        return NextResponse.json(newContact, { status : 201 })
    }catch(error: any){
        console.log(error.message)
        return NextResponse.json({ error: 'Internal server error' }, { status: 400 });
    }
}