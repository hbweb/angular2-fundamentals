
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// Service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    // export this Component so it can be used in other modules.
    PassengerDashboardComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}