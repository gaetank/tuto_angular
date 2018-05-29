export class DeviceService {
    devices = [
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

      getAppareilById(id: number) {
        const appareil = this.devices.find(
          (s) => {
            return s.id === id;
          }
        );
        return appareil;
      }
}