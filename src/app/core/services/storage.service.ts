import { Injectable } from '@angular/core';

/** Storage service. */
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item === null ? null : JSON.parse(item);
  }

  public set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public exist(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  public delete(key: string): void {
    localStorage.removeItem(key);
  }
}
