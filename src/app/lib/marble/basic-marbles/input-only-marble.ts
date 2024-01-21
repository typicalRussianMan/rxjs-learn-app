import { InputOnlyMarbleError } from "../errors/errors";
import { Marble } from "./marble";

/** Input-only marble. */
export abstract class InputOnlyMarble<TConf extends object = {}> extends Marble<TConf> {

  /** @inheritdoc */
  public override addOutput(_marble: Marble): void {
    throw new InputOnlyMarbleError();
  }

  /** @inheritdoc */
  public override removeOutput(_marble: Marble): void {
    throw new InputOnlyMarbleError();
  }

  /** @inheritdoc */
  public override removeOutputByIndex(_index: number): void {
    throw new InputOnlyMarbleError();
  }
}
