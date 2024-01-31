import { NEVER, Observable, Observer, Subscription } from 'rxjs';

/**
 * Marble class.
 * It uses to dynamically build observables.
 * Customization over rxjs statements, but brings everything to the same interface.
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
  public currentObservable$: Observable<unknown> = NEVER;

  /** Marble configuration. */
  public abstract configuration: TConf;

  public constructor(
    protected readonly buildObservable: (inputs: Marble[]) => Observable<unknown>,
  ) {}

  /**
   * Adds an output observable for the marble.
   * @param marble Marble.
   */
  public addOutput(marble: Marble): void {
    this._addOutput(marble);
    marble._addInput(this);
  }

  /**
   * Removes the output observable from the marble.
   * @param marble Marble.
   */
  public removeOutput(marble: Marble): void {
    this._removeOutput(marble);
    marble._removeInput(marble);
  }

  /**
   * Removes the output observable at the marble by index.
   * @param index Index.
   */
  public removeOutputByIndex(index: number): void {
    this.outputs[index]._removeInput(this);
    this._removeOutputById(index);
  }

  /**
   * Adds an input observable for the marble.
   * @param marble Marble.
   */
  public addInput(marble: Marble): void {
    this._addInput(marble);
    marble._addOutput(marble);
  }

  /**
   * Removes the input observable from the marble.
   * @param marble Marble.
   */
  public removeInput(marble: Marble): void {
    this._removeInput(marble);
    marble._addOutput(this);
  }

  /**
   * Removes the input observable at the marble by index.
   * @param index Index.
   */
  public removeInputByIndex(index: number): void {
    this.inputs[index]._removeOutput(this);
    this._removeInputById(index);
  }

  /**
   * Modifies observable config.
   * @param newConfig Modified config.
   */
  public modifyConfig(newConfig: Partial<TConf>): void {
    this.configuration = {
      ...this.configuration,
      ...newConfig,
    };

    this.rebuildObservable();
  }

  /**
   * Subscribes to the observable.
   * @param observerOrNext Subscription callback or observer interface.
   */
  public subscribe(observerOrNext?: Partial<Observer<unknown>> | ((value: unknown) => void) | undefined): Subscription {
    return this.currentObservable$.subscribe(observerOrNext);
  }

  /**
   * Adds an output observable for the marble.
   * @param marble Marble.
   */
  protected _addOutput(marble: Marble): void {
    this.outputs.push(marble);
  }

  /**
   * Removes the output observable from the marble.
   * @param marble Marble.
   */
  protected _removeOutput(marble: Marble): void {
    const index = this.outputs.indexOf(marble);

    if (index === -1) {
      return;
    }

    this.outputs.splice(index, 1);
  }

  /**
   * Removes the output observable at the marble by index.
   * @param index Index.
   */
  protected _removeOutputById(index: number): void {
    this.outputs.splice(index, 1);
  }

  /**
   * Adds an input observable for the marble.
   * @param marble Marble.
   */
  protected _addInput(marble: Marble): void {
    this.inputs.push(marble);
    this.rebuildObservable();
  }

  /**
   * Removes the input observable from the marble.
   * @param marble Marble.
   */
  protected _removeInput(marble: Marble): void {
    const index = this.inputs.indexOf(marble);

    if (index === -1) {
      return;
    }

    this.inputs.splice(index, 1);
    this.rebuildObservable();
  }

  /**
   * Removes the input observable at the marble by index.
   * @param index Index.
   */
  protected _removeInputById(index: number): void {
    this.inputs.splice(index, 1);
    this.rebuildObservable();
  }

  /** Rebuilds marble observable using config and input marbles. */
  protected rebuildObservable(): void {
    this.currentObservable$ = this.buildObservable(this.inputs);
    this.outputs.forEach(marble => marble.rebuildObservable());
  }
}
