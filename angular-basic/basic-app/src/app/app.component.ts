import { Component } from '@angular/core';
import { Sample1Component } from './sample1/sample1.component';
import { getLocaleEraNames } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template:`
  // <div>
  // <p>lorem</p>
  // </div>
  // <div>
  // <app-sample></app-sample>
  // </div>
  // styles:['p:{border:1px solid black}'] `

})


export class AppComponent {
  title = 'basic-app';
}
