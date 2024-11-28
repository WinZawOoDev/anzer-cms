'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import React from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const FormSchema = z.object({
    location: z.string().min(1, 'location is required').max(5, 'location must contain at least 5 characters'),
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

                <TextInput
                    name='location'
                    placeholder='Location'
                />

                <Button>
                    Submit
                </Button>
            </form>
        </Form>
    )
}


function TextInput({ name, placeholder }: { name: string, placeholder: string }) {

    const { control } = useFormContext();

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='relative my-3'>
                    <FormControl>
                        <Input
                            {...field}
                            type='text'
                            placeholder={placeholder}
                            className='h-full py-3 px-5 rounded-sm border-none focus-visible:ring-0 bg-[#F1F4FF] text-secondary leading-6 tracking-wide text-xs placeholder:leading-6 placeholder:tracking-wide placeholder:font-normal placeholder:text-xs placeholder:text-[#B3B4B9] '
                        />
                    </FormControl>
                    <FormMessage className='absolute' />
                </FormItem>
            )}
        />
    )

}

function CheckBox() {

}
