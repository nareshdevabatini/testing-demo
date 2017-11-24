import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router'
import { RouterTestingModule } from "@angular/router/testing";

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([])],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have link to todos page',()=>{
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
     //console.log(debugElements);
    let index = debugElements.findIndex(de=>de.properties["href"]==="/todos")

    expect(index).toBeGreaterThan(-1);
 })
});
