import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    userEmail: string;

    @IsString()
    @IsNotEmpty()
    registrationDate: string;

    @IsString()
    @IsNotEmpty()
    companyName: string;
}
