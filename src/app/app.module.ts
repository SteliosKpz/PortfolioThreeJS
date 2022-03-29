import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import { WorkComponent } from './work/work.component';
import { RatComponent } from './rat/rat.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { TimedashComponent } from './timedash/timedash.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MzdTimelineModule } from 'ngx-mzd-timeline';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    WorkComponent,
    RatComponent,
    PortfolioComponent,
    HomeComponent,
    TimedashComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    MzdTimelineModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
