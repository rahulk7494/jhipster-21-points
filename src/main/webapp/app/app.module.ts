import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipster21PointsSharedModule } from 'app/shared/shared.module';
import { Jhipster21PointsCoreModule } from 'app/core/core.module';
import { Jhipster21PointsAppRoutingModule } from './app-routing.module';
import { Jhipster21PointsHomeModule } from './home/home.module';
import { Jhipster21PointsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipster21PointsSharedModule,
    Jhipster21PointsCoreModule,
    Jhipster21PointsHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipster21PointsEntityModule,
    Jhipster21PointsAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Jhipster21PointsAppModule {}
