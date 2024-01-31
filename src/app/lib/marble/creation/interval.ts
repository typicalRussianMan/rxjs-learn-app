import { interval } from 'rxjs';

import { OutputOnlyMarble } from '../basic-marbles/output-only-marble';

type IntervalMarbleConfiguration = {

  /** The interval size in milliseconds. */
  readonly period: number;
};

/** Marble that emulates `interval` rxjs operator. */
export class IntervalMarble extends OutputOnlyMarble<IntervalMarbleConfiguration> {

  /** @inheritdoc */
  public configuration: IntervalMarbleConfiguration = {
    period: 1000,
  };

  public constructor(period: number) {
    super(() => interval(period));

    this.modifyConfig({ period });
  }
}
