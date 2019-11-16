import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service'

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {

  showPagination = true
  listOfData = []

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listOfData = this.userService.getUserList()    
  }
}
