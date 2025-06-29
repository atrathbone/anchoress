import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {HomeDisplayComponent} from "./home-display/home-display.component";
import {ComponentsModule} from "../components/components.module";


@NgModule({
  declarations: [
    HomeComponent,
    HomeDisplayComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
