import { ID } from "node-appwrite"
import { databases } from "../appwrite.config"
import { CreateContactParams } from "@/types";

const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const createContact = async (userContact: CreateContactParams) => {
    try{
        const newContact = await databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_CONTACT_COLLECTION_ID!,
            ID.unique(),
            {
                ...userContact
            }
        )

        return parseStringify(newContact);
    }catch(error: any){
        console.error("An error occurred while creating a new contact:", error);
    }
}