import { Component, EventEmitter, Output} from '@angular/core';
import * as bodyScrollLock from  'body-scroll-lock'
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @Output() onpageChange: EventEmitter<any> = new EventEmitter();
   scrolled = false
   camera=2500
   chapters=['body','About','Portfolio','Contact']
   disableBodyScroll = bodyScrollLock.disableBodyScroll;
   enableBodyScroll = bodyScrollLock.enableBodyScroll;
   body = document.querySelector("body");
   planet1color= 0x6600ff
   about
   portfolio
   contact
   currChapter
   prevChapter=null
   currUrl
   p1Color
   constructor(private router:Router,private activeRoute:ActivatedRoute){

   }

   ngOnInit():void{
    this.router.events.subscribe(value => {
      window.scrollTo(0,0)
      this.currUrl=this.router.url.toString()

  });
 }
}

