import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

//import{compute}from'../app/small test/01. fundamentals/compute';
import { AppComponent } from './app.component';
import { VoterComponent } from './0000. Integration/1-voter/voter.component';
import { TodosComponent } from './0000. Integration/2-todos/todos.component';
import { UsersComponent } from './0000. Integration/users/users.component'; 
import { UserDetailsComponent } from './0000. Integration/3-user-details/user-details.component';

import { routes } from './app.routes';
import { HomeComponent } from './0000. Integration/home/home.component';
import { NavComponent } from './nav/nav.component';
// import { NavComponent } from './0000. Integration/nav/nav.component';
// import { HighlightDirective } from './0000. Integration/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    NavComponent,
    // NavComponent,
    // HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
