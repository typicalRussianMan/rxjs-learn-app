/** Task content type. */
export enum TaskContentType {
  Text = 'Text',
  Image = 'Image',
  Heading = 'Heading',
}

/** Text task content. */
export interface TextTaskContent {

  /** Type. */
  readonly type: TaskContentType.Text;

  /** Text. */
  readonly text: string;
}

/** Image task content. */
export interface ImageTaskContent {

  /** Type. */
  readonly type: TaskContentType.Image;

  /** Image link. */
  readonly src: string;
}

/** Heading task content. */
export interface HeadingTaskContent {

  /** Type. */
  readonly type: TaskContentType.Heading;

  /** Text. */
  readonly text: string;
}

export type TaskContent = TextTaskContent
  | ImageTaskContent
  | HeadingTaskContent;
