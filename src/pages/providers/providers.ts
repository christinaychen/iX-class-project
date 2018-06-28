import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { Product } from '../../models/product';
import { Shelter } from '../../models/shelter';
import { ShelterService } from '../../services/shelters.services';


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

  public shelters: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public shelterService: ShelterService) {

    this.shelters = shelterService.getAllShelters();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidersPage');
  }
  
  navigateToProducts(shelter: Shelter) {
    this.navCtrl.push(ProductPage, {
      items: shelter.items,
    })
  }

}
