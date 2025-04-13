import React from 'react'
import TitleAndSupport from './title&support'
import ContactForm from './form'
import { contactDataUrl } from '@/lib/constants';

export default async function ContactAndSuportForm() {

    const res = await fetch(contactDataUrl, {
        cache: "no-cache",
    });

    const data = (await res.json()).data as ContactContent

    return (
        <div className='relative md:w-1/2'>
            <TitleAndSupport helpDeskPhone={data.form.helpDeskPhone} projectTeamPhone={data.form.projectTeamPhone} />
            <ContactForm
                {...data.form}
            />
        </div>
    )
}
