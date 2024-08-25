import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { studentService } from './student.service';

@Controller('/bhfl')
export class StudentController {
  constructor(private studentService: studentService) {}

  @Get()
  async getProducts() {
    try {
      return {"operation_code":1};
    } catch (e) {
      return Error(e);
    }
  }

  @Post()
  async addProducts(@Body() request: any) {
    try {
      return await this.studentService.processData(request);
    } catch (e) {
      return { isSuccess: false, message: e?.message || JSON.stringify(e) };
    }
  }

}
