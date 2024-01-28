import { TaskContentDto } from "./task-content.dto";

/** Task DTO. */
export interface TaskDto {

  /** Name. */
  readonly name: string;

  /** ID. */
  readonly id: string;

  /** Content. */
  readonly content: readonly TaskContentDto[];
}
