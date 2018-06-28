import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public cardNo: string;
  public expDate: string;
  public cvv: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardNo = "0000 0000 0000 0000";
    this.expDate = "MM/YYYY";
    this.cvv= "3 or 4 digit number";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
