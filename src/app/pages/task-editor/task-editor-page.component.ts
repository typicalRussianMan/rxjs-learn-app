import { Component, inject } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { shareReplay, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TaskMarkdownComponent } from './components/task-markdown/task-markdown.component';

/** Task editor page. */
@Component({
  selector: 'rla-task-editor-page',
  standalone: true,
  imports: [
    AsyncPipe,
    TaskMarkdownComponent,
    RouterLink,
  ],
  templateUrl: './task-editor-page.component.html',
  styleUrl: './task-editor-page.component.css'
})
export class TaskEditorPageComponent {

  private readonly taskService = inject(TaskService);

  private readonly route = inject(ActivatedRoute);

  /** Current task. */
  protected readonly task$ = this.route.params.pipe(
    switchMap(params => this.taskService.getTask(params['taskId'])),
    shareReplay({ refCount: true, bufferSize: 1 }),
  );
}
