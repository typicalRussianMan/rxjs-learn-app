import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { TaskLite } from '../../core/models/task-lite';
import { TaskService } from '../../core/services/task.service';
import { AsyncPipe } from '@angular/common';
import { ExpansionPanelComponent } from '../../components/expansion-panel/expansion-panel.component';

@Component({
  selector: 'rla-task-select-page',
  standalone: true,
  imports: [AsyncPipe, ExpansionPanelComponent],
  templateUrl: './task-select-page.component.html',
  styleUrl: './task-select-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskSelectPageComponent {

  private readonly taskService = inject(TaskService);

  /** Tasks. */
  protected readonly tasks$: Observable<readonly TaskLite[]> = this.taskService.getTaskList().pipe(
    shareReplay({ refCount: true, bufferSize: 1 }),
  );
}
