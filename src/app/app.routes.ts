import { Routes } from '@angular/router';

import { TaskSelectPageComponent } from './pages/task-select/task-select-page.component';
import { BasePageComponent } from './pages/base-page.component';
import { TaskEditorPageComponent } from './pages/task-editor/task-editor-page.component';

/** Routes. */
export const routes: Routes = [
  {
    path: 'tasks/:taskId',
    component: TaskEditorPageComponent,
  },
  {
    path: '',
    component: BasePageComponent,
    children: [
      {
        path: 'select',
        component: TaskSelectPageComponent,
        title: 'Select level',
      },
      {
        path: '**',
        redirectTo: 'select',
      },
    ],
  },
];
