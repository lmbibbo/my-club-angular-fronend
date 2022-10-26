import { Injectable } from '@angular/core';

const USER_KEY = 'Bearer-key';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    localStorage.clear();
  }

  public saveUser(key: string): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, key);
  }

  public getUserKey(): string {
    const key = localStorage.getItem(USER_KEY);
    if (key) {
      return key;
    }
    return "";
  }

  public getUser(): any {
    const key = localStorage.getItem(USER_KEY);
    if (key) {
      return key;
    }
    return "";
  }


  public isLoggedIn(): boolean {
    const key = localStorage.getItem(USER_KEY);
    if (key) {
      return true;
    }
    return false;
  }
}
