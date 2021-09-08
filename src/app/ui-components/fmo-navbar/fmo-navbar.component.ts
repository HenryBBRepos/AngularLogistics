import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

export interface OfficerDate {
  CurrentDate: string;
}
@Component({
  selector: 'app-fmo-navbar',
  templateUrl: './fmo-navbar.component.html',
  styleUrls: ['./fmo-navbar.component.scss']
})
export class FmoNavbarComponent implements OnInit {

  @Output('toggleSidebar') toggleSidebar = new EventEmitter();
  searchDropdown = 'search-dropdown';
  currentDateTime: any = moment().format('dddd, MMMM Do YYYY');

  constructor() { }

  ngOnInit() {
  }

  
  toggleSidebarAction(event: Event) {
    event.preventDefault();
    this.toggleSidebar.emit();
  }

  onSearchInput($event: Event) {
    // @ts-ignore
    const searchInputValue = $event.target.value;
    if (searchInputValue === '') {
      this.searchDropdown = 'search-dropdown';
    } else {
      this.searchDropdown = 'search-dropdown-opened';
    }
  }

  

  OfficerNavbarDate: OfficerDate = {
    CurrentDate: "Friday, 10th July 2020"
    };


}
