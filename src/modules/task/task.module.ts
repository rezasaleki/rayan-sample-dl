import { Module, Scope } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  controllers: [TaskController],
  providers: [
    {
      provide: TaskService,
      useClass: TaskService,
      scope: Scope.DEFAULT,
    },
  ],
})
export class TaskModule {}
