'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const FormSchema = z.object({
    location: z.string(),
    hospitalName: z.string(),
    firstName: z.string(),
    lastName: z.string(),
})


export default function ContactForm() {

    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: {
            location: '',
            hospitalName: '',
            firstName: '',
            lastName: '',
        },
        resolver: zodResolver(FormSchema),
    });

    function handleSubmit(values: z.infer<typeof FormSchema>) {

        console.log("🚀 ~ handleSubmit ~ values:", values)

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='w-1/2'>

                <FormField
                    control={form.control}
                    name='location'
                    render={({ field }) => (
                        <FormItem className='relative my-3'>
                            <FormControl>
                                <Input placeholder='Location' {...field} />
                            </FormControl>
                            <FormMessage className='absolute' />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='hospitalName'
                    render={({ field }) => (
                        <FormItem className='relative my-3'>
                            <FormControl>
                                <Input placeholder='Hospital' {...field} />
                            </FormControl>
                            <FormMessage className='absolute' />
                        </FormItem>
                    )}
                />

                <Button>
                    Submit
                </Button>
            </form>
        </Form>
    )
}