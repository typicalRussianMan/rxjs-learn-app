import { Routes } from '@angular/router';
import { TaskSelectPageComponent } from './pages/task-select/task-select-page.component';
import { BasePageComponent } from './pages/base-page.component';

export const routes: Routes = [
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
