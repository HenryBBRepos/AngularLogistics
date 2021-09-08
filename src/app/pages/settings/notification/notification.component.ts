import { Component, OnInit } from '@angular/core';
import {NotificationModel} from '../../../model/model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications: NotificationModel[];
  constructor() { }

  ngOnInit() {
    this.notifications = [
      {notificationId: '9soe902', title: 'Route Tracking', message: 'Lorem Ipsum kjsd  sjkdfds jsdf kjsd kjsdjf ksdj ' +
          // tslint:disable-next-line:max-line-length
          'kjdfs jkks dfk ksdf ks dfsd jsdjfsdfsdkj sk dfjsdk adasdas asdas asda asdas asdas adas adas adas ads', notificationDateTime: new Date()},
          {notificationId: '9soe902', title: 'Route Tracking', message: 'Lorem Ipsum kjsd  sjkdfds jsdf kjsd kjsdjf ksdj ' +
          // tslint:disable-next-line:max-line-length
          'kjdfs jkks dfk ksdf ks dfsd jsdjfsdfsdkj sk dfjsdk adasdas asdas asda asdas asdas adas adas adas ads', notificationDateTime: new Date()}
    ];
  }

}
