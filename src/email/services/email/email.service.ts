import { Injectable } from '@nestjs/common';
import { SendEmailDto } from 'src/email/dtos/send-email.dto';
import { Email } from 'src/email/providers/email/email';
import { fillTemplate } from 'src/email/templates/welcome';

@Injectable()
export class EmailService {

    constructor(
        private emailProvider: Email
    ){}

    async sendEmail(body: SendEmailDto){
        try {
            const { from, subjectEmail, sendTo } = body
        const html = this.getTemplate(body)
        await this.emailProvider.sendEmail(from, subjectEmail, sendTo, html)
        } catch (error) {
            throw new Error(error.message)
        }

    }

    getTemplate(body){
        const template = this.getTemplateFile(body.template)
        const html = fillTemplate(body)
        return html
    }

    getTemplateFile(template){
        const path = '../../templates'
        const templateFile = require(`${path}/${template}`)
        return templateFile
    }
}
