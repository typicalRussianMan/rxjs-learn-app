import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TaskLite } from '../models/task-lite';
import { TaskLiteDto } from '../dtos/task-lite.dto';
import { TaskLiteMapper } from '../mappers/task-lite.mapper';
import { Task } from '../models/task';
import { TaskDto } from '../dtos/task.dto';
import { TaskMapper } from '../mappers/task.mapper';
import { LOCATION } from '../injection-tokens/location.token';

/** Task service. */
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly http = inject(HttpClient);

  private readonly taskLiteMapper = inject(TaskLiteMapper);

  private readonly taskMapper = inject(TaskMapper);

  private readonly location = inject(LOCATION);

  private readonly taskUrl = new URL('/assets/task-data.json', this.location.origin);

  private readonly taskDetailUrl = new URL('/assets/tasks', this.location.origin);

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
}
