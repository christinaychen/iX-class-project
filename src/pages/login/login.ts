import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {
  public email: string;

  constructor(public navCtrl: NavController) {
  
  }
  navigateToGoToProfile() {
    console.log("Loading Profile...");
    this.navCtrl.push(ProfilePage);
  }
  
}
