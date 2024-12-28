import EmailTemplate from '@/components/common/email-template';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request, response: Response) {

    // const requestBody = await request.json();
    console.log('next.js api test')

    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['winzawoo.dev@gmail.com'],
            subject: "Hello world",
            react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }


}