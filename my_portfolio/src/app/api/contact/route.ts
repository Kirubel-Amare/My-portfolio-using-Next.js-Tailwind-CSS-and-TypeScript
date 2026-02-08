import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;

        if (!emailUser || !emailPass) {
            console.error('Missing email configuration. Ensure EMAIL_USER and EMAIL_PASS are set in .env.local');
            return NextResponse.json(
                { error: 'Server configuration error: Missing email credentials' },
                { status: 500 }
            );
        }

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can change this if using another provider
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        // Email options
        const mailOptions = {
            from: emailUser,
            to: 'akirub8@gmail.com', // Your email address where you want to receive messages
            subject: `New Contact Form Message: ${subject || 'No Subject'}`,
            text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject || 'No Subject'}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
