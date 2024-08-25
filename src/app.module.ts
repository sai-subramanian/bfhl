import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './product/student.module';

@Module({
  imports: [StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
