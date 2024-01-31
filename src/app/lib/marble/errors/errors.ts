/** Marble error. */
export class MarbleError extends Error {}

/** Error that occurs when the input data overflows. */
export class MarbleInputOverflowError extends MarbleError {

  public constructor() {
    super('There are too many input parameters in this Marble');
  }
}

/** Error occurring when trying to add an output for InputOnlyMarble. */
export class InputOnlyMarbleError extends MarbleError {

  public constructor() {
    super('Can\'t add an output for `InputOnlyMarble`');
  }
}

/** Error occurring when trying to add an input for OutputOnlyMarble. */
export class OutputOnlyMarbleError extends MarbleError {

  public constructor() {
    super('Can\'t add an input for `OutputOnlyMarble`');
  }
}
