import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController) {
  
  }

  navigateToMakeProfile() {
    console.log("Making Profile...");
    this.navCtrl.push(ProfilePage);
  }

  // getName() {
  //   var name = document.getElementById("fullname");
  // }

  // getEmail() {
  //   var email = document.getElementById("email");
  // }



  
}