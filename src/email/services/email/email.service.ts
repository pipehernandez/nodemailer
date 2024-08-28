import { Injectable } from '@nestjs/common';
import { Email } from 'src/email/providers/email/email';

@Injectable()
export class EmailService {

    constructor(
        private emailProvider: Email
    ){}

    sendEmail(body){}

    getTemplate(body){
        const template = this.getTemplateFile(body.template)
        const html = template.fillTemplate(body)
        return html
    }

    getTemplateFile(template){
        const path = '../../templates'
        const templateFile = require(`${path}/${template}`)
        return templateFile
    }
}
