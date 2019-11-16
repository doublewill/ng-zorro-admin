import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module'
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NgZorroAntdModule
  ]
})
export class TableModule { }
