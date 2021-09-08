import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trip-tracking-detail',
  templateUrl: './trip-tracking-detail.component.html',
  styleUrls: ['./trip-tracking-detail.component.scss']
})
export class TripTrackingDetailComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('tripId') tripId: string;
  isLoading = true;
  blankState = true;
  constructor() { }

  ngOnInit() {
    this.initializeTripDetails();
  }

  initializeTripDetails() {
    if (!this.tripId) {
      this.isLoading = false;
      this.blankState = true;
    }
  }

}
