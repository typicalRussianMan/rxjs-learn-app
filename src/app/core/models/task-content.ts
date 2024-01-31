/** Task content type. */
export enum TaskContentType {
  Text = 'Text',
  Image = 'Image',
  Heading = 'Heading',
}

/** Text task content. */
export type TextTaskContent = {

  /** Type. */
  readonly type: TaskContentType.Text;

  /** Text. */
  readonly text: string;
};

/** Image task content. */
export type ImageTaskContent = {

  /** Type. */
  readonly type: TaskContentType.Image;

  /** Image link. */
  readonly src: string;
};

/** Heading task content. */
export type HeadingTaskContent = {

  /** Type. */
  readonly type: TaskContentType.Heading;

  /** Text. */
  readonly text: string;
};

/** Task content. */
export type TaskContent = TextTaskContent
  | ImageTaskContent
  | HeadingTaskContent;
