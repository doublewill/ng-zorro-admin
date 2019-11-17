import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service'

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.scss']
})
export class ComplexTableComponent implements OnInit {
  listOfData = []
  pageSize = [10, 30, 50, 100]
  isVisible = false

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listOfData = this.userService.getUserList()
  }

  editUser(data) {
    console.log(data)
  }
  deleteUser(data) {

  }
  addUser() {
    this.isVisible = true
  }
  handleSubmit() {
    this.isVisible = false
  }
  handleCancel() {
    this.isVisible = false
  }
}
