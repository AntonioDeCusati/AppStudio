import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-argomenti',
  templateUrl: 'argomenti.html',
})
export class ArgomentiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArgomentiPage');
  }

}
