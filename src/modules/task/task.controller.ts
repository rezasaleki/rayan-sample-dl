import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
import {ApiTags} from "@nestjs/swagger";

@Controller('')
export class TaskController {
  constructor(private taskService: TaskService) {
    console.log('useClass => Task controller constructor:');
  }

  @ApiTags('Task')
  @Get('useClass')
  async get() {
    return this.taskService.findAll();
  }
}
