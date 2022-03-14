import { Component,AfterViewInit,ElementRef,OnInit,ViewChild, EventEmitter, Output } from '@angular/core';
import * as three from "three"
import * as bodyScrollLock from  'body-scroll-lock'
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
   about
   portfolio
   contact
   currChapter
   prevChapter=null
   ngOnInit():void{
  // this.disableBodyScroll(this.body)
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
      let chapter=document.getElementById(this.currChapter)
      chapter.scrollIntoView({behavior:'smooth'})
     },200)
  }
 }

}

