import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'


@Injectable()
export class Email {

    transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "maddison53@ethereal.email",
            pass: "jn7jnAPss4f63QBp6D",
        },
    });

    async sendEmail(from : string, subjectEmail: string, sendTo: string, html: void) {
        try {
            const info = await this.transporter.sendMail({
            from: from, // sender address
            to: sendTo, // list of receivers
            subject: subjectEmail, // Subject line
            html: html, // html body
        });

        console.log("Message sent: %s", info.messageId);
        } catch (error) {
            throw new Error(error.message)
        }
        
    }
}
