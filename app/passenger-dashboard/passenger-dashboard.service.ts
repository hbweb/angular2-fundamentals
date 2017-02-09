
import { Http, Response    } from '@angular/http';
import { Passenger } from './models/passenger.interface';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import '../core/rxjs-extension';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService{

  constructor(private _http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this._http
      .get(PASSENGER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this._http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this._http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
