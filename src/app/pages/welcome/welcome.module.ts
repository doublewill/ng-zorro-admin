import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule, NgZorroAntdModule.forRoot()],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
