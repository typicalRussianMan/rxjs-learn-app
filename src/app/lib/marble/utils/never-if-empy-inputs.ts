import { NEVER, Observable } from 'rxjs';
import { Marble } from '../basic-marbles/marble';

/**
 * Returns never if empty array passes.
 * @param callback Callback which returns an array.
 */
export function neverIfEmptyInputs(
  callback: (inputs: readonly Marble[]) => Observable<any>,
): (inputs: readonly Marble[]) => Observable<any> {
  return (inputs: readonly Marble[]) => {
    if (inputs.length === 0) return NEVER;

    return callback(inputs);
  }

}
