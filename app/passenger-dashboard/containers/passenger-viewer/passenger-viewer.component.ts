import { Passenger } from './../../models/passenger.interface';
import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passenger-viewer',
  template: `
    <div>
      {{ passenger | json}}
    </div>
  `
})

export class PassengerViewerComponent implements OnInit {
  private passenger: Passenger;

  constructor(private _passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this._passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => this.passenger = data);
  }
}