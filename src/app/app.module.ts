import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { DeviceComponent } from './device/device.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceService } from './services/device.service';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { UserService } from 'src/app/services/user-service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from 'src/app/new-user/new-user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'devices', canActivate: [AuthGuard], component: DeviceViewComponent },
  { path: 'devices/:id', canActivate: [AuthGuard], component: SingleDeviceComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditDeviceComponent },
  { path: 'users', canActivate: [AuthGuard], component: UserListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: DeviceViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    FourOhFourComponent,
    EditDeviceComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
