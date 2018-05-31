import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceService } from 'src/app/services/device.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})
export class EditDeviceComponent implements OnInit {

  defaultOnOff = 'éteint'
  
  constructor(private deviceService: DeviceService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value)

    const name = form.value['name']
    const status = form.value['status']
    this.deviceService.addDevice(name, status)
    this.router.navigate(['/devices'])
  }

}
