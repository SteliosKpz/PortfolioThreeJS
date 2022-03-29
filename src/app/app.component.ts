import { Component} from '@angular/core';
import * as bodyScrollLock from  'body-scroll-lock'
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
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
   constructor(private router:Router,private activeRoute:ActivatedRoute){

   }
   ngOnInit():void{

    this.router.events.subscribe(value => {
      window.scrollTo(0,0)
      this.currUrl=this.router.url.toString()

  });
 }

 scroll(i){
  if(i==0){
    let chapter=document.getElementById('body')
    chapter.scrollIntoView({behavior:'smooth'})
      setTimeout(()=>{
      this.currChapter=this.chapters[i]
      this.scrolled=true
      console.log(i)
      this.currChapter=this.chapters[i]
      this.prevChapter=this.chapters[i-1]=undefined?null:this.chapters[i-1]
    },500)
    }
  else{
    this.currChapter=this.chapters[i]
    this.scrolled=true
    console.log(i)
    this.currChapter=this.chapters[i]
    this.prevChapter=this.chapters[i-1]=undefined?null:this.chapters[i-1]
     setTimeout(()=>{
      this.router.navigateByUrl(`/${this.currChapter}`)
      let chapter=document.getElementById(this.currChapter)
      chapter.scrollIntoView({behavior:'smooth'})
     },200)
  }
  this.planet1color= 0x6600ff
 }

}

