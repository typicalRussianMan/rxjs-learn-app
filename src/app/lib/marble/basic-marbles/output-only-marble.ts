import { OutputOnlyMarbleError } from "../errors/errors";
import { Marble } from "./marble";

/** Output-only marble. */
export abstract class OutputOnlyMarble<TConf extends object = {}> extends Marble<TConf> {

  /** @inheritdoc */
  protected override addInput(_marble: Marble): void {
    throw new OutputOnlyMarbleError();
  }

  /** @inheritdoc */
  protected override removeInput(_marble: Marble): void {
    throw new OutputOnlyMarbleError();
  }

  /** @inheritdoc */
  protected override removeInputByIndex(_index: number): void {
    throw new OutputOnlyMarbleError();
  }
}
