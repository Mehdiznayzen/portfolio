import * as sdk from 'node-appwrite'

export const {
    NEXT_PUBLIC_APPWRITE_API_KEY,
    NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_PROJECT_ID
} = process.env

const client = new sdk.Client()

client
    .setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setKey(NEXT_PUBLIC_APPWRITE_API_KEY!)

export const databases = new sdk.Databases(client)
export const users = new sdk.Users(client)
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);