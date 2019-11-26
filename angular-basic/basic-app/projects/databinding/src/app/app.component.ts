import { Component, ɵRenderDebugInfo } from '@angular/core';
import { R3TargetBinder } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  type='text'
  brd='1px solid red'
  style={
    border:' 1px solid red',
    color:'green'
  }
  bxBkCl='white'

  WhatsDate(){
    return Date.now()
  }
  onMouseEnter(event:MouseEvent){

    console.log('Entered',event)
    this.bxBkCl=this.randomColor()
  }
  onMouseleave(event:MouseEvent){
    console.log('Exited',event)
    this.bxBkCl=this.randomColor()
  }
  onBtnClk(event:MouseEvent){
    this.title=this.title.toUpperCase()
    console.log('Clicked',event)
  }
  randomColor(): string{
   // let red=255
   // let green=85
   // let blue=25-
   // return 'rgb(${red}, ${green}, $rgb{blue})'
    

 let r = Math.floor(Math.random()*256);          
 let g = Math.floor(Math.random()*256);     
let  b = Math.floor(Math.random()*256);          
 let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
 return rgb
  }
}
