import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../../core/model/User'
import { Observable, of } from 'rxjs'
import { userList } from '../../../mock/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return userList
  }
}
