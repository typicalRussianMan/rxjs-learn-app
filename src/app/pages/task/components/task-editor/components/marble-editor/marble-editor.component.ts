import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fabric } from 'fabric';

/** Marble editor. */
@Component({
  selector: 'rla-marble-editor',
  standalone: true,
  imports: [],
  templateUrl: './marble-editor.component.html',
  styleUrl: './marble-editor.component.css',
})
export class MarbleEditorComponent implements AfterViewInit {

  /** Canvas element. */
  @ViewChild('canvas')
  protected canvasRef!: ElementRef<HTMLCanvasElement>;

  private canvas!: fabric.Canvas;

  /** @inheritdoc */
  public ngAfterViewInit(): void {
    this.canvasRef.nativeElement.width = window.innerWidth - 400;
    this.canvasRef.nativeElement.height = window.innerHeight;

    this.canvas = new fabric.Canvas(this.canvasRef.nativeElement);
  }
}
