import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from './../task-status.enum';
export class GetTaskFilterDTO {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;
}
