import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsComponent } from './pages/icons/icons.component'
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'table', loadChildren: () => import('./pages/table/table.module').then(m => m.TableModule) },
  { path: 'icons', component: IconsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
