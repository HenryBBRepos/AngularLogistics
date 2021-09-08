import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BottomSheetComponent} from '../../../ui-components/bottom-sheet/bottom-sheet.component';
import {MatBottomSheet} from '@angular/material';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  constructor(
    private router: Router,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
  }
  
  viewMore(): void {
    this.router.navigateByUrl('/app/v/vehicles/id/1');
  }

  options(): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: {
        options: [
          {name: 'Vehicle Details', onclick: () => { this.router.navigateByUrl('/app/v/vehicles/id/1'); }},
          {name: 'Remove Vehicle', onclick: () => console.log(`Vehicle Removed`)}
        ]
      }
    });
  }
}
