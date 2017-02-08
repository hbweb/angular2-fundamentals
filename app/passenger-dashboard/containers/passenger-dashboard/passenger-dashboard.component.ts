import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from './../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  template: `
    <h1>Passenger Dashboard</h1><div>

      <passenger-count [items]="passengers"></passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)"
        ></passenger-detail>

    </div>
  `,
  styleUrls: ['passenger-dashboard.component.scss']
})

export class PassengerDashboardComponent implements OnInit {
  private passengers: Passenger[];

  constructor(private _passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this._passengerService
      .getPassengers()
      .subscribe((data: Passenger[])=> this.passengers = data);
  }

  handleRemove(event: Passenger){
    console.log('Handling Remove ',event);
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return event.id !== passenger.id;
    })
  }

  handleEdit(event: Passenger){
    this._passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if( event.id === passenger.id){
            passenger = Object.assign({}, passenger, event);
            //passenger = event;
          }
          return passenger;
        })
      })
  }
}