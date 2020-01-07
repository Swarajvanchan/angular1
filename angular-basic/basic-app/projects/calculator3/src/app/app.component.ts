import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator3';

@ViewChild('calcStr',{static : false})
calcStr:ElementRef

@ViewChild('result',{static : false})
result:ElementRef

@ViewChild('alt',{static : false})
alt:ElementRef

@ViewChild('brd',{static : false})
brd:ElementRef


  calculate(){
console.log(this.calcStr.nativeElement.value)
this.result.nativeElement.value=eval(this.calcStr.nativeElement.value)


  }
  cls(){
    this.calcStr.nativeElement.value=''
    this.result.nativeElement.value=''
    console.log(this.alt)

    this.brd.nativeElement.style.border='1px solid red'
  }
    

  }

