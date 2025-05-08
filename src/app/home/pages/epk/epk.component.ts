import {Component} from '@angular/core';
import {ResponsiveService} from 'src/app/responsive.service';
import {IconLink, LiveDate} from 'src/app/types/types';
import {LiveDates} from "../../../util/live-dates";

@Component({
  selector: 'app-epk',
  templateUrl: './epk.component.html',
  styleUrl: './epk.component.scss'
})
export class EpkComponent {

  resService: ResponsiveService;
  iconLinks: IconLink[] = [{
    //iconUrl:"assets/images/logos/bandcamp-logo.svg.png",
    text: "BANDCAMP",
    linkUrl: "https://anchoress-official.bandcamp.com/album/in-times-where-eyes-are-low"
  },
    {
      //iconUrl:"assets/images/logos/insta-logo.svg.png",
      text: "INSTAGRAM",
      linkUrl: "https://www.instagram.com/anchoress_band/"
    },
    {
      //iconUrl:"assets/images/logos/soundcloud-logo.png",
      text: "SOUNDCLOUD",
      linkUrl: "https://soundcloud.com/anchoress-berlin"
    },]

  liveDates: LiveDate[] = LiveDates.liveDates;

  constructor(private responsive: ResponsiveService) {
    this.resService = responsive;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
