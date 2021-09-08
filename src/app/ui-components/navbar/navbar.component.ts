import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
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
}
