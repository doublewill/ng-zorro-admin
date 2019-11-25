import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../../core/model/User'
import { Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userUrl = 'api/users'

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }
  addUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<User>(this.userUrl, user, httpOptions)
  }
}
