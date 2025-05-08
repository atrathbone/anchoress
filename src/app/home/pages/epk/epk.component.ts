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
    text: "BANDCAMP",
    linkUrl: "https://anchoress-official.bandcamp.com/album/in-times-where-eyes-are-low"
  },
    {
      text: "INSTAGRAM",
      linkUrl: "https://www.instagram.com/anchoress_band/"
    },
    {
      text: "SPOTIFY",
      linkUrl: "https://open.spotify.com/intl-de/artist/3XQXk4cqvvAB5n2NslRo7G?si=RjbwZASqR2qb4m_dnLUbiw"
    },]

  liveDates: LiveDate[] = LiveDates.liveDates;

  constructor(private responsive: ResponsiveService) {
    this.resService = responsive;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
