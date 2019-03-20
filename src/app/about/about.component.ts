import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, fromEvent, timer, Observable, noop } from 'rxjs';
import { createHTTPObservable } from '../common/util';
import { map } from 'rxjs/operators';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
}
