"use client"

import { z } from "zod"

export const formContactValidation = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    message : z.string()
})
