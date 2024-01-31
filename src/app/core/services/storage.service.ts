import { Injectable } from '@angular/core';

/** Storage service. */
@Injectable({
  providedIn: 'root',
})
export class StorageService {

  /**
   * Gets an item from storage by key.
   * @param key Key.
   */
  public get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item === null ? null : JSON.parse(item);
  }

  /**
   * Saves an item to storage.
   * @param key Key.
   * @param value Value.
   */
  public set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Checks if value exists in storage.
   * @param key Key.
   */
  public exist(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  /**
   * Removes an item from storage.
   * @param key Key.
   */
  public delete(key: string): void {
    localStorage.removeItem(key);
  }
}
