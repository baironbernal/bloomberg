import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import { StyleLifeRoutingModule } from './style-life-routing.module';
import { AdvertisingComponent } from './advertising/advertising.component';

@NgModule({
  declarations: [
    CardComponent,
    MainComponent,
    AdvertisingComponent
  ],
  imports: [
    CommonModule,
    StyleLifeRoutingModule
  ]
})
export class StyleLifeModule { }
