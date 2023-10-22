import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDisplayComponent } from './home-display/home-display.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    HomeDisplayComponent
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
