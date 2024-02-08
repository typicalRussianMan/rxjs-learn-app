import { Routes } from '@angular/router';

import { TaskSelectPageComponent } from './pages/task-select/task-select-page.component';
import { BasePageComponent } from './pages/base-page.component';
import { TaskPageComponent } from './pages/task/task-page.component';

/** Routes. */
export const routes: Routes = [
  {
    path: 'tasks/:taskId',
    component: TaskPageComponent,
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
