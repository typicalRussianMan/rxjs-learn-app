import { Routes } from '@angular/router';
import { TaskSelectPageComponent } from './pages/task-select/task-select-page.component';

export const routes: Routes = [
  {
    path: 'select',
    component: TaskSelectPageComponent,
    title: 'Select level',
  },
  {
    path: '**',
    redirectTo: 'select',
  },
];
