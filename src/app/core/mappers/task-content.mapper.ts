import { Injectable } from '@angular/core';

import { TaskContentDto, TaskContentTypeDto } from '../dtos/task-content.dto';
import { TaskContent, TaskContentType } from '../models/task-content';

import { IMapperFromDto } from './mapper';

/** Task content mapper. */
@Injectable({ providedIn: 'root' })
export class TaskContentMapper implements IMapperFromDto<TaskContentDto, TaskContent> {

  /** @inheritdoc */
  public fromDto(dto: TaskContentDto): TaskContent {
    if (dto.type === TaskContentTypeDto.Image) {
      return {
        type: TaskContentType.Image,
        src: dto.src,
      };
    }

    if (dto.type === TaskContentTypeDto.Text) {
      return {
        type: TaskContentType.Text,
        text: dto.text,
      };
    }

    return {
      type: TaskContentType.Heading,
      text: dto.text,
    };
  }
}
