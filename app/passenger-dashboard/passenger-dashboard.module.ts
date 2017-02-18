import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { PassengerTripComponent } from './containers/passenger-trip/passenger-trip.component';
import { PassengerTripDetailComponent } from './containers/passenger-trip-detail/passenger-trip-detail.component';

// service
import { PassengerDashboardService } from './passenger-dashboard.service';

const routes: Routes = [
  {
    path: 'passengers',
    children: [
     { path: '', component: PassengerDashboardComponent },
     { path: ':id', 
       children: [
         { path: '' , component: PassengerViewerComponent},
         { path: 'trips',
            children:[
              { path: '', component: PassengerTripComponent},
              { path: ':id', component: PassengerTripDetailComponent}
            ]
          }
       ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerTripComponent,
    PassengerTripDetailComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}