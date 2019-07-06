import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriePage } from './materie';

@NgModule({
  declarations: [
    MateriePage,
  ],
  imports: [
    IonicPageModule.forChild(MateriePage),
  ],
})
export class MateriePageModule {}
