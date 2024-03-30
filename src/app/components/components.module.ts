import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksContainerComponent } from './links-container/links-container.component';
import { InfoContainerComponent } from './info-container/info-container.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { IconLinkComponent } from './icon-link/icon-link.component';
import { LiveDatesListComponent } from './live-dates-list/live-dates-list.component';
import { RouterModule } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { MusicComponent } from './music/music.component';
import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';



@NgModule({
  declarations: [
    LinksContainerComponent,
    InfoContainerComponent,
    NewsFeedComponent,
    IconLinkComponent,
    LiveDatesListComponent,
    BioComponent,
    MusicComponent,
    VideosComponent,
    ImagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LinksContainerComponent,
    InfoContainerComponent,
    NewsFeedComponent,
    IconLinkComponent,
    BioComponent,
    MusicComponent,
    VideosComponent,
    ImagesComponent,
    LiveDatesListComponent
  ]
})
export class ComponentsModule { }
