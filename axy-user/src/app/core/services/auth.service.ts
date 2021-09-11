import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/feature/home/models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | any>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    const userDetails = localStorage.getItem('currentUser') || '';
    this.currentUserSubject = new BehaviorSubject<User>(userDetails ? JSON.parse(userDetails) : '');
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getUses(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiEndPoint}/users`);
  }

  login(userName: string, password: string) {
    // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { userName, password })
    return this.getUses()
      .pipe(map(users => {
        const loggedInUser = this.getUserDetails(userName, users);
        if (loggedInUser) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
          this.currentUserSubject.next(loggedInUser);
          return loggedInUser;
        } else {
          throwError(null);
          return null;
        }
      }));
  }
  getUserDetails(userName: string, users: User[]) {
    if (users.length) {
      return users.find(user => user?.email.toLowerCase() === userName.toLowerCase());
    } else {
      return null;
    }
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('login');
  }
}
