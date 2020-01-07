import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FirstModule } from './first/first.module';
import { MagicDirective } from './magic.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    MagicDirective
  ],
  imports: [
    BrowserModule,FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
