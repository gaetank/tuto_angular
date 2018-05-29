import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {

  name: string = 'Appareil'
  status: string = 'Statut'
  constructor(private deviceService: DeviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.name = this.deviceService.getAppareilById(+id).name
    this.status = this.deviceService.getAppareilById(+id).status
  }

}
