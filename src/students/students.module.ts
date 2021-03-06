import { StudentSchema } from './student.schema';
import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
