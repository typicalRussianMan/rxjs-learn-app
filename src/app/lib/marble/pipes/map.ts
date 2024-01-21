import { NEVER, map } from "rxjs";
import { Marble } from "../basic-marbles/marble";
import { MarbleInputOverflowError } from "../errors/errors";

type MapCallback = (value: any) => any;

interface IMapMarbleConfiguration {

  /** Map callback. */
  readonly callback: MapCallback;
}

/** Marble that emulates `.pipe( map )` rxjs operator. */
export class MapMarble extends Marble<IMapMarbleConfiguration> {

  /** @inheritdoc */
  public configuration: IMapMarbleConfiguration = {
    callback: () => void 0,
  };

  public constructor(mapFn: MapCallback) {
    super(inputs => {
      if (inputs.length === 0) return NEVER;

      return inputs[0].currentObservable.pipe(
        map(val => this.configuration.callback(val)),
      );
    });

    this.modifyConfig({ callback: mapFn });
  }

  /** @inheritdoc */
  protected override addInput(marble: Marble): void {
    if (this.inputs.length > 0) throw new MarbleInputOverflowError();

    super.addInput(marble);
  }
}
