import { merge } from "rxjs";
import { Marble } from "../basic-marbles/marble";

/** Marble that emulates `merge` rxjs operator. */
export class MergeMarble extends Marble {

  /** @inheritdoc */
  public configuration = {};

  public constructor() {
    super(inputs => merge(...inputs.map(input => input.currentObservable)));
  }
}
