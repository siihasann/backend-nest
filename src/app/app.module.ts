import { Module } from '@nestjs/common';
import { ComputerModule } from 'src/computer/computer.module';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  imports: [TasksModule, ComputerModule],
})
export class AppModule {}
