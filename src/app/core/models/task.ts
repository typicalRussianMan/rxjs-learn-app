import { TaskContent } from "./task-content";

/** Task. */
export class Task {

  /** Name. */
  public readonly name: string;

  /** ID. */
  public readonly id: string;

  /** Content. */
  public readonly content: readonly TaskContent[];

  public constructor(data: Task) {
    this.content = data.content;
    this.id = data.id;
    this.name = data.name;
  }
}
