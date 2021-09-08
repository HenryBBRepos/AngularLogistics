import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {QRCodeModule} from 'angularx-qrcode';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {NotificationComponent} from './notification/notification.component';
import { AboutSoftwareComponent } from './about-software/about-software.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { FieldMonitorComponent } from './field-monitor/field-monitor.component';
import { FieldMonitorEditComponent } from './field-monitor-edit/field-monitor-edit.component';


@NgModule({
  declarations: [
    SettingsComponent,
    EditProfileComponent,
    ResetPasswordComponent,
    NotificationComponent,
    AboutSoftwareComponent,
    HelpSupportComponent,
    FieldMonitorComponent,
    FieldMonitorEditComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    QRCodeModule,
    NgbRatingModule
  ]
})
export class SettingsModule { }
