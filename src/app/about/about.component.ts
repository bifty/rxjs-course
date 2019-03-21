import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, fromEvent, timer, Observable, noop, merge } from 'rxjs';
import { createHTTPObservable } from '../common/util';
import { map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const interval1$ = interval(1000);
    const interval2$ = interval1$.pipe(
      map(val => val * 10)
      );

      const result$ = merge(interval1$, interval2$);

      result$.subscribe(console.log);
  }
}
