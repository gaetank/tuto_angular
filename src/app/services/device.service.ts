export class DeviceService {
    devices = [
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Frigo',
          status: 'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];

      switchOnAll() {
        this.devices.forEach(device => device.status = 'allumé')
      }

      switchOffAll() {
        this.devices.forEach(device => device.status = 'éteint')
      }

      switchOnOne(i: number) {
        this.devices[i].status = 'allumé'
      }

      switchOffOne(i: number) {
        this.devices[i].status = 'éteint'
      }
}