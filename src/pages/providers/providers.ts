import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shelter1Page } from '../shelter1/shelter1';
import { Shelter2Page } from '../shelter2/shelter2';
import { Shelter3Page } from '../shelter3/shelter3';

/**
 * Generated class for the ProvidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-providers',
  templateUrl: 'providers.html',
})
export class ProvidersPage {

  public providers: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.providers = [
      "Shelter 1",
      "Shelter 2",
      "Shelter 3"
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidersPage');
  }
  itemSelected(provider) {
    if (provider=="Shelter 1")
      this.navCtrl.push(Shelter1Page);
    else if (provider=="Shelter 2")
      this.navCtrl.push(Shelter2Page);
    if (provider=="Shelter 3")
      this.navCtrl.push(Shelter3Page);
  }

}
