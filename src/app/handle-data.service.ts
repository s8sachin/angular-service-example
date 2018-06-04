import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
// // import 'rxjs/Rx';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/observable/of';

@Injectable()
export class HandleDataService {
  serviceData: any = [];
  // private serviceData = new Subject<any>();
  // serviceData$ = this.serviceDatad.asObservable();

  constructor() { }

  saveData (incomingObj) {
    this.serviceData.push(incomingObj);
  }

  getData () {
    return (this.serviceData);
  }

}
