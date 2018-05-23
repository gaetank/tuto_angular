import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  deviceName = 'Machine à laver'
  deviceStatus = 'allumé'
  
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.deviceStatus;
  }

}
