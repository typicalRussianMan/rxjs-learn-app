import { NEVER, tap } from "rxjs";
import { InputOnlyMarble } from "../basic-marbles/input-only-marble";
import { neverIfEmptyInputs } from "../utils/never-if-empy-inputs";

interface ILoggedMarbleConfiguration {

  /** Tag. */
  readonly tag: string;
}

/** Marble that emulates `.pipe( tap(console.log) )` rxjs operator. */
export class LoggedMarble extends InputOnlyMarble<ILoggedMarbleConfiguration> {

  public configuration: ILoggedMarbleConfiguration = {
    tag: '',
  };

  public constructor(tag: string) {
    super(neverIfEmptyInputs(inputs => inputs[0].currentObservable.pipe(
      tap(value => console.log(this.configuration.tag, value))
    )));

    this.modifyConfig({ tag });
  }
}
