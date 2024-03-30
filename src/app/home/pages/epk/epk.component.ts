import { Component } from '@angular/core';
import { ResponsiveService } from 'src/app/responsive.service';
import { IconLink } from 'src/app/types/types';

@Component({
  selector: 'app-epk',
  templateUrl: './epk.component.html',
  styleUrl: './epk.component.scss'
})
export class EpkComponent {
  resService : ResponsiveService;
  iconLinks: IconLink[]= [{
    //iconUrl:"assets/images/logos/bandcamp-logo.svg.png",
    text: "BANDCAMP",
    linkUrl:"https://anchoress-official.bandcamp.com/album/in-times-where-eyes-are-low"
  },
  {
    //iconUrl:"assets/images/logos/insta-logo.svg.png",
    text:"INSTAGRAM",
    linkUrl:"https://www.instagram.com/anchoressss/"
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
