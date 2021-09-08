import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Marker} from '../model/marker/marker';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  zoom: number = environment.map.zoom;
  // initial center of the map
  latitude = 51.673858;
  longitude = 7.815982;
  markers: Marker[] = [
    {
      latitude: 51.673858,
      longitude: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      latitude: 51.373858,
      longitude: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      latitude: 51.723858,
      longitude: 7.895982,
      label: 'C',
      draggable: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  mapClicked($event): void {

  }

  clickedMarker(label: string, i: number): void {

  }
}
