import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{compute}from'../app/small test/01. fundamentals/compute';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
