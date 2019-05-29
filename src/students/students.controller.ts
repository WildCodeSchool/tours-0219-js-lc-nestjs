import { StudentDTO } from './student.dto';
import { StudentsService } from './students.service';
import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body, HttpStatus } from '@nestjs/common';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService) { }

    @HttpCode(HttpStatus.OK)
    @Get()
    async readAll() {
        return await this.studentService.getList();
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    async readOne(@Param('id') id: string) {
        return await this.studentService.getById(id);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async create(@Body() studentDto: StudentDTO) {
        return await this.studentService.create(studentDto);
    }

    @HttpCode(HttpStatus.OK)
    @Put(':id')
    async update(@Param('id') id: string, @Body() studentDto: StudentDTO) {
        return await this.studentService.update(id, studentDto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.studentService.delete(id);
        return;
    }
}
