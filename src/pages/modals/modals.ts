import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the Modals page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html'
})
export class Modals {
  public name: string;
  public summary: string;
  public website: string;
  constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController) {
    this.name = this.params.get('name');
    this.summary = this.params.get('summary');
    this.website = this.params.get('website');
  }

  ionViewDidLoad() {
    console.log(`ionViewDidLoad ModalsPage ${this.name} , ${this.summary} , ${this.website} `);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
