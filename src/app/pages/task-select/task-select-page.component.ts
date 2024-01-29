import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { TaskLite } from '../../core/models/task-lite';
import { TaskService } from '../../core/services/task.service';
import { AsyncPipe } from '@angular/common';
import { ExpansionPanelComponent } from '../../components/expansion-panel/expansion-panel.component';
import { Router } from '@angular/router';

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

  private readonly router = inject(Router);

  /** Tasks. */
  protected readonly tasks$: Observable<readonly TaskLite[]> = this.taskService.getTaskList().pipe(
    shareReplay({ refCount: true, bufferSize: 1 }),
  );

  /**
   * Checks if task solved.
   * @param id ID.
   */
  public isSolved(id: string): Observable<boolean> {
    return this.taskService.isTaskSolved(id);
  }

  public redirectTo(id: string): void {
    this.router.navigate(['tasks', id])
  }
}
