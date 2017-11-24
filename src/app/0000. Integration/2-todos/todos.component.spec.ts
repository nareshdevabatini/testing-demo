/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
//import { promise } from 'selenium-webdriver';
//import { Promise } from 'q';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      declarations: [ TodosComponent ],
      providers:[TodoService], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  xit('should load todos from the server', async(() => {
    let service = TestBed.get(TodoService);
    //spyOn(service,'getTodos').and.returnValue(Observable.from([ [1,2,3] ]));
    spyOn(service,'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    tick();
    expect(component.todos.length).toBe(3);
    console.log("promise in data")
    
    // fixture.whenStable().then(()=>{  // if its using async then we have to use like this
    //   expect(component.todos.length).toBe(3);
    // });
  }));
});
