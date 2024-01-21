import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Subscription } from 'rxjs';
import { CombineLatestMarble, IntervalMarble, MapMarble, MergeMarble } from './lib/marble';
import { LoggedMarble } from './lib/marble/final-marble/logged-marble';

export const data = {
  i1: new IntervalMarble(1000),
  i2: new IntervalMarble(500),
  cl: new CombineLatestMarble(),
  mg: new MergeMarble(),
  db: new MapMarble(x => x * 2),
  f1: new LoggedMarble('Combine latest'),
  f2: new LoggedMarble('Merge'),
};

// Intervals -> combineLatest.
data.i1.addOutput(data.cl); // interval ->
data.i2.addOutput(data.cl); //            combineLatest -> logger1.
data.cl.addOutput(data.f1); // interval ->

data.i1.addOutput(data.mg); // interval ->
data.i2.addOutput(data.mg); //            merge -> *2 -> logger2.
data.mg.addOutput(data.db); // interval ->
data.db.addOutput(data.f2);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'rxjs-learn-app';

  protected s1: Subscription | null = null;

  protected s2: Subscription | null = null;

  public onBtn1Click() {
    this.s1 = data.f1.currentObservable.subscribe();
  }

  public onBtn2Click() {
    this.s2 = data.f2.currentObservable.subscribe();
  }

  public stop1() {
    this.s1?.unsubscribe();
    this.s1 = null;
  }

  public stop2() {
    this.s2?.unsubscribe();
    this.s2 = null;
  }
}
