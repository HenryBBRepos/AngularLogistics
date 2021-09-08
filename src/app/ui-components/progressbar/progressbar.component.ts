import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('value') value = '0%';
  style = {};
  constructor() { }

  ngOnInit() {
    this.style = {width: this.value, transition: '0.5s'};
  }

}
