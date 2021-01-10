import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { title } from 'process';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('tiile') title: string,
    @Body('description') description: string,
  ) {
    return this.tasksService.createTask(title, description);
  }
}
