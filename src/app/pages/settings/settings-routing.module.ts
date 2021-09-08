import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './settings.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {NotificationComponent} from './notification/notification.component';
import {AboutSoftwareComponent} from './about-software/about-software.component';
import {HelpSupportComponent} from './help-support/help-support.component';
import {FieldMonitorComponent} from './field-monitor/field-monitor.component';
import {FieldMonitorEditComponent} from './field-monitor-edit/field-monitor-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: SettingsComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: EditProfileComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'field-monitors',
        component: FieldMonitorComponent
      },
      {
        path: 'field-monitors/:id',
        component: FieldMonitorEditComponent
      },
      {
        path: 'notifications',
        component: NotificationComponent
      },
      {
        path: 'about',
        component: AboutSoftwareComponent
      },
      {
        path: 'help',
        component: HelpSupportComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
