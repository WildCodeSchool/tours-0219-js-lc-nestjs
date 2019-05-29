import { StudentDTO } from './student.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './student';

@Injectable()
export class StudentsService {
    constructor(@InjectModel('Student') private readonly studentModel: Model<Student>) {}

    async getList(): Promise<Student[]> {
        return await this.studentModel.find({});
    }

    async getById(id: string): Promise<Student> {
        const student = await this.studentModel.findById(id);

        if (!student) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return student;
    }

    async create(studentDto: StudentDTO): Promise<Student> {
        const model: Student =  new this.studentModel(studentDto);
        return await model.save();
    }

    async update(id: string, studentDto: StudentDTO) {
        const student = await this.studentModel.findByIdAndUpdate(id, studentDto, {
            new: true,
        });

        if (!student) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return student;
    }

    async delete(id: string): Promise<Student> {
        const student = await this.studentModel.findByIdAndDelete(id);

        if (!student) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return student;
    }
}
