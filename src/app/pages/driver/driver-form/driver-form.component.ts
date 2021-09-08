import {Component, OnInit} from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { CameraService } from 'src/app/service/camera.service';
import { LoggerService } from 'src/app/service/logger.service';
import { BottomSheetComponent } from 'src/app/ui-components/bottom-sheet/bottom-sheet.component';
import { CameraComponent } from 'src/app/ui-components/camera/camera.component';
import Webcam from 'webcam-easy';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.scss']
})
export class DriverFormComponent implements OnInit {
  dialogRef:any;
  profilePicturePlaceholder:any = 'assets/images/avatar_placeholder.jpg'
  constructor(
    private cameraService: CameraService,
    private logger: LoggerService,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog
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
 
  private updateProfilePicturePlaceholder(picture: any): void {
    if (picture) {
        this.profilePicturePlaceholder = picture;
    } else {
        this.profilePicturePlaceholder = 'assets/images/avatar_placeholder.jpg';
    }
  }

}
