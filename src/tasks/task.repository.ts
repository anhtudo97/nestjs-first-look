import { TaskStatus } from './task.model';
import { Task } from './task.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    const { title, description } = createTaskDTO;
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    await task.save();
    return task;
  }
}
