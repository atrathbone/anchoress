import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksContainerComponent } from './links-container/links-container.component';
import { InfoContainerComponent } from './info-container/info-container.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { IconLinkComponent } from './icon-link/icon-link.component';
import { LiveDatesListComponent } from './live-dates-list/live-dates-list.component';



@NgModule({
  declarations: [
    LinksContainerComponent,
    InfoContainerComponent,
    NewsFeedComponent,
    IconLinkComponent,
    LiveDatesListComponent
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
