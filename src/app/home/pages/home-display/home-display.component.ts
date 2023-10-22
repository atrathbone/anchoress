import { Component, OnInit } from '@angular/core';
import { IconLink } from 'src/app/types/types';

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.scss']
})
export class HomeDisplayComponent implements OnInit {

  iconLinks: IconLink[]= [{
    iconUrl:"assets/images/logos/bandcamp-logo.svg.png",
    linkUrl:"https://anchoress-official.bandcamp.com/album/in-times-where-eyes-are-low"
  },
  {
    iconUrl:"assets/images/logos/insta-logo.svg.png",
    linkUrl:"https://www.instagram.com/anchoressss/"
  },
  {
    iconUrl:"assets/images/logos/soundcloud-logo.png",
    linkUrl:"https://soundcloud.com/anchoress-berlin"
  },]
  constructor() { }

  ngOnInit(): void {
  }

}
