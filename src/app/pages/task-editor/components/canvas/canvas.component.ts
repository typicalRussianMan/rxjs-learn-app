import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { assertNonNullable } from '../../../../core/utils/assert-non-nullable';

/** Canvas component. */
@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css',
})
export class CanvasComponent implements OnInit {

  /** Canvas. */
  @ViewChild('canvas')
  public canvas!: ElementRef<HTMLCanvasElement>;

  /** Context. */
  public context!: CanvasRenderingContext2D;

  /** @inheritdoc */
  public ngOnInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    assertNonNullable(ctx);

    this.context = ctx;
  }
}
