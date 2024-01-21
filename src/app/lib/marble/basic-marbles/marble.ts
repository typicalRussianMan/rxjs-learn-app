import { NEVER, Observable } from "rxjs";

/**
 * Marble class.
 * It uses to dynamically build observables.
 * Customization over rxjs statements, but brings everything to the same interface.
 *
 * @example
 * // This...
 * const interval1 = new IntervalMarble(1000);
 * const interval2 = new IntervalMarble(500);
 *
 * const combineLatest = new CombineLatestMarble();
 * const output1 = new FinalMarble();
 *
 * const merge = new MergeMarble();
 * const double = new MapMarble(x => x * 2);
 * const output2 = new FinalMarble();
 *
 * interval1.addOutput(combineLatest);
 * interval2.addOutput(combineLatest);
 * combineLatest.addOutput(output1);
 *
 * interval1.addOutput(merge);
 * interval2.addOutput(merge);
 * merge.addOutput(double);
 * double.addOutput(output2);
 *
 * // ... just like this.
 * const interval1 = interval(1000);
 * const interval2 = interval(500);
 *
 * combineLatest([interval1, interval2]).pipe(
 *   tap(console.log),
 * );
 *
 * merge(interval1, interval2).pipe(
 *   map(x => x * 2),
 *   tap(console.log),
 * );
 */
export abstract class Marble<TConf extends object = {}> {

  /** Array of input Marbles. */
  protected readonly inputs: Marble[] = [];

  /** Array of output Marbles. */
  protected readonly outputs: Marble[] = [];

  /** Current marble (depends on input marbles). */
  public currentObservable: Observable<any> = NEVER;

  /** Marble configuration. */
  public abstract configuration: TConf;

  public constructor(
    protected readonly buildObservable: (inputs: Marble[]) => Observable<any>,
  ) {}

  /**
   * Add output to future observable.
   * @param marble Marble.
   */
  public addOutput(marble: Marble): void {
    this._addOutput(marble);
    marble._addInput(this);
  }

  /**
   * Removes the output Marble of the current Marble and the input Marble of the one to be removed.
   * @param marble Marble.
   */
  public removeOutput(marble: Marble): void {
    this._removeOutput(marble);
    marble._removeInput(marble);
  }

  /** Removes the output Marble by index.  */
  public removeOutputByIndex(index: number): void {
    this.outputs[index]._removeInput(this);
    this._removeOutputById(index);
  }

  public addInput(marble: Marble): void {
    this._addInput(marble);
    marble._addOutput(marble);
  }

  public removeInput(marble: Marble): void {
    this._removeInput(marble);
    marble._addOutput(this);
  }

  public removeInputByIndex(index: number): void {
    this.inputs[index]._removeOutput(this);
    this._removeInputById(index);
  }

  public rebuildObservable() {
    this.currentObservable = this.buildObservable(this.inputs);
    this.outputs.forEach(marble => marble.rebuildObservable());
  }

  public modifyConfig(newConfig: Partial<TConf>): void {
    this.configuration = {
      ...this.configuration,
      ...newConfig,
    };

    this.rebuildObservable();
  }

  protected _addOutput(marble: Marble): void {
    this.outputs.push(marble);
  }

  protected _removeOutput(marble: Marble): void {
    const index = this.outputs.indexOf(marble);

    if (index === -1) {
      return;
    }

    this.outputs.splice(index, 1);
  }

  protected _removeOutputById(index: number): void {
    this.outputs.splice(index, 1);
  }

  protected _addInput(marble: Marble): void {
    this.inputs.push(marble);
    this.rebuildObservable();
  }

  protected _removeInput(marble: Marble): void {
    const index = this.inputs.indexOf(marble);

    if (index === -1) {
      return;
    }

    this.inputs.splice(index, 1);
    this.rebuildObservable();
  }

  protected _removeInputById(index: number): void {
    this.inputs.splice(index, 1);
    this.rebuildObservable();
  }
}
