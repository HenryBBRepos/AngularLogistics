import {Component, OnInit} from '@angular/core';
import Webcam from 'webcam-easy';
import {error} from 'util';
import {CameraService} from '../../service/camera.service';
import {LoggerService} from '../../service/logger.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  webCamera: Webcam = null;
  constructor(
    private cameraService: CameraService,
    private logger: LoggerService,
    private modal: ModalService
  ) { }

  ngOnInit() {
    this.init();
  }

  init(): void {
    const webcamElement = document.getElementById('webcam');
    const canvasElement = document.getElementById('canvas');
    this.cameraService.initCamera(webcamElement, canvasElement);
    // this.webCamera = new Webcam(webcamElement, 'user', canvasElement, null);
    this.logger.info(this.cameraService.webCamera);
    this.cameraService.webCamera.start()
      .then(result => this.logger.info('Camera Started {}'))
      .catch(err =>
        this.modal.show(
          'Error',
          'Unable to detect Camera on your Computer. Please Check that webcam is connected to your computer'
        )
      );
  }

  capture(): void {
    this.cameraService.setPicture(this.cameraService.webCamera.snap());
  }

  closeCamera(): void {
    this.cameraService.setPicture(null);
  }

}
