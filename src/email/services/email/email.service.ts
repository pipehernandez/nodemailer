import { IRegister } from './../../interfaces/register';
import { Injectable } from '@nestjs/common';
import { SendEmailDto } from 'src/email/dtos/send-email.dto';
import { Email } from 'src/email/providers/email/email';

@Injectable()
export class EmailService {

    constructor(
        private emailProvider: Email
    ){}

    async sendEmail(body: SendEmailDto){
        try {
            const { subjectEmail, sendTo, params: IRegister } = body
            const html = this.getTemplate(body)
            await this.emailProvider.sendEmail( subjectEmail, sendTo, html)
            return true
        } catch (error) {
            throw error            
        }
    }


    private getTemplate(body){
        const template = this.getTemplateFile(body.template)
        const html = template.fillTemplate(body)
        return html
    }

    private getTemplateFile(template){
        const path = '../../templates'
        const templateFile = require(`${path}/${template}`)
        return templateFile
    }
}
