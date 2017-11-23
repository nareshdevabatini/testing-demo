import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import{compute}from'../app/small test/01. fundamentals/compute';
import { AppComponent } from './app.component';
//import {  } from '';
//import { Greeter } from './greeter.component.ts/greeter.component.ts.component';
//import { GreeterComponent } from './greeter/greeter.component';


@NgModule({
  declarations: [
    AppComponent,
    //Greeter.Component.TsComponent,
    //GreeterComponent,
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
