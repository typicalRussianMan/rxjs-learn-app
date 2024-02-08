import { Component, Input } from '@angular/core';

import { Task } from '../../../../core/models/task';

import { MarbleEditorComponent } from './components/marble-editor/marble-editor.component';

/** Task editor. */
@Component({
  selector: 'rla-task-editor',
  standalone: true,
  imports: [MarbleEditorComponent],
  templateUrl: './task-editor.component.html',
  styleUrl: './task-editor.component.css',
})
export class TaskEditorComponent {

  /** Task. */
  @Input({ required: true })
  public task!: Task;
}
