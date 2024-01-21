import { combineLatest } from "rxjs";
import { Marble } from "../basic-marbles/marble";


/** Marble that emulates `combineLatest` rxjs operator. */
export class CombineLatestMarble extends Marble {

  /** @inheritdoc */
  public configuration = {};

  public constructor() {
    super(inputs => combineLatest([...inputs.map(input => input.currentObservable)]));
  }
}
