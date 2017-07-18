import { NgModule } from '@angular/core';
import { FeedPage } from './feed';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [FeedPage],
  imports: [
    IonicPageModule.forChild(FeedPage)
  ],
  exports: [FeedPage]
})

export class FeedPageModule { }