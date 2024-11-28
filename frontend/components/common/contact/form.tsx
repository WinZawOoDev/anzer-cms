'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

const FormSchema = z.object({
    location: z.string().min(1, 'location is required').max(5, 'location must contain at least 5 characters'),
    hospitalName: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    mr: z.boolean(),
})

export default function ContactForm() {

    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: {
            location: '',
            hospitalName: '',
            firstName: '',
            lastName: '',
            mr: false,
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

                <CheckBoxInput
                    name='mr'
                    placeholder='Mr'
                />

                <Button type='submit' className='rounded py-4 px-8 bg-primary'>
                    <span className='font-semibold text-[15px] leading-5 text-white'>Submit</span> 
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

function CheckBoxInput({ name, placeholder }: { name: string, placeholder: string }) {
    const { control } = useFormContext();
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='relative w-fit flex flex-row items-center space-y-0'>
                    <FormLabel className='mr-3 tracking-wide text-base leading-6 text-secondary'>
                        {placeholder}.
                    </FormLabel>
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onChange={field.onChange}
                            className='w-6 h-6 rounded-lg border-2 border-primary '
                        />
                    </FormControl>
                    <FormMessage className='absolute' />
                </FormItem>
            )}
        />
    )
}
