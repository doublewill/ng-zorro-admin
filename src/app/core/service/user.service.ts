import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../../core/model/User'
import { Observable, of } from 'rxjs'
import { userList, newId } from '../../../mock/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList = userList

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.userList
  }
  addUser(param) {
    this.userList.push({
      ...param,
      id: newId()
    })
    return this.userList
  }  
}
