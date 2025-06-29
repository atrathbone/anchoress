import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinksContainerComponent} from './links-container/links-container.component';
import {IconLinkComponent} from './icon-link/icon-link.component';
import {LiveDatesListComponent} from './live-dates-list/live-dates-list.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    LinksContainerComponent,
    IconLinkComponent,
    LiveDatesListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LinksContainerComponent,
    IconLinkComponent,
    LiveDatesListComponent
  ]
})
export class ComponentsModule {
}
