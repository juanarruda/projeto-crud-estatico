import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {environment} from "../../environments/environment";

export const API_URL = 'http://localhost:8080/projeto-crud-api/rest';
export const chaveCrypto = '123456$#@$^@1ERF';

@Injectable({ providedIn: 'root' })
export class LoginService {
  /*private userSubject: BehaviorSubject<Cliente>;
  public user: Observable<Cliente>;*/

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    /*this.userSubject = new BehaviorSubject<Cliente>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();*/
  }

  /*public get userValue(): Cliente {
    return this.userSubject.value;
  }

  /!*register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }*!/

  login(username, password) {
    return this.http.post<Cliente>(`${environment.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));

    /!*login(username: string, password: string): Observable<any> {
      return this.http.post(AUTH_API + 'signin', {
        username,
        password
      }, httpOptions);
    }*!/
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  register(user: Cliente) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  getAll() {
    return this.http.get<Cliente[]>(`${environment.apiUrl}/users`);
  }

  getById(id: string) {
    return this.http.get<Cliente>(`${environment.apiUrl}/users/${id}`);
  }

  update(id, params) {
    return this.http.put(`${environment.apiUrl}/users/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue.id) {
          this.logout();
        }
        return x;
      }));
  }*/
}
