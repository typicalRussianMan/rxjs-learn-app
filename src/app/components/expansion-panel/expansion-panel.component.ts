import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Destroyable } from '../../core/utils/destroyable';

const CONTROL_ELEMENTS = [
  HTMLButtonElement,
  HTMLInputElement,
  HTMLLinkElement,
]

@Destroyable()
@Component({
  selector: 'rla-expansion-panel',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {

  @ViewChild('panel')
  protected readonly expansionPanel!: ElementRef<HTMLDivElement>;

  protected readonly isOpen$ = new BehaviorSubject(false);

  public open(): void {
    this.isOpen$.next(true);
    this.expansionPanel.nativeElement.classList.add('open');
  }

  public close(): void {
    this.isOpen$.next(false);
    this.expansionPanel.nativeElement.classList.remove('open');
  }

  public toggle(event: MouseEvent): void {
    if (CONTROL_ELEMENTS.some(element => event.target instanceof element)) {
      return;
    }
    
    if (this.isOpen$.value) {
      this.close();
    } else {
      this.open();
    }
  }
}
