import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Product } from '../../models/product';
import { ShelterService } from '../../services/shelters.services';
import { Shelter } from '../../models/shelter';
import { Purchases } from '../../models/purchases';
import { PurchasesService } from '../../services/purchases.services';


/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  donutChart: any;
  public purchases:Array<Purchases>;

  @ViewChild('doughnutCanvas') doughnutCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams, public purchasesService:PurchasesService) {
    this.purchases = purchasesService.getAllPurchases();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');

    this.donutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["Food", "Clothing", "Utilities"],
        datasets: [{
          label: "Money Allocation",
          data: [30, 50, 100],
          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      }

    })
  }

}
