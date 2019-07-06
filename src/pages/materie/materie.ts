import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-materie',
  templateUrl: 'materie.html',
})
export class MateriePage {
  
  items: Array<{title: string, id: number }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriePage');
  }

}
