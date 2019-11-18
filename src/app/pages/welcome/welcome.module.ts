import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts'
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule, NgZorroAntdModule.forRoot(), NgxEchartsModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
