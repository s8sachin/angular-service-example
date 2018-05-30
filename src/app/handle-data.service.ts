import { Injectable } from '@angular/core';

@Injectable()
export class HandleDataService {
  serviceData: any = [];

  constructor() { }

  saveData (incomingObj) {
    this.serviceData.push(incomingObj);
  }

  getData () {
    return this.serviceData;
  }

}
