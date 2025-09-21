import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    const { name, email, phone, service, message } = await request.json();

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    transporter.verify((error: unknown) => {
        if (error) {
            console.error("Error connecting to SMTP server:", error);
        }
    });

    // User confirmation email HTML
    const userEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background: #f9f9f9; }
                .footer { padding: 10px; text-align: center; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Thank you for choosing BSECURE Information Technology!</h2>
                </div>
                <div class="content">
                    <p>Dear ${name},</p>
                    <p>We have received your inquiry for <strong>${service || 'CCTV Installation'}</strong> services. Our team will contact you within 2 hours during business hours.</p>
                    
                    <h3>Your submitted details:</h3>
                    <ul>
                        <li><strong>Name:</strong> ${name}</li>
                        <li><strong>Phone:</strong> ${phone}</li>
                        <li><strong>Email:</strong> ${email || 'Not provided'}</li>
                        <li><strong>Service:</strong> ${service || 'Not specified'}</li>
                        <li><strong>Requirements:</strong> ${message || 'Not specified'}</li>
                    </ul>
                    
                    <p>For immediate assistance, please call us at <strong>+91 9162118159</strong></p>
                    
                    <p>Thank you for choosing the best CCTV installation company in Ranchi, Jharkhand!</p>
                </div>
                <div class="footer">
                    <p>BSECURE Information Technology - Professional CCTV Installation in Ranchi, Hazaribagh, Khunti, Dhanbad, Bokaro & Ramgarh</p>
                </div>
            </div>
        </body>
        </html>
    `;

    // Team notification email HTML
    const teamEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #dc2626; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background: #f9f9f9; }
                .urgent { background: #fef2f2; border: 1px solid #fecaca; padding: 10px; margin: 10px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>🚨 New CCTV Installation Lead - Contact ASAP!</h2>
                </div>
                <div class="content">
                    <div class="urgent">
                        <p><strong>⚡ URGENT: New customer inquiry received!</strong></p>
                    </div>
                    
                    <h3>Customer Details:</h3>
                    <ul>
                        <li><strong>Name:</strong> ${name}</li>
                        <li><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></li>
                        <li><strong>Email:</strong> ${email || 'Not provided'}</li>
                        <li><strong>Service Required:</strong> ${service || 'Not specified'}</li>
                    </ul>
                    
                    <h3>Customer Requirements:</h3>
                    <p>${message || 'No specific requirements mentioned'}</p>
                    
                    <div style="background: #e0f2fe; padding: 15px; margin: 20px 0; border-left: 4px solid #0277bd;">
                        <p><strong>📞 ACTION REQUIRED:</strong> Call the customer within 2 hours at <strong>${phone}</strong></p>
                    </div>
                    
                    <p><strong>Submission Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                </div>
            </div>
        </body>
        </html>
    `;

    try {
        // Send confirmation email to user (if email provided)
        if (email) {
            await transporter.sendMail({
                from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
                to: email,
                subject: "Thank You - BSECURE CCTV Installation Inquiry Received",
                html: userEmailHtml,
            });
        }

        // Send notification email to team
        await transporter.sendMail({
            from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
            to: process.env.TO_EMAIL,
            subject: `🚨 New CCTV Lead: ${name} - ${phone} - ${service || 'General Inquiry'}`,
            html: teamEmailHtml,
        });

        return NextResponse.json(
            { message: "Form submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Error sending email" },
            { status: 500 }
        );
    }
}