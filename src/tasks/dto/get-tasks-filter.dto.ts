import { TaskStatus } from './../task.model';
export class GetTaskFilterDTO {
  search: string;
  status: TaskStatus;
}
