import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksContainerComponent } from './links-container/links-container.component';
import { InfoContainerComponent } from './info-container/info-container.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { IconLinkComponent } from './icon-link/icon-link.component';



@NgModule({
  declarations: [
    LinksContainerComponent,
    InfoContainerComponent,
    NewsFeedComponent,
    IconLinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinksContainerComponent,
    InfoContainerComponent,
    NewsFeedComponent,
    IconLinkComponent
  ]
})
export class ComponentsModule { }
