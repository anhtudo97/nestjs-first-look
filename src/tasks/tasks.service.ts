import { TaskRepository } from './task.repository';
import { GetTaskFilterDTO } from './dto/get-tasks-filter.dto';
import { CreateTaskDTO } from './dto/create-task.dto';
import { Task } from './task.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task.model';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTaskWithFilters(filterDto: GetTaskFilterDTO): Task[] {
  //   const { search, status } = filterDto;

  //   let tasks = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }

  //   return tasks;
  // }
  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID: ${id} is not found`);
    }

    return found;
  }

  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    this.taskRepository.createTask(createTaskDTO);
  }

  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);

  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
