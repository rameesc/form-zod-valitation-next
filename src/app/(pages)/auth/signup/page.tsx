'use client'
import { CreateUser } from '@/action/user'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginSchema } from '@/lib/zodSchemas'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import React, { useActionState } from 'react'

const Signup = () => {

    const [lastResult,action]=useActionState(CreateUser,undefined)
    const [form,fields]=useForm({
        
        onValidate({formData}){
            return parseWithZod(formData,{schema:loginSchema})
        },
        shouldValidate:"onBlur",
        shouldRevalidate:"onInput"
    })
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
        <Card>
            <CardHeader className='px-2 text-center'>
                <CardTitle className='text-[25px] font-bold'>sign Up</CardTitle>
                <CardDescription className='mt-2 text-[18px]'>
                    Enter your information to create accout
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className='grid gap-5' id={form.id} onSubmit={form.onSubmit} action={action} >
                    <div className=' grid grid-cols-2 gap-2'>
                        <div>
                            <Label>First name</Label>
                            <Input 
                            id='first-name' 
                            key={fields.firstname.key}
                            name={fields.firstname.name} 
                            defaultValue={fields.firstname.initialValue}
                            placeholder='max'/>
                            <p className='text-red-600 max-w-[200px]'>{fields.firstname.errors}</p>
                        </div>
                        <div>
                            <Label>last name</Label>
                            <Input 
                            id='last-name'
                            key={fields.lastname.key}
                            name={fields.lastname.name} 
                            defaultValue={fields.lastname.initialValue}
                            
                              placeholder='jon'/>
                               <p className='text-red-600 max-w-[200px]'>{fields.lastname.errors}</p>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                          <div>
                            <Label>Email</Label>
                            <Input 
                            id='email'
                            key={fields.email.key}
                            name={fields.email.name} 
                            defaultValue={fields.email.initialValue}
                              placeholder='email@gmail.com'/>
                        <p className='text-red-600 max-w-[200px]'>{fields.email.errors}</p>
                        </div>
                        <div>
                            <Label>password</Label>
                            <Input 
                            id='password' 
                           
                            key={fields.password.key}
                            name={fields.password.name} 
                            defaultValue={fields.password.initialValue}
                            placeholder='*******'/>
                            <p className='text-red-600 max-w-[200px]'>{fields.password.errors}</p>
                            
                        </div>
                    
                           
                    </div>
                    <button type='submit' className='bg-blue-700 font-medium text-white p-2 rounded-lg cursor-pointer'>create an account</button>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default Signup