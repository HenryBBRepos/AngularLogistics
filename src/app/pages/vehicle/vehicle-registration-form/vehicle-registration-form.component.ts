import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatDialog} from '@angular/material';
import { CameraService } from 'src/app/service/camera.service';
import { LoggerService } from 'src/app/service/logger.service';
import {BottomSheetComponent} from '../../../ui-components/bottom-sheet/bottom-sheet.component';
import {CameraComponent} from '../../../ui-components/camera/camera.component';

@Component({
  selector: 'app-vehicle-registration-form',
  templateUrl: './vehicle-registration-form.component.html',
  styleUrls: ['./vehicle-registration-form.component.scss']
})
export class VehicleRegistrationFormComponent implements OnInit {
  file: any;
  private picturePlaceholder: any = 'assets/images/avatar_placeholder.jpg';
  private dialogRef: any;
  constructor(
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog,
    private cameraService: CameraService,
    private logger: LoggerService
  ) { }

  ngOnInit() {
    
  }

  private uploadPicture(): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: {
        options: [
          {
            name: 'Take Picture with Camera',
            onclick: () => {
              this.dialogRef = this.dialog.open(CameraComponent, {
                width: '550px',
                height: '550px'
              });

              this.dialogRef.afterClosed().subscribe(result => {
                this.logger.info(this.cameraService.getPicture())
                this.cameraService.webCamera.stop();
                this.updateProfilePicturePlaceholder(this.cameraService.getPicture());
              })
            }
          }
          // {
          //   name: 'Upload from File Storage',
          //   onclick: () => {}
          // }
        ]
      }
    });
  }

  updateProfilePicturePlaceholder(picture: any): void {
    if (picture) {
      this.picturePlaceholder = picture;
    } else {
      this.picturePlaceholder = 'assets/images/avatar_placeholder.jpg';
    }
  }
}
