import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster21PointsSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhipster21PointsSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Jhipster21PointsHomeModule {}
