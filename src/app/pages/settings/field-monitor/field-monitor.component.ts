import { Component, OnInit } from '@angular/core';
import {FieldMonitor} from '../../../model/model';
import {MatBottomSheet} from '@angular/material';
import {BottomSheetComponent} from '../../../ui-components/bottom-sheet/bottom-sheet.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-field-monitor',
  templateUrl: './field-monitor.component.html',
  styleUrls: ['./field-monitor.component.scss']
})
export class FieldMonitorComponent implements OnInit {
  fieldMonitors: FieldMonitor[];
  status = 'isActive';
  signupLink = 'https://' + location.host + '/welcome/900o39soo093/signup';

  constructor(
    private bottomSheet: MatBottomSheet,
    private router: Router
  ) { }

  ngOnInit() {
    this.fieldMonitors = [
      {name: 'Philip Owusu', email: 'powusu@miu.edu', phonenumber: '024596059', status: 'Active'}
    ];
  }

  options(i: number): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: {
        options: [
          {
            name: 'Approve Profile',
            onclick: () => {}
          },
          {
            name: 'View Details',
            onclick: () => this.router.navigateByUrl(`app/settings/home/field-monitors/${i}`)
          },
          {
            name: 'Deactivate Account',
            onclick: () => {

            }
          },
          {
            name: 'Remove Account',
            onclick: () => console.log(`Vehicle Removed`)
          }
        ]
      }
    });
  }
}
