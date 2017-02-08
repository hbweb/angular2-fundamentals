
import { Http, Response    } from '@angular/http';
import { Passenger } from './models/passenger.interface';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService{

  constructor(private _http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this._http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this._http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger)
      .map((response: Response) => response.json());
  }

  insertPassenger(passenger: Passenger): Observable<Passenger[]> {
    return this._http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }
}