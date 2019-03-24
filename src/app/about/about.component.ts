import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { interval, fromEvent, timer, Observable, noop, merge } from "rxjs";
import { createHTTPObservable } from "../common/util";
import { map, mergeMap } from "rxjs/operators";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const http$ = createHTTPObservable("/api/courses");
    const sub = http$.subscribe(console.log);

    setTimeout(() => sub.unsubscribe(), 0);
  }
}
