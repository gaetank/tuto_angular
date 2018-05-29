import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string
  @Input() deviceStatus: string
  @Input() index: number
  @Input() id: number
  
  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  onSwitch() {
    if(this.deviceStatus === 'allumé') {
      this.deviceService.switchOffOne(this.index);
    } else if(this.deviceStatus === 'éteint') {
      this.deviceService.switchOnOne(this.index);
    }
  }

  getStatus() {
    return this.deviceStatus;
  }

  getColor() {
    if(this.deviceStatus === 'éteint') {
      return 'red';
    } else {
      return 'green';
    }
  }

}
