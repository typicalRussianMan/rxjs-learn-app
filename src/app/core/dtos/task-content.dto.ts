/** Task content type. */
export enum TaskContentTypeDto {
  Text = 'Text',
  Image = 'Image',
  Heading = 'Heading',
}

/** Text task content. */
export interface TextTaskContentDto {

  /** Type. */
  readonly type: TaskContentTypeDto.Text;

  /** Text. */
  readonly text: string;
}

/** Image task content. */
export interface ImageTaskContentDto {

  /** Type. */
  readonly type: TaskContentTypeDto.Image;

  /** Image link. */
  readonly src: string;
}

/** Heading task content. */
export interface HeadingTaskContentDto {

  /** Type. */
  readonly type: TaskContentTypeDto.Heading;

  /** Text. */
  readonly text: string;
}

export type TaskContentDto = TextTaskContentDto
  | ImageTaskContentDto
  | HeadingTaskContentDto;
