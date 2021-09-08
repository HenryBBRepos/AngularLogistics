import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmoDriverRoutingModule } from './fmo-driver-routing.module';
import { FmoDriverRegistrationComponent } from './fmo-driver-registration/fmo-driver-registration.component';
import { FmoDriverPhotoUploadComponent } from './fmo-driver-photo-upload/fmo-driver-photo-upload.component';
import { FmoDriverRegisteredComponent } from './fmo-driver-registered/fmo-driver-registered.component';
import { FmoDriverScanComponent } from './fmo-driver-scan/fmo-driver-scan.component';
import { QRCodeModule } from 'angularx-qrcode'
import { FmoCreateTransactionComponent } from './fmo-create-transaction/fmo-create-transaction.component';
import { FmoTransactionCompleteModalComponent } from './fmo-transaction-complete-modal/fmo-transaction-complete-modal.component';

@NgModule({
  declarations: [
    FmoDriverRegistrationComponent,
    FmoDriverPhotoUploadComponent,
    FmoDriverRegisteredComponent,
    FmoDriverScanComponent,
    FmoCreateTransactionComponent,
    FmoTransactionCompleteModalComponent
  ],
  imports: [
    CommonModule,
    FmoDriverRoutingModule,
    QRCodeModule,



  ]
})
export class FmoDriverModule { }
