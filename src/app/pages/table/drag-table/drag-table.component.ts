import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { UserService } from '../../../core/service/user.service'

@Component({
  selector: 'app-drag-table',
  templateUrl: './drag-table.component.html',
  styleUrls: ['./drag-table.component.scss']
})
export class DragTableComponent implements OnInit {
  showPagination = true
  listOfData = []
  pageSize = [10, 30, 50, 100]
  isVisible = false
  total = 0

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listOfData = this.userService.getUserList()    
    this.total = this.listOfData.length
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.listOfData, event.previousIndex, event.currentIndex);
  }  
}
