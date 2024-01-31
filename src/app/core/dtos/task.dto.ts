import { TaskContentDto } from './task-content.dto';

/** Task DTO. */
export type TaskDto = {

  /** Name. */
  readonly name: string;

  /** ID. */
  readonly id: string;

  /** Content. */
  readonly content: readonly TaskContentDto[];

  /** ID of the next task. */
  readonly nextTaskId?: string;

  /** ID of the previous task. */
  readonly previousTaskId?: string;
};
