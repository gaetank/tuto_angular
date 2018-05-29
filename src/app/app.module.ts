import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { DeviceComponent } from './device/device.component';
import { FormsModule } from '@angular/forms';
import { DeviceService } from './services/device.service';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'devices', component: DeviceViewComponent },
  { path: 'devices/:id', component: SingleDeviceComponent },
  { path: '', component: DeviceViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '***', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
