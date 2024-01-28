import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Header component. */
@Component({
  selector: 'rla-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

}
