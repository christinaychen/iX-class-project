import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  public products:Product = new Product();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products=this.navParams.get("items");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  navigateToPayment() {
    this.navCtrl.push(PaymentPage);
  }

}
