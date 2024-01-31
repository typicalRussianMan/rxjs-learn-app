import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

const CONTROL_ELEMENTS = [
  HTMLButtonElement,
  HTMLInputElement,
  HTMLLinkElement,
];

/** Expansion panel component. */
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
  private readonly expansionPanel!: ElementRef<HTMLDivElement>;

  private readonly isOpen$ = new BehaviorSubject(false);

  /** Opens panel. */
  public open(): void {
    this.isOpen$.next(true);
    this.expansionPanel.nativeElement.classList.add('open');
  }

  /** Closes panel. */
  public close(): void {
    this.isOpen$.next(false);
    this.expansionPanel.nativeElement.classList.remove('open');
  }

  /**
   * Toggles panel state, prevent action if target is controller (button or input).
   * @param event Mouse event.
   */
  public async toggle(event: MouseEvent): Promise<void> {
    if (CONTROL_ELEMENTS.some(element => event.target instanceof element)) {
      return;
    }

    if (await firstValueFrom(this.isOpen$)) {
      this.close();
    } else {
      this.open();
    }
  }
}
