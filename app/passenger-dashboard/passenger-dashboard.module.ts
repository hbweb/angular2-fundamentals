import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // export this Component so it can be used in other modules.
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule {}