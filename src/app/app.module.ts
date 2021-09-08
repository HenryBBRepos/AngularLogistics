import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './pages/signup/signup.component';
import {LoginComponent} from './pages/login/login.component';
import {AccountComponent} from './pages/account/account.component';
import {HomeComponent} from './pages/home/home.component';
import {NavbarComponent} from './ui-components/navbar/navbar.component';
import {NotificationComponent} from './ui-components/notification/notification.component';
import {MenuComponent} from './ui-components/menu/menu.component';
import {ProfileAsideComponent} from './ui-components/profile-aside/profile-aside.component';
import {ProfilePicComponent} from './ui-components/profile-pic/profile-pic.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {ProgressbarComponent} from './ui-components/progressbar/progressbar.component';
import {ChartsModule} from 'ng2-charts';
import {QRCodeModule} from 'angularx-qrcode';
import {ShortenPipe} from './pipe/shorten/shorten.pipe';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {VehicleModule} from './pages/vehicle/vehicle.module';
import {DriverModule} from './pages/driver/driver.module';
import {BottomSheetComponent} from './ui-components/bottom-sheet/bottom-sheet.component';
import {MatDialogModule, MatFormFieldModule, MatListModule, MatProgressSpinnerModule, MatSnackBarModule} from '@angular/material';
import {DriverSearchListComponent} from './ui-components/driver-search-list/driver-search-list.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {FormsModule} from '@angular/forms';
import {CameraComponent} from './ui-components/camera/camera.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalTemplateComponent } from './ui-components/modal-template/modal-template.component';
import { SignupStepTwoComponent } from './pages/signup-step-two/signup-step-two.component';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { FmoAccountComponent } from './pages/fmo-account/fmo-account.component';
import { FmoSignupComponent } from './pages/fmo-signup/fmo-signup.component';
import { FmoSignupStepTwoComponent } from './pages/fmo-signup-step-two/fmo-signup-step-two.component';
import { FmoLoginComponent } from './pages/fmo-login/fmo-login.component';
import { FmoCreateTransactionComponent } from './pages/fmo-create-transaction/fmo-create-transaction.component';
import { FmoSignupStepThreeComponent } from './pages/fmo-signup-step-three/fmo-signup-step-three.component';
import { FmoHomeComponent } from './pages/fmo-home/fmo-home.component';
import { FmoForgotPasswordComponent } from './pages/fmo-forgot-password/fmo-forgot-password.component';
import { SignupStepTwoTextComponent } from './signup-step-two-text/signup-step-two-text.component';
import { FmoAdminHomepageComponent } from './pages/fmo-admin-homepage/fmo-admin-homepage.component';
import { FmoMenuComponent } from './ui-components/fmo-menu/fmo-menu.component';
import { FmoNavbarComponent } from './ui-components/fmo-navbar/fmo-navbar.component';
import { FmoProfileAsideComponent } from './ui-components/fmo-profile-aside/fmo-profile-aside.component';
import { FmoProfilePicComponent } from './ui-components/fmo-profile-pic/fmo-profile-pic.component';
import {FmoVehicleModule} from './pages/fmo-vehicle/fmo-vehicle.module';
import { FmoDriverModule } from './pages/fmo-driver/fmo-driver.module';



@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LoginComponent,
        AccountComponent,
        HomeComponent,
        NavbarComponent,
        NotificationComponent,
        MenuComponent,
        ProfileAsideComponent,
        ProfilePicComponent,
        HomepageComponent,
        ProgressbarComponent,
        ShortenPipe,
        BottomSheetComponent,
        DriverSearchListComponent,
        ForgotPasswordComponent,
        CameraComponent,
        ModalTemplateComponent,
        SignupStepTwoComponent,
        AdminHomepageComponent,
        FmoAccountComponent,
        FmoSignupComponent,
        FmoSignupStepTwoComponent,
        FmoLoginComponent,
        FmoCreateTransactionComponent,
        FmoSignupStepThreeComponent,
        FmoHomeComponent,
        FmoForgotPasswordComponent,
        SignupStepTwoTextComponent,
        FmoAdminHomepageComponent,
        FmoMenuComponent,
        FmoNavbarComponent,
        FmoProfileAsideComponent,
        FmoProfilePicComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    QRCodeModule,
    NgbRatingModule,
    VehicleModule,
    DriverModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    FmoVehicleModule,
    FmoDriverModule
    
  ],
    entryComponents: [
        BottomSheetComponent,
        CameraComponent,
        ModalTemplateComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
