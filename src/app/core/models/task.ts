import { TaskContent } from './task-content';

/** Task. */
export class Task {

  /** Name. */
  public readonly name: string;

  /** ID. */
  public readonly id: string;

  /** Content. */
  public readonly content: readonly TaskContent[];

  /** ID of the next task. */
  public readonly nextTaskId: string | null;

  /** ID of the previous task. */
  public readonly previousTaskId: string | null;

  public constructor(data: Task) {
    this.content = data.content;
    this.id = data.id;
    this.name = data.name;
    this.nextTaskId = data.nextTaskId;
    this.previousTaskId = data.previousTaskId;
  }
}
