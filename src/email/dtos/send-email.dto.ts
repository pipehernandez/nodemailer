import { IsEnum, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { Template } from "../enums/template.enum";
import { IRegister } from "../interfaces/register";
import { Type } from "class-transformer";
import { RegisterDto } from "./register.dto";

export class SendEmailDto {
    // @IsString()
    // @IsNotEmpty()
    // from: string;

    @IsString()
    @IsNotEmpty()
    subjectEmail: string;
    
    @IsString()
    @IsNotEmpty()
    sendTo: string;

    @IsEnum(Template)
    @IsNotEmpty()
    template: string;

    @ValidateNested()
    @Type(() => RegisterDto)
    @IsNotEmpty()
    params: RegisterDto;
}