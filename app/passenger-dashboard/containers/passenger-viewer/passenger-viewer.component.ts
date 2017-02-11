import { Passenger } from './../../models/passenger.interface';
import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passenger-viewer',
  template: `
    <div>
      <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)"></passenger-form>
    </div>
  `
})

export class PassengerViewerComponent implements OnInit {
  private passenger: Passenger;

  constructor(
    private _passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this._passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger){
    console.log(event);
    this._passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) =>{
        this.passenger = Object.assign({}, this.passenger, event)
      });
  }
}