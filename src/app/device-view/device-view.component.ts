import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  devices: any[];
  deviceSubscription: Subscription;
  isAuth: boolean = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private deviceService: DeviceService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.deviceSubscription = this.deviceService.devicesSubject.subscribe(
      (devices: any[]) => {
        this.devices = devices;
      }
    );
    this.deviceService.emitDeviceSubject();
  }

  onAllumer() {
    this.deviceService.switchOnAll();
  }

  onEteindre() {
    this.deviceService.switchOffAll();
  }

}
