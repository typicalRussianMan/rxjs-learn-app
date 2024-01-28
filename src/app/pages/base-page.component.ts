import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'rla-base-page',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasePageComponent {
}
