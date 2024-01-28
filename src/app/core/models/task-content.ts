/** Task content type. */
export enum TaskContentType {
  Text = 'Text',
  Image = 'Image',
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

export type TaskContent = TextTaskContent | ImageTaskContent;
