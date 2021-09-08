import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalTemplateComponent } from '../ui-components/modal-template/modal-template.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public dialog: MatDialog
  ) { }

  show(title: string, message: string): void {
    const dialogRef = this.dialog.open(ModalTemplateComponent, {
      // width: '500px',
      // height: '500px',
      data: {
        title: title,
        message: message
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
