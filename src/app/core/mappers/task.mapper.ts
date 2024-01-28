import { Injectable, inject } from "@angular/core";
import { TaskDto } from "../dtos/task.dto";
import { Task } from "../models/task";
import { IMapperFromDto } from "./mapper";
import { TaskContentMapper } from "./task-content.mapper";

@Injectable({ providedIn: 'root' })
export class TaskMapper implements IMapperFromDto<TaskDto, Task> {

  private readonly taskContentMapper = inject(TaskContentMapper)

  /** @inheritdoc */
  public fromDto(dto: TaskDto): Task {
    return new Task({
      content: dto.content.map(this.taskContentMapper.fromDto),
      id: dto.id,
      name: dto.name,
    })
  }
}
