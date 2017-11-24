/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement , NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component'

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([])],
      declarations: [ AppComponent ,NavComponent],
      //schemas:[NO_ERRORS_SCHEMA] //Avoiding if two many selectors in page or in child page
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should have router-outlet directive',()=>{
   let de= fixture.debugElement.query(By.directive(RouterOutlet));

   expect(de).not.toBe(null);
  })

  it('should have link to todos page',()=>{
     let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
      
     let index = debugElements.findIndex(de=>de.properties["href"]==="/todos")

     expect(index).toBeGreaterThan(-1);
  })
});
 