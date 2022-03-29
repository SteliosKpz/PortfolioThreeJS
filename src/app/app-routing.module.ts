import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RatComponent } from './rat/rat.component';
import { TimedashComponent } from './timedash/timedash.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'Work',component:PortfolioComponent},
   {path:'Rat',component:RatComponent},
   {path:'Timedash',component:TimedashComponent},
   {path:'About',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
