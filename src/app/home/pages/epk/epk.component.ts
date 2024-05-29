import { Component, isDevMode } from '@angular/core';
import { ResponsiveService } from 'src/app/responsive.service';
import { IconLink, LiveDate } from 'src/app/types/types';

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
  liveDates: LiveDate[] = [
    {
      date: new Date(this.getCompatableDateStr("09-28-2024")),
      venue: "tba",
      location: "(DE)",
      notes: "Anna Lucia Solo"
    },
    {
      date: new Date(this.getCompatableDateStr("08-14-2024")),
      venue: "tba",
      location: "(DE)",
      notes: "Anna Lucia Solo"
    },
    {
      date: new Date(this.getCompatableDateStr("11-08-2024")),
      venue: "Beautiful Noise Siegen Festival",
      link: "http://www.beautiful-noise-siegen.de/Konzerte/",
      location: "(DE)",
    },
    {
      date: new Date(this.getCompatableDateStr("05-23-2024")),
      venue: "Café Babette/Deep See",
      location: "Berlin (DE)",
      link: "https://cafebabette.de/art-events/deep-see-23.5.24/",
      notes: "Anna Lucia Solo"
    },
    {
      date: new Date(this.getCompatableDateStr("05-18-2024")),
      venue: "Madame Claude",
      location: "Berlin (DE)",
      link: "https://madameclaude.de/event/anna-lucia-julia-witas-klub-marta-dj-set/",
      notes: "Anna Lucia Solo"
    },
    {
      date: new Date(this.getCompatableDateStr("09-11-2021")),
      venue: "CURA x Amplify",
      location: "Berlin (DE)",
    },
    {
      date: new Date(this.getCompatableDateStr("11-18-2021")),
      venue: "Autopsie Pohl",
      location: "Berlin (DE)",
    },
    {
      date: new Date(this.getCompatableDateStr("01-28-2022")),
      venue: "Anecoica Studio / CTM Vorspiel",
      location: "Berlin (DE)",
    },
    {
      date: new Date(this.getCompatableDateStr("03-10-2022")),
      venue: "Tennisbar",
      location: "Berlin (DE)",
    },
    {
      date: new Date(this.getCompatableDateStr("05-21-2022")),
      venue: "BPA Gallery",
      location: "Berlin (DE)",
    },
    {
      date: new Date(this.getCompatableDateStr("03-02-2023")),
      venue: "PAS",
      location: "Berlin (DE)",
      link: "https://pas-berlin.org/"
    },
    {
      date: new Date(this.getCompatableDateStr("04-20-2023")),
      venue: "8mm Bar",
      location: "Berlin (DE)",
      link: "https://www.eventim-light.com/de/a/5f002783c9f8d46492128f51/e/64243cb005c38b0a07ff055e"
    },
    {
      date: new Date(this.getCompatableDateStr("05-13-2023")),
      venue: "(NYT)",
      location: "Berlin (DE)",
      notes: "solo sets",
      link: "https://www.instagram.com/not.yet.titled.art.space/"
    },
    {
      date: new Date(this.getCompatableDateStr("06-21-2023")),
      venue: "Loophole",
      location: "Berlin (DE)",
      link: "https://www.instagram.com/loophole_brln/?hl=de"
    },
    {
      date: new Date(this.getCompatableDateStr("07-14-2023")),
      venue: "PAS",
      location: "Berlin (DE)",
      notes: "solo sets",
      link: "https://pas-berlin.org/"
    },
    {
      date: new Date(this.getCompatableDateStr("09-07-2023")),
      venue: "Arkaoda",
      location: "Berlin (DE)",
      link: "https://berlin.arkaoda.com/?/default/detail/id=830"
    },
    {
      date: new Date(this.getCompatableDateStr("09-23-2023")),
      venue: "Cittipunkt",
      location: "Berlin (DE)",
      notes: "solo sets",
      link: "http://cittipunkt.online/newsletter.pdf"
    },
    {
      date: new Date(this.getCompatableDateStr("10-19-2023")),
      venue: "KW Institute/Pogo Bar",
      location: "Berlin (DE)",
      link: "https://www.kw-berlin.de/pogo-bar-cockdust/"
    },
  {
    date: new Date("03-08-2024"), 
    venue: "Zwölf Apostel Kirche",
    location: "Berlin (DE)",
    link: "https://t.rausgegangen.de/tickets/angry-women-joanna-gemma-auguri-hazel-iris-anchoress-aniqo"
  }
  ]
  
  constructor(private responsive: ResponsiveService) {
    this.resService = responsive;
   }

   scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  getCompatableDateStr(dString: string){
    return dString.replace(/-/g, "/")
   }

  }
