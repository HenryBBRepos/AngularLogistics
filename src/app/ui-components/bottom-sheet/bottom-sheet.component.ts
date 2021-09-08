import {Component, Inject, OnInit} from '@angular/core';
import {VehiclesComponent} from '../../pages/vehicle/vehicles/vehicles.component';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';


export interface BottomSheetOption {
  name: string;
  onclick: any;
}

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  options: BottomSheetOption[] = [];
  constructor(
    private bottomSheetRef: MatBottomSheetRef<VehiclesComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  ngOnInit() {
    this.options = this.data.options;
  }

  performAction(onclick: any) {
    onclick.apply();
    this.bottomSheetRef.dismiss();
  }
}
