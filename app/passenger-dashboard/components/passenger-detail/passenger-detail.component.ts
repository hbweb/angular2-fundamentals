import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="passengerDetail.checkedIn"></span>
      {{ passengerDetail.fullname }}
      <div class="date">
        Check in date:
        {{ passengerDetail.checkInDate ? (passengerDetail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
      </div>
      <div class="children">
        Children: {{ passengerDetail.children?.length || 0 }}
      </div>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  passengerDetail: Passenger;
}