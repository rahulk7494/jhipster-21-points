import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipster21PointsSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [Jhipster21PointsSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
