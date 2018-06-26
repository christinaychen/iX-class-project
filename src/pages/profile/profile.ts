import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistrationPage } from '../register/register';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  
  }
  navigateToLogout() {
    console.log("Logging out...");
    this.navCtrl.popTo(HomePage);
    this.navCtrl.popTo(HomePage);
  }

}
