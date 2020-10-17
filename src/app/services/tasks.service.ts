import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  getTasks(): any {
    return this.http.get<any>(`${this.URL}/tasks`);
  }
  getPrivateTasks(): any {
    return this.http.get<any>(`${this.URL}/private-tasks`);
  }
}
