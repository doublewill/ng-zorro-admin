import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service'

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  pageSize = [10, 30, 50, 100]
  total = 0
  showPagination = true
  listOfData = []

  constructor(private userService: UserService) { }
  getUsers(): void {
    this.userService.getUserList().subscribe(users => this.listOfData = users)
  }
  ngOnInit() {
    this.getUsers()
  }
}
