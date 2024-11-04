'use server'

import { loginSchema } from "@/lib/zodSchemas"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"


export async function CreateUser(prevState:unknown, formData:FormData){

    const submission=parseWithZod(formData,{
        schema:loginSchema
    })
   if(submission.status!=='success'){
    console.log(submission.reply())
    return submission.reply();
   }

    return redirect('/about')
}