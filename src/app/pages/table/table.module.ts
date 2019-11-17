import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module'
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DragTableComponent } from './drag-table/drag-table.component';
import { ComplexTableComponent } from './complex-table/complex-table.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
@NgModule({
  declarations: [TableComponent, DragTableComponent, ComplexTableComponent, BasicTableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TableModule { }
