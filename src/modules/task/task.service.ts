import { Injectable } from '@nestjs/common';
import { Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class TaskService {
  private readonly tasks: Task[] = [
    { id: 1, name: 'p1', description: 'des1' },
    { id: 1, name: 'p1', description: 'des1' },
    { id: 1, name: 'p1', description: 'des1' },
  ];
  findAll(): Task[] {
    return this.tasks;
  }
}
