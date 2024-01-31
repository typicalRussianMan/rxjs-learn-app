import { InputOnlyMarbleError } from '../errors/errors';

import { Marble } from './marble';

/** Input-only marble. */
export abstract class InputOnlyMarble<TConf extends object = {}> extends Marble<TConf> {

  /** @inheritdoc */
  protected override _addOutput(_marble: Marble): void {
    throw new InputOnlyMarbleError();
  }

  /** @inheritdoc */
  protected override _removeOutput(_marble: Marble): void {
    throw new InputOnlyMarbleError();
  }

  /** @inheritdoc */
  protected override _removeOutputById(_index: number): void {
    throw new InputOnlyMarbleError();
  }
}
