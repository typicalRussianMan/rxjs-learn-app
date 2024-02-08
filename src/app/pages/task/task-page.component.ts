import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { shareReplay, switchMap } from 'rxjs';

import { TaskService } from '../../core/services/task.service';

import { TaskMarkdownComponent } from './components/task-markdown/task-markdown.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';

/** Task editor page. */
@Component({
  selector: 'rla-task-page',
  standalone: true,
  imports: [
    AsyncPipe,
    TaskMarkdownComponent,
    RouterLink,
    TaskEditorComponent,
  ],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css',
})
export class TaskPageComponent {

  private readonly taskService = inject(TaskService);

  private readonly route = inject(ActivatedRoute);

  /** Current task. */
  protected readonly task$ = this.route.params.pipe(
    switchMap(params => this.taskService.getTask(params['taskId'])),
    shareReplay({ refCount: true, bufferSize: 1 }),
  );
}
