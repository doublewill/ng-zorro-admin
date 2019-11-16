import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module'
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DragTableComponent } from './drag-table/drag-table.component';
import { ComplexTableComponent } from './complex-table/complex-table.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
@NgModule({
  declarations: [TableComponent, DynamicTableComponent, DragTableComponent, ComplexTableComponent, BasicTableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NgZorroAntdModule
  ]
})
export class TableModule { }
