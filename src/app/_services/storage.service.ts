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

  public saveUserKey(key: string): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, key);
  }

  public getUserKey(): any {
    const key = localStorage.getItem(USER_KEY);
    if (key) {
      return key;
    }
    return null;
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
