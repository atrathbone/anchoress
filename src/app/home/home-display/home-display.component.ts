import {Component, ViewEncapsulation} from '@angular/core';
import {IconLink, LiveDate} from 'src/app/types/types';
import {ResponsiveService} from 'src/app/responsive.service';
import {LiveDates} from "../../util/live-dates";

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeDisplayComponent {
  resService: ResponsiveService;
  liveDates: LiveDate[] = LiveDates.liveDates;

  iconLinks: IconLink[] = [
    {
      text: "BANDCAMP",
      linkUrl: "https://anchoress-official.bandcamp.com/album/in-times-where-eyes-are-low"
    },
    {
      text: "INSTAGRAM",
      linkUrl: "https://www.instagram.com/anchoress_band"
    },
    {
      text: "SPOTIFY",
      linkUrl: "https://open.spotify.com/intl-de/artist/3XQXk4cqvvAB5n2NslRo7G?si=RjbwZASqR2qb4m_dnLUbiw"
    },
    {
      text: "CONTACT",
      linkUrl: "mailto:anchoress.official@gmail.com"
    }
  ]

  constructor(private responsive: ResponsiveService) {
    this.resService = responsive;
  }

}
