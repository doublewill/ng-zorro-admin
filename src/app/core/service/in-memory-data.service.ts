import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Injectable } from '@angular/core';
import { Random, mock } from 'mockjs'

let userList = []

for(let Idx = 0; Idx < 200; Idx++) {
  userList.push({
    id: mock('@natural'),
    name: Random.cname(),
    age: Random.natural(20, 90),
    birthday: Random.date('yyyy-mm-dd'),
    address: mock('@county(true)')
  })
}

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = userList;
    return {users};
  }
}
