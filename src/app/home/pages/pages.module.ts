import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDisplayComponent } from './home-display/home-display.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { EpkComponent } from './epk/epk.component';



@NgModule({
  declarations: [
    HomeDisplayComponent,
    EpkComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeDisplayComponent
  ]
})
export class PagesModule { }
