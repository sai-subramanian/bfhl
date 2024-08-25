import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { studentService } from './student.service';
@Module({
  imports: [],
  controllers: [StudentController],
  providers: [studentService, ],
  exports: [studentService],
})
export class StudentModule {}
