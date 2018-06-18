import { Subject } from 'rxjs/Subject'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeviceService {
    
  devicesSubject = new Subject<any[]>();
  
  private devices;
  /*
  [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id: 2,
          name: 'Frigo',
          status: 'allumé'
        },
        {
          id: 3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
  */

      constructor(private httpClient: HttpClient) {}

      saveDevicesToServer() {
        this.httpClient.put('https://tuto-angular-7a50e.firebaseio.com/devices.json', this.devices).subscribe(
          (response) => {
            this.devices = response;
            this.emitDeviceSubject();
          },
          (error) => {
            console.log('Erreur lors de l\'enregistrement ! : ' + error);
          }
        )
      }

      getDevicesFromServer() {
        this.httpClient.get<any[]>('https://tuto-angular-7a50e.firebaseio.com/devices.json').subscribe(
          () => {
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log('Erreur lors de l\'enregistrement ! : ' + error);
          }
        )
      }

      switchOnAll() {
        this.devices.forEach(device => device.status = 'allumé')
        this.emitDeviceSubject()
      }

      switchOffAll() {
        this.devices.forEach(device => device.status = 'éteint')
        this.emitDeviceSubject()
      }

      switchOnOne(i: number) {
        this.devices[i].status = 'allumé'
        this.emitDeviceSubject()
      }

      switchOffOne(i: number) {
        this.devices[i].status = 'éteint'
        this.emitDeviceSubject()
      }

      getAppareilById(id: number) {
        const appareil = this.devices.find(
          (s) => {
            return s.id === id;
          }
        );
        return appareil;
      }

      addDevice(name: string, status: string) {
        const deviceObject = {
          id: 0,
          name: '',
          status: ''
        };
        deviceObject.name = name;
        deviceObject.status = status;
        deviceObject.id = this.devices[(this.devices.length - 1)].id + 1;
        this.devices.push(deviceObject);
        this.emitDeviceSubject();
      }

      emitDeviceSubject() {
        this.devicesSubject.next(this.devices.slice())
      }
}