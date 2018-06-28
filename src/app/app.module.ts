import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { ProvidersPage } from '../pages/providers/providers';
import { ProductPage } from '../pages/product/product';
import { PaymentPage } from '../pages/payment/payment';
import { ShelterService } from '../services/shelters.services';
import { ReportPage } from '../pages/report/report';
import { PurchasesService } from '../services/purchases.services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    ProvidersPage,
    ProductPage,
    PaymentPage,
    ReportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    ProvidersPage,
    ProductPage,
    PaymentPage,
    ReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShelterService,
    PurchasesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
