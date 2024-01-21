import { NEVER, filter, map } from "rxjs";
import { Marble } from "../basic-marbles/marble";
import { MarbleInputOverflowError } from "../errors/errors";

type FilterCallback = (value: any) => boolean;

interface IFilterMarbleConfiguration {

  /** Map callback. */
  readonly predicate: FilterCallback;
}

/** Marble that emulates `.pipe( map )` rxjs operator. */
export class FilterMarble extends Marble<IFilterMarbleConfiguration> {

  /** @inheritdoc */
  public configuration: IFilterMarbleConfiguration = {
    predicate: () => false,
  };

  public constructor(predicate: FilterCallback) {
    super(inputs => {
      if (inputs.length === 0) return NEVER;

      return inputs[0].currentObservable.pipe(
        filter(val => this.configuration.predicate(val)),
      );
    });

    this.modifyConfig({ predicate });
  }

  /** @inheritdoc */
  protected override _addInput(marble: Marble): void {
    if (this.inputs.length > 0) throw new MarbleInputOverflowError();

    super._addInput(marble);
  }
}
