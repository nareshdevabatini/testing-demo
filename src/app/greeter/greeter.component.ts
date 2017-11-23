import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GreeterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
