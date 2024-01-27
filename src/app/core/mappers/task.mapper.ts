import { Injectable } from "@angular/core";
import { TaskDto } from "../dtos/task.dto";
import { Task } from "../models/task";
import { IMapperFromDto } from "./mapper";

@Injectable({ providedIn: 'root' })
export class TaskMapper implements IMapperFromDto<TaskDto, Task> {

  /** @inheritdoc */
  public fromDto(dto: TaskDto): Task {
    return new Task({
      content: dto.content,
      id: dto.id,
      name: dto.name,
    })
  }
}
