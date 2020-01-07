import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  isPara=false
  isAl=false

  mob=[
      'Android','Apple','Moto'
  ]
  bsObj={'border':'1px solid red','color':'red'}

  onOkay(){

    this.isPara=!this.isPara
  }
  onClassIt(){
    this.isAl=!this.isAl
  }
}
