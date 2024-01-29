import { Component, inject } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, first, switchMap, tap } from 'rxjs';
import { Task } from '../../core/models/task';
import { AsyncPipe } from '@angular/common';

/** Task editor page. */
@Component({
  selector: 'rla-task-editor-page',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './task-editor-page.component.html',
  styleUrl: './task-editor-page.component.css'
})
export class TaskEditorPageComponent {

  private readonly taskService = inject(TaskService);

  private readonly route = inject(ActivatedRoute);

  /** Current task. */
  protected readonly task$: Observable<Task>;

  public constructor() {
    this.task$ = this.route.params.pipe(
      first(),
      switchMap(params => this.taskService.getTask(params['taskId'])),
      tap(console.log),
    );
  }
}
