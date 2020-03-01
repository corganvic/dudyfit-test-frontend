import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  serverPath: string = environment.serverPath;
  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    return this.httpClient.get(`${this.serverPath}/users`).pipe(
      tap( res => res )
    );
  };

  getTrainers() {
    return this.httpClient.get(`${this.serverPath}/trainers`).pipe(
      tap( res => res )
    );
  };

  createTrainer(item) {
    return this.httpClient.post(`${this.serverPath}/add-trainer`, item).pipe(
      tap( res => res )
    );
  };

  createUser(item) {
    return this.httpClient.post(`${this.serverPath}/add-user`, item).pipe(
      tap( res => res )
    );
  };

  deleteTrainer(item) {
    return this.httpClient.post(`${this.serverPath}/delete-trainer`, item).pipe(
      tap( res => res )
    );
  };

  deleteUser(item) {
    return this.httpClient.post(`${this.serverPath}/delete-user`, item).pipe(
      tap( res => res )
    );
  };

  getAssignedUsers() {
    return this.httpClient.get(`${this.serverPath}/assigned`).pipe(
      tap( res => res )
    );
  };
}
