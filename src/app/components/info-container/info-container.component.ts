import { Component, OnInit } from '@angular/core';
import { LiveDate } from 'src/app/types/types';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {

  liveDates: LiveDate[] = [
    {
      date: new Date("03-02-2023"),
      venue: "PAS",
      location: "Berlin (DE)",
      link: "https://pas-berlin.org/"
    },
    {
      date: new Date("04-20-2023"),
      venue: "8mm Bar",
      location: "Berlin (DE)",
      link: "https://www.eventim-light.com/de/a/5f002783c9f8d46492128f51/e/64243cb005c38b0a07ff055e"
    },
    {
      date: new Date("05-13-2023"),
      venue: "(NYT)",
      location: "Berlin (DE)",
      notes: "solo sets",
      link: "https://www.instagram.com/not.yet.titled.art.space/"
    },
    {
      date: new Date("06-21-2023"),
      venue: "Loophole",
      location: "Berlin (DE)",
      link: "https://www.instagram.com/loophole_brln/?hl=de"
    },
    {
      date: new Date("07-14-2023"),
      venue: "PAS",
      location: "Berlin (DE)",
      notes: "solo sets",
      link: "https://pas-berlin.org/"
    },
    {
      date: new Date("09-07-2023"),
      venue: "Arkaoda",
      location: "Berlin (DE)",
      link: "https://berlin.arkaoda.com/?/default/detail/id=830"
    },
    {
      date: new Date("09-23-2023"),
      venue: "Cittipunkt",
      location: "Berlin (DE)",
      notes: "solo sets",
      link: "http://cittipunkt.online/newsletter.pdf"
    },
    {
      date: new Date("10-19-2023"),
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
  constructor() { }

  ngOnInit(): void {
  }

}
