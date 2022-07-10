import { Injectable } from '@angular/core';
import { IUser } from './IUser';

import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

//import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

  deleteUser(user: IUser): Observable<IUser[]> {
    return this.http.delete<IUser[]>(this.url + '/' + user.id);
  }

  createUser(user: IUser): Observable<IUser[]> {
    return this.http.post<IUser[]>(this.url + '/' + user.id, user).pipe(
      catchError(() => {
        console.log(`User ${user.name} created at ${this.url}`);
        return of(<IUser[]>[]);
      })
    );
  }

}