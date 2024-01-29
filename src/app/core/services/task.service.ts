import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { TaskLite } from '../models/task-lite';
import { TaskLiteDto } from '../dtos/task-lite.dto';
import { TaskLiteMapper } from '../mappers/task-lite.mapper';
import { Task } from '../models/task';
import { TaskDto } from '../dtos/task.dto';
import { TaskMapper } from '../mappers/task.mapper';
import { LOCATION } from '../injection-tokens/location.token';
import { StorageService } from './storage.service';

const SOLVED_TASKS_KEY = 'rla__solved';

/** Task service. */
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly http = inject(HttpClient);

  private readonly taskLiteMapper = inject(TaskLiteMapper);

  private readonly taskMapper = inject(TaskMapper);

  private readonly location = inject(LOCATION);

  private readonly storageService = inject(StorageService);

  private readonly taskUrl = new URL('/assets/task-data.json', this.location.origin);

  private readonly taskDetailUrl = new URL('/assets/', this.location.origin);

  private readonly taskDetailUrlBuilder = (id: string) => new URL(`${id}.json`, this.taskDetailUrl);

  /** Gets list of tasks. */
  public getTaskList(): Observable<TaskLite[]> {
    return this.http.get<TaskLiteDto[]>(this.taskUrl.toString()).pipe(
      map(tasks => tasks.map(this.taskLiteMapper.fromDto)),
    );
  }

  /**
   * Fetches task by ID.
   * @param id Task ID.
   */
  public getTask(id: string): Observable<Task> {
    return this.http.get<TaskDto>(this.taskDetailUrlBuilder(id).toString()).pipe(
      map(task => this.taskMapper.fromDto(task)),
    );
  }

  /**
   * Checks if task solved.
   * @param id ID.
   */
  public isTaskSolved(id: string): Observable<boolean> {
    const value = this.storageService.get<readonly string[]>(SOLVED_TASKS_KEY);

    if (value === null || !value.includes(id)) {
      return of(false);
    }

    return of(true);
  }
}
