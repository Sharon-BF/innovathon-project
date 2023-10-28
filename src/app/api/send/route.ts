import { EmailTemplate } from '@/Components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type Payload = {
    user: string
    emails: email[]
}

type email = string;

export async function POST(req: Request) {
    const dat: Payload = await req.json();
    try {
        const data = await resend.emails.send({

            from: 'Acme <onboarding@resend.dev>',
            to: dat.emails,
            subject: 'Hello world',
            react: EmailTemplate({ firstName: dat.user }),
            text: 'Hello world',
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
