import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { DragTableComponent } from './drag-table/drag-table.component';
import { ComplexTableComponent } from './complex-table/complex-table.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
const routes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full', component: TableComponent },
  { path: 'basic', component: BasicTableComponent },
  { path: 'drag', component: DragTableComponent },
  { path: 'complex', component: ComplexTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
