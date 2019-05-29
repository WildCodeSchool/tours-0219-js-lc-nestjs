import { IsNumberString } from 'class-validator';

export class StudentDTO {
    public readonly firstName: string;
    public readonly lastName: string;
    @IsNumberString()
    public readonly age: number;
}
