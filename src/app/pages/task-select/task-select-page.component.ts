import { Component, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { TaskLite } from '../../core/models/task-lite';
import { TaskService } from '../../core/services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-select-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './task-select-page.component.html',
  styleUrl: './task-select-page.component.css'
})
export class TaskSelectPageComponent {

  private readonly taskService = inject(TaskService);

  /** Tasks. */
  protected readonly tasks$: Observable<readonly TaskLite[]> = this.taskService.getTaskList().pipe(
    shareReplay({ refCount: true, bufferSize: 1 }),
  );
}
