import { Injectable } from '@angular/core';
import Webcam from 'webcam-easy';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  webCamera: Webcam;
  picture: any;
  constructor() { }

  initCamera(webcamElement: HTMLElement, canvasElement: HTMLElement) {
    this.webCamera =
      new Webcam(webcamElement, 'user', canvasElement, null);
  }

  setPicture(picture: any): void {
    this.picture = picture;
  }

  getPicture(): any {
    return this.picture;
  }
}
