import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config()

@Injectable()
export class Email {

    transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, 
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

    async sendEmail( subjectEmail: string, sendTo: string, html: string){
        try {
            const info = await this.transporter.sendMail({
                from: process.env.EMAIL_USER, 
                to: sendTo, 
                subject: subjectEmail, 
                html: html, 
              });
            
        } catch (error) {
            throw error            
        }
    }
}
