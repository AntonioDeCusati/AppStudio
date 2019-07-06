import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NozioniPage } from './nozioni';

@NgModule({
  declarations: [
    NozioniPage,
  ],
  imports: [
    IonicPageModule.forChild(NozioniPage),
  ],
})
export class NozioniPageModule {}
