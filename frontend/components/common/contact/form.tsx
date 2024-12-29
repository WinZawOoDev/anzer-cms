"use client";

import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { nanoid } from 'nanoid'
import { PhoneInput } from '@/components/ui/phone-input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CountryInput } from '@/components/ui/country-input';
import { Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const selectAbleCountry = [
  { id: nanoid(), name: 'Singapore' },
  { id: nanoid(), name: 'Malaysia' },
  { id: nanoid(), name: 'India' },
  { id: nanoid(), name: 'Philippines' },
  { id: nanoid(), name: 'Myanmar' },
  { id: nanoid(), name: 'Thailand' },
  { id: nanoid(), name: 'Cambodia' },
]

const selectAbleResponsibility = [
  { id: nanoid(), name: 'CEO' },
  { id: nanoid(), name: 'Director' },
  { id: nanoid(), name: 'Manager' },
  { id: nanoid(), name: 'Other' },
]

const selectAbleImplementTime = [
  { id: nanoid(), name: '3 months' },
  { id: nanoid(), name: '6 months' },
  { id: nanoid(), name: '1 year' },
  { id: nanoid(), name: 'other' },
]

const honorifices = [
  { id: nanoid(), label: 'Dr.', value: 'Dr.' },
  { id: nanoid(), label: 'Mr.', value: 'Mr.' },
  { id: nanoid(), label: 'Ms.', value: 'Ms.' },
  { id: nanoid(), label: 'Other.', value: 'Other.' }
]

const healthProvider = [
  { id: nanoid(), label: 'Hospital', value: 'Hospital' },
  { id: nanoid(), label: 'Clinic.', value: 'Clinic' },
  { id: nanoid(), label: 'Other', value: 'Other' },
];

const FormSchema = z.object({
  location: z.string({ required_error: 'location is required' }).min(1, 'Location is required'),
  organizationName: z.string().min(1, 'OrganizationName is required'),
  honorific: z.string().min(1, 'Honorific is required'),
  firstName: z.string().min(1, 'FirstName is required'),
  lastName: z.string().min(1, 'LastName is required'),
  jobTitle: z.string().min(1, 'JobTitle is required'),
  responsibility: z.string().min(1, 'Responsibility is required'),
  healthProvider: z.string().min(1, 'Health Provider is required'),
  implement: z.string().min(1, 'When to implement is required'),
  email: z.string().min(1, 'Email is required').email(),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
})



export default function ContactForm() {

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      location: '',
      organizationName: '',
      honorific: '',
      firstName: '',
      lastName: '',
      jobTitle: '',
      responsibility: '',
      healthProvider: '',
      implement: '',
      email: '',
      phoneNumber: '',
    },
    resolver: zodResolver(FormSchema),
  });

  function handleSubmit(values: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ handleSubmit ~ values:", values);
  }

  return (
    <div className='relative md:w-1/2'>
      <div className='mb-5 flex items-center justify-between'>
        <div className='font-bold w-fit'>
          <span className='inline-block text-xl text-gray-500 tracking-normal leading-5'>Book a Demo</span>
          <span className='inline-block mx-1 text-gray-300'>or</span>
          <span className='inline-block text-xl text-gray-500 tracking-normal leading-5'>Enquiry for Partnership</span>
        </div>
        <div className='relative flex items-center h-10'>
          <button type='button' className='flex items-center'>
            <Phone className='w-5 h-5 text-gray-400 hover:text-red-500' />
            <div className='ml-1 px-0 text-left hover:text-red-500'>
              <span className='block text-sm text-gray-600 leading-5 tracking-tight hover:text-red-500 hover:underline'>Helpdesk Support</span>
              <span className='block text-xs text-gray-400 hover:text-red-500'>+9769309030</span>
            </div>
          </button>
          <Separator className='mx-2' orientation='vertical' />
          <button type='button' className='flex items-center'>
            <Phone className='w-5 h-5 text-gray-400 hover:text-red-500' />
            <div className='ml-1 px-0 text-left hover:text-red-500'>
              <span className='block text-sm text-gray-600 leading-5 tracking-tight hover:text-red-500 hover:underline'>Project Team Support</span>
              <span className='block text-xs text-gray-400 hover:text-red-500'>+9769309030</span>
            </div>
          </button>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='mb-20 md:mb-0 mt-5'>
          <div className='grid grid-cols-4 gap-x-3 gap-y-8 my-3'>
            <div className='col-span-2'>
              <CountrySelectInput />
            </div>
            <div className='col-span-2'>
              <TextInput
                name='organizationName'
                placeholder='Organization Name'
              />
            </div>
            <div className='col-span-4'>
              <RadioInput
                name='honorific'
                items={honorifices}
              />
            </div>
            <div className='col-span-2'>
              <TextInput
                name='firstName'
                placeholder='First Name'
              />
            </div>
            <div className='col-span-2'>
              <TextInput
                name='lastName'
                placeholder='Last Name'
              />
            </div>
            <div className='col-span-2'>
              <TextInput
                name='jobTitle'
                placeholder='Job Title'
              />
            </div>
            <div className='col-span-2'>
              <SelectInput
                name='responsibility'
                placeholder='Responsibility'
                selectItems={selectAbleResponsibility}
              />
            </div>
            <div className='col-span-4'>
              <RadioInput
                name='healthProvider'
                items={healthProvider}
              />
            </div>
            <div className='col-span-4'>
              <SelectInput
                name='implement'
                placeholder='When do you like to implement?'
                selectItems={selectAbleImplementTime}
              />
            </div>
            <div className='col-span-4 sm:col-span-2'>
              <TextInput
                name='email'
                placeholder='Email Address'
              />
            </div>
            <div className='col-span-4 sm:col-span-2'>
              <PhoneNumberInput
                name='phoneNumber'
                placeholder='Enter phone number'
              />
            </div>
          </div>
          <Button type='submit' className='rounded mt-3 lg:mt-0 py-5 px-7 bg-[#D01B23] hover:bg-[#e73939] float-right'>
            <span className='font-semibold text-[15px] leading-5 text-white'>Submit</span>
          </Button>
        </form>
      </Form>
    </div>
  )
}

function SelectInput({ name, placeholder, selectItems }: {
  name: string,
  placeholder: string,
  selectItems: { id: string, name: string }[]
}) {

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='relative'>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl >
              <SelectTrigger
                className='h-full py-3 px-2'
              // className='h-full py-4 px-5 rounded-sm border-none focus-visible:ring-0 bg-[#F1F4FF] text-secondary leading-6 tracking-wide text-xs focus:outline-none focus-within:outline-none focus:ring-0 focus-within:ring-0'
              >
                <SelectValue className='leading-6 tracking-wide font-normal text-xs text-green-500 placeholder:text-[#B3B4B9]' placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {selectItems.map(item => (
                <SelectItem key={item.id} value={item.name}>{item.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className='absolute -bottom-5' />
        </FormItem>
      )}
    />
  )
}


function TextInput({ name, placeholder }: { name: string, placeholder: string }) {

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='relative'>
          <FormControl>
            <Input
              {...field}
              type='text'
              placeholder={placeholder}
              className='h-full py-3 px-2'
            // className='h-full py-4 px-5 rounded-sm border-none focus-visible:ring-0 bg-[#F1F4FF] text-secondary leading-6 tracking-wide text-xs placeholder:leading-6 placeholder:tracking-wide placeholder:font-normal placeholder:text-xs placeholder:text-[#B3B4B9] '
            />
          </FormControl>
          <FormMessage className='absolute -bottom-5' />
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
              className='w-5 h-5 rounded border-gray-300 box-border'
            />
          </FormControl>
          <FormMessage className='absolute' />
        </FormItem>
      )}
    />
  );
}


function PhoneNumberInput({ name, placeholder }: { name: string, placeholder: string }) {

  const { control, formState, getValues } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='relative'>
          <FormControl>
            <PhoneInput
              placeholder={placeholder}
              {...field}
              defaultCountry={getValues('location')}
            />
          </FormControl>
          <FormMessage className='absolute -bottom-5' />
        </FormItem>
      )}
    />
  )

}

function RadioInput({ name, items }: { name: string, items: { id: string, label: string, value: string }[] }) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative space-y-3">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex items-center"
            >
              {items.map(item => (
                <FormItem key={item.id} className="flex items-center space-x-2 mr-2 space-y-0">
                  <FormLabel className="font-normal">
                    {item.label}
                  </FormLabel>
                  <FormControl>
                    <RadioGroupItem value={item.value} className='border border-gray-300' />
                  </FormControl>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage className='absolute -bottom-5' />
        </FormItem>
      )}
    />
  )
}

function CountrySelectInput() {

  const { formState } = useFormContext();

  return (
    <div className='relative'>
      <CountryInput />
      {formState.errors.location && <span className='text-[0.8rem] absolute -bottom-5 font-medium text-destructive'>{String(formState.errors.location.message)}</span>}
    </div>

  )

}