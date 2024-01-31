/** Task content type. */
export enum TaskContentTypeDto {
  Text = 'Text',
  Image = 'Image',
  Heading = 'Heading',
}

/** Text task content. */
export type TextTaskContentDto = {

  /** Type. */
  readonly type: TaskContentTypeDto.Text;

  /** Text. */
  readonly text: string;
};

/** Image task content. */
export type ImageTaskContentDto = {

  /** Type. */
  readonly type: TaskContentTypeDto.Image;

  /** Image link. */
  readonly src: string;
};

/** Heading task content. */
export type HeadingTaskContentDto = {

  /** Type. */
  readonly type: TaskContentTypeDto.Heading;

  /** Text. */
  readonly text: string;
};

/** Task content DTO. */
export type TaskContentDto = TextTaskContentDto
  | ImageTaskContentDto
  | HeadingTaskContentDto;
