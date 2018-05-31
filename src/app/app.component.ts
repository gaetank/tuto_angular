import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my awesome app';
  seconds: number;
  counterSubscription: Subscription

  constructor() {}

  ngOnInit() {
    const counter = Observable.interval(1000)
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.seconds = value
      },
      (error) => {
        console.log('An error occured: ' + error)
      },
      () => console.log('Observable complete !')
    )
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
