"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const FormSchema = z.object({
  location: z.string().min(1, "location is required"),
  hospitalName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  mr: z.boolean(),
  ms: z.boolean(),
  dr: z.boolean(),
  other: z.boolean(),
  implement: z.string(),
  email: z.boolean(),
  countryCode: z.string(),
  phoneNumber: z.string(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      location: "",
      hospitalName: "",
      firstName: "",
      lastName: "",
      dr: false,
      mr: false,
      ms: false,
      other: false,
      implement: "",
      email: false,
      countryCode: "",
      phoneNumber: "",
    },
    resolver: zodResolver(FormSchema),
  });

  function handleSubmit(values: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ handleSubmit ~ values:", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-1/2">
        <div className="my-3 grid grid-cols-4 gap-x-3 gap-y-5">
          <div className="col-span-4">
            <TextInput name="location" placeholder="Location" />
          </div>
          <div className="col-span-4">
            <TextInput name="hospitalName" placeholder="HospitalName" />
          </div>
          <div className="justify-items-start">
            <CheckBoxInput name="dr" placeholder="Dr" />
          </div>
          <div className="justify-items-center">
            <CheckBoxInput name="mr" placeholder="Mr" />
          </div>
          <div className="justify-items-center">
            <CheckBoxInput name="ms" placeholder="Ms" />
          </div>
          <div className="justify-items-end">
            <CheckBoxInput name="other" placeholder="Other" />
          </div>
          <div className="col-span-2">
            <TextInput name="firstName" placeholder="First Name" />
          </div>
          <div className="col-span-2">
            <TextInput name="lastName" placeholder="Last Name" />
          </div>
          <div className="col-span-4">
            <TextInput
              name="implement"
              placeholder="When do you like to implement?"
            />
          </div>
          <div className="col-span-4">
            <TextInput name="email" placeholder="Email Address" />
          </div>
          <div className="col-span-2">
            <TextInput name="countryCode" placeholder="Country Code" />
          </div>
          <div className="col-span-2">
            <TextInput name="phoneNumber" placeholder="Phone Number" />
          </div>
        </div>

        <Button type="submit" className="float-right rounded bg-main px-8 py-4">
          <span className="text-[15px] font-semibold leading-5 text-white">
            Submit
          </span>
        </Button>
      </form>
    </Form>
  );
}

function TextInput({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder={placeholder}
              className="h-full rounded-sm border-none bg-[#F1F4FF] px-5 py-3 text-xs leading-6 tracking-wide text-secondary placeholder:text-xs placeholder:font-normal placeholder:leading-6 placeholder:tracking-wide placeholder:text-[#B3B4B9] focus-visible:ring-0"
            />
          </FormControl>
          <FormMessage className="absolute -bottom-5" />
        </FormItem>
      )}
    />
  );
}

function CheckBoxInput({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative flex w-fit flex-row items-center space-y-0">
          <FormLabel className="mr-3 text-base leading-6 tracking-wide text-black">
            {placeholder}.
          </FormLabel>
          <FormControl>
            <Checkbox
              checked={field.value}
              onChange={field.onChange}
              className="h-6 w-6 rounded-lg border-2 border-main"
            />
          </FormControl>
          <FormMessage className="absolute" />
        </FormItem>
      )}
    />
  );
}
