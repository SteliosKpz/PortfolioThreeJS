import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RatComponent } from './rat/rat.component';
import { TimedashComponent } from './timedash/timedash.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'Work',component:PortfolioComponent},
   {path:'Rat',component:RatComponent},
   {path:'Timedash',component:TimedashComponent},
   {path:'About',component:AboutComponent},
   {path:'Contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
