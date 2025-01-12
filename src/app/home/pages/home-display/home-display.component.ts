import { Component } from '@angular/core';
import { IconLink, LiveDate } from 'src/app/types/types';
import { ResponsiveService } from 'src/app/responsive.service';
import {LiveDates} from "../../../util/live-dates";

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.scss']
})
export class HomeDisplayComponent {
  resService : ResponsiveService;
  liveDates: LiveDate[] = LiveDates.liveDates;

  iconLinks: IconLink[]= [{
    //iconUrl:"assets/images/logos/bandcamp-logo.svg.png",
    text: "BANDCAMP",
    linkUrl:"https://anchoress-official.bandcamp.com/album/in-times-where-eyes-are-low"
  },
  {
    //iconUrl:"assets/images/logos/insta-logo.svg.png",
    text:"INSTAGRAM",
    linkUrl:"https://www.instagram.com/anchoress_band"
  },
  {
    //iconUrl:"assets/images/logos/soundcloud-logo.png",
    text:"SOUNDCLOUD",
    linkUrl:"https://soundcloud.com/anchoress-berlin"
  },]

  constructor(private responsive: ResponsiveService) {
    this.resService = responsive;
   }

}
