import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { EmailService } from './services/email/email.service';

@Controller('api/email')
export class EmailController {

    constructor(
        private emailService: EmailService,
    ){}

    @Post('send-email')
    sendEmail(@Body() body: any, @Res() res: Response){
        try {
            const response = this.emailService.sendEmail(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
