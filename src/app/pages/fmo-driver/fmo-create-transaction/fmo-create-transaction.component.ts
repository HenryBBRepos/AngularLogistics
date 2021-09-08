import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FmoTransactionCompleteModalComponent } from '../fmo-transaction-complete-modal/fmo-transaction-complete-modal.component';

@Component({
  selector: 'app-fmo-create-transaction',
  templateUrl: './fmo-create-transaction.component.html',
  styleUrls: ['./fmo-create-transaction.component.scss']
})
export class FmoCreateTransactionComponent implements OnInit {


  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(FmoTransactionCompleteModalComponent, {
    });
 
  }

  ngOnInit() {
  }

}
