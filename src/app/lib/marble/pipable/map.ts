import { map } from 'rxjs';

import { Marble } from '../basic-marbles/marble';
import { MarbleInputOverflowError } from '../errors/errors';
import { neverIfEmptyInputs } from '../utils/never-if-empy-inputs';

type MapCallback = (value: unknown) => unknown;

type MapMarbleConfiguration = {

  /** Map callback. */
  readonly callback: MapCallback;
};

/** Marble that emulates `.pipe( map )` rxjs operator. */
export class MapMarble extends Marble<MapMarbleConfiguration> {

  /** @inheritdoc */
  public configuration: MapMarbleConfiguration = {
    callback: () => void 0,
  };

  public constructor(mapFn: MapCallback) {
    super(neverIfEmptyInputs(inputs => inputs[0].currentObservable$.pipe(
      map(val => this.configuration.callback(val)),
    )));

    this.modifyConfig({ callback: mapFn });
  }

  /** @inheritdoc */
  protected override _addInput(marble: Marble): void {
    if (this.inputs.length > 0) {
      throw new MarbleInputOverflowError();
    }

    super._addInput(marble);
  }
}
