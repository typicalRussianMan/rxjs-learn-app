import { Injectable } from '@angular/core';

import { TaskLiteDto } from '../dtos/task-lite.dto';
import { TaskLite } from '../models/task-lite';

import { IMapperFromDto } from './mapper';

/** Task lite mapper. */
@Injectable({ providedIn: 'root' })
export class TaskLiteMapper implements IMapperFromDto<TaskLiteDto, TaskLite> {

  /** @inheritdoc */
  public fromDto(dto: TaskLiteDto): TaskLite {
    return new TaskLite({
      description: dto.description,
      id: dto.id,
      title: dto.title,
    });
  }
}
