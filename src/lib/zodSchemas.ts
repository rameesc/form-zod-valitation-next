import {z} from 'zod'

export const loginSchema=z.object({
    firstname:z.string().min(3).max(10),
    lastname:z.string().min(1).max(10),
    email:z.string().email(),
    password:z.string().min(8).max(10),

})