import EmailTemplate from '@/components/common/email-template';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request, response: Response) {

    const requestBody = await request.json() as ContactFormValue
    const countryResponse = await fetch(`${process.env.RESTFUL_COUNTRY_API_URL}?iso2=${requestBody.location}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESTFUL_COUNTRY_API_TOKEN}`,
        },
        method: 'GET',
    });

    const country = (await countryResponse.json()).data as CountryData;

    try {
        const { data, error } = await resend.emails.send({
            from: 'Anzer CMS <onboarding@resend.dev>',
            to: ['winzawoo.dev@gmail.com', 'kyawlin@anzer.com'],
            subject: "Book a Demo or Equiry for partnerships",
            react: EmailTemplate({
                jobTitle: requestBody.jobTitle,
                responsipility: requestBody.responsibility,
                whenToImplement: requestBody.implement,
                honorific: requestBody.honorific,
                firstName: requestBody.firstName,
                lastName: requestBody.lastName,
                phoneNumber: requestBody.phoneNumber,
                email: requestBody.email,
                organizationName: requestBody.organizationName,
                location: country.name
            }) as React.ReactElement,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }


}