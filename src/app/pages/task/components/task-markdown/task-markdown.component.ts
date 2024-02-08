import { Component, Input } from '@angular/core';

import { TaskContent, TaskContentType } from '../../../../core/models/task-content';

/** Task markdown component. */
@Component({
  selector: 'rla-task-markdown',
  standalone: true,
  imports: [],
  templateUrl: './task-markdown.component.html',
  styleUrl: './task-markdown.component.css',
})
export class TaskMarkdownComponent {

  /** Task content. */
  @Input({ required: true })
  public taskContent!: readonly TaskContent[];

  /** Task content type. */
  protected readonly TaskContentType = TaskContentType;
}
