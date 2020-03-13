import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, CommonModule]
})
export class WelcomeRoutingModule { }
