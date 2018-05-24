import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my awesome app';
  isAuth = false;

  deviceOne = 'Machine à laver';
  deviceTwo = 'Ordinateur';
  deviceThree = 'Frigo';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !')
  }
}
