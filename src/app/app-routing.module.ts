import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './pages/signup/signup.component';
import {SignupStepTwoComponent} from './pages/signup-step-two/signup-step-two.component';
import {AccountComponent} from './pages/account/account.component';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {AdminHomepageComponent} from './pages/admin-homepage/admin-homepage.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import { ScanModule } from './pages/scan/scan.module';
import { FmoAccountComponent } from './pages/fmo-account/fmo-account.component';
import { FmoLoginComponent } from './pages/fmo-login/fmo-login.component';
import { FmoSignupComponent } from './pages/fmo-signup/fmo-signup.component';
import { FmoSignupStepTwoComponent } from './pages/fmo-signup-step-two/fmo-signup-step-two.component';
import { FmoSignupStepThreeComponent } from './pages/fmo-signup-step-three/fmo-signup-step-three.component';
import { FmoForgotPasswordComponent } from './pages/fmo-forgot-password/fmo-forgot-password.component';
import { FmoHomeComponent } from './pages/fmo-home/fmo-home.component';
import { FmoAdminHomepageComponent } from './pages/fmo-admin-homepage/fmo-admin-homepage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/welcome/companyCode/signup',
      pathMatch: 'full'
    },
    {
      path: 'welcome',
      component: AccountComponent,
      children: [
        {
          path: '',
          redirectTo: '/welcome/signup',
          pathMatch: 'full'
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'companyCode/signup',
          component: SignupComponent
        },
        {
          path: 'signup-step-two',
          component: SignupStepTwoComponent
        },
        {
          path: 'reset-password',
          component: ForgotPasswordComponent
        },
       
      ]
    },
    {
      path: 'field',
      component: FmoAccountComponent,
      children: [
        {
          path: '',
          redirectTo: '/field/fmo-signup',
          pathMatch: 'full'
        },
        {
          path: 'fmo-signup',
          component: FmoSignupComponent
        },
        {
          path: 'fmo-signup-step-two',
          component: FmoSignupStepTwoComponent
        },
        {
          path: 'fmo-signup-step-three',
          component: FmoSignupStepThreeComponent
        },
        {
          path: 'fmo-login',
          component: FmoLoginComponent
        },
        {
          path: 'fmo-forgot-password',
          component: FmoForgotPasswordComponent
        },
      ]
    },
    {
      path: 'officer',
      component: FmoHomeComponent,
      children: [
        {
          path: '',
          redirectTo: '/officer/dashboard',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          component: FmoAdminHomepageComponent
        },
        {
          path: 'vehicle',
          loadChildren: () =>
            import('../app/pages/fmo-vehicle/fmo-vehicle.module')
              .then(vehicle => vehicle.FmoVehicleModule)
        },
        {
          path: 'driver',
          loadChildren: () =>
            import('../app/pages/fmo-driver/fmo-driver.module')
              .then(vehicle => vehicle.FmoDriverModule)
        },
        
      ]
    },
    {
      path: 'app',
      component: HomeComponent,
      children: [
        {
          path: '',
          redirectTo: '/app/dashboard',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          component: AdminHomepageComponent
        },
        {
          path: 'd',
          loadChildren: () =>
            import('../app/pages/driver/driver.module')
              .then(driver => driver.DriverModule)
        },
        {
          path: 'v',
          loadChildren: () =>
            import('../app/pages/vehicle/vehicle.module')
              .then(vehicle => vehicle.VehicleModule)
        },
        {
          path: 't',
          loadChildren: () =>
            import('../app/pages/tracking/tracking.module')
              .then(tracking => tracking.TrackingModule)
        },
        {
          path: 'r',
          loadChildren: () =>
            import('../app/pages/route-planning/route-planning.module')
            .then(planner => planner.RoutePlanningModule)
        },
        {
          path: 'i',
          loadChildren: () =>
            import('../app/pages/invoice/invoice.module')
              .then(invoice => invoice.InvoiceModule)
        },
        {
          path: 'rpt',
          loadChildren: () =>
            import('../app/pages/report/report.module')
              .then(report => report.ReportModule)
        },
        {
          path: 'settings',
          loadChildren: () =>
            import('../app/pages/settings/settings.module')
              .then(settingModule => settingModule.SettingsModule)
        },
        {
          path: 'scan',
          loadChildren: () => 
            import('../app/pages/scan/scan.module')
            .then(scan => ScanModule)
        }
      ]
    },
    { path: 'scan', loadChildren: () => import('./pages/scan/scan.module').then(m => m.ScanModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
