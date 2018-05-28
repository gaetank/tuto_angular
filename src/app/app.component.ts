import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my awesome app';
  isAuth = false;
  devices: any[];

  constructor(private deviceService: DeviceService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.devices = this.deviceService.devices;
  }

  onAllumer() {
    this.deviceService.switchOnAll();
  }

  onEteindre() {
    this.deviceService.switchOffAll();
  }
}
