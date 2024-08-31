import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { EmailService } from './services/email/email.service';
import { SendEmailDto } from './dtos/send-email.dto';

@Controller('api/email')
export class EmailController {

    constructor(
        private emailService: EmailService,
    ){}

    @Post('send-email')
    async sendEmail(@Body() body: SendEmailDto, @Res() res: Response){
        try {
            const response = await this.emailService.sendEmail(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }
}
