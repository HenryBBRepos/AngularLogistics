import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FmoDriverRegistrationComponent } from './fmo-driver-registration/fmo-driver-registration.component';
import { FmoDriverRegisteredComponent } from './fmo-driver-registered/fmo-driver-registered.component';
import { FmoDriverPhotoUploadComponent } from './fmo-driver-photo-upload/fmo-driver-photo-upload.component';
import { FmoDriverScanComponent } from './fmo-driver-scan/fmo-driver-scan.component';
import { FmoCreateTransactionComponent } from './fmo-create-transaction/fmo-create-transaction.component';
import { FmoTransactionCompleteModalComponent } from './fmo-transaction-complete-modal/fmo-transaction-complete-modal.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'fmo-drivers',
    pathMatch: 'full'
  },
  {
    path: 'fmo-drivers',
    component: FmoDriverRegistrationComponent
  },
  {
    path: 'fmo-drivers/fmo-photo-upload-driver',
    component: FmoDriverPhotoUploadComponent
  },
  {
    path: 'fmo-drivers/fmo-registered-driver',
    component: FmoDriverRegisteredComponent,

  },
  {
    path: 'fmo-drivers/fmo-driver-scan',
    component: FmoDriverScanComponent,

  },
  {
    path: 'fmo-drivers/fmo-create-transaction',
    component: FmoCreateTransactionComponent,

  },
  {
    path: 'fmo-drivers/fmo-transaction-complete-modal',
    component: FmoTransactionCompleteModalComponent,

  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmoDriverRoutingModule { }

