export class TaskLite {

  /** ID. */
  public readonly id: string;

  /** Title. */
  public readonly title: string;

  /** Description. */
  public readonly description: string;

  public constructor(data: TaskLite) {
    this.description = data.description;
    this.id = data.id;
    this.title = data.title;
  }
}
