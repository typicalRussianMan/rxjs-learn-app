import { tap } from 'rxjs';

import { InputOnlyMarble } from '../basic-marbles/input-only-marble';
import { neverIfEmptyInputs } from '../utils/never-if-empy-inputs';

type LoggedMarbleConfiguration = {

  /** Tag. */
  onData(value: unknown): void;
};

/** Marble that emulates `.pipe( tap(console.log) )` rxjs operator. */
export class LoggedMarble extends InputOnlyMarble<LoggedMarbleConfiguration> {

  /** @inheritdoc */
  public configuration: LoggedMarbleConfiguration = {
    onData() {
      return void 0;
    },
  };

  public constructor(onData: (value: unknown) => void) {
    super(neverIfEmptyInputs(inputs => inputs[0].currentObservable$.pipe(
      tap(value => this.configuration.onData(value)),
    )));

    this.modifyConfig({ onData });
  }
}
