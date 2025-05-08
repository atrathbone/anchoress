import {LiveDate} from "../types/types";

export class LiveDates {
  public static liveDates: LiveDate[] = [
    {
      date: new Date(this.getCompatableDateStr("06-25-2025")),
      venue: "TBC",
      location: "(DE)",
    },
    {
      date: new Date(this.getCompatableDateStr("05-08-2025")),
      venue: "Kantine am Berghain",
      location: "(DE)",
      notes: "supporting 'Circuit des Yeux'",
      link: "https://www.tixforgigs.com/Event/60322"

    },
    {
      date: new Date(this.getCompatableDateStr("04-25-2025")),
      venue: "Schokoladen",
      location: "(DE)",
      notes: "Anna Lucia Solo - supporting 'Rats on Rafts'",
      link: "https://schokoladen.tickettoaster.de/produkte/74851-tickets-rats-on-rafts-post-punk-wave-nl-schokoladen-berlin-am-25-04-2025"

    },
    {
      date: new Date(this.getCompatableDateStr("03-16-2025")),
      venue: "Kantine am Berghain",
      location: "(DE)",
      notes: "Anna Lucia Solo - supporting Joanna Gemma Auguri",
      link: "https://www.berghain.berlin/de/event/79609/"

    },
    {
      date: new Date(this.getCompatableDateStr("12-06-2024")),
      venue: "Kunstverein Wiesbaden",
      location: "(DE)",
      notes: "Anna Lucia Solo"

    },
    {
      date: new Date(this.getCompatableDateStr("12-10-2024")),
      venue: "Café Babette/Deep See",
      location: "(DE)",
      notes: "Anna Lucia Solo",
      link: "https://cafebabette.de/art-events/above-nothing/"

    },
    {
      date: new Date(this.getCompatableDateStr("10-26-2024")),
      venue: "Kunstverein Schwerin",
      location: "(DE)",
      notes: "Anna Lucia Solo"
    },
    {
      date: new Date(this.getCompatableDateStr("09-26-2024")),
      venue: "Radio 1 Live",
      location: "(DE)",
      link: "https://www.radioeins.de/themen/stadtleben/studioeins/"
    },
    {
      date: new Date(this.getCompatableDateStr("09-28-2024")),
      venue: "Roter Salon Volksbühne",
      location: "(DE)",
      notes: "Anna Lucia Solo",
      link: "https://www.volksbuehne.berlin/#/de/repertoire/anna-lucia-julia-witas-rouge-ah"
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

  static getCompatableDateStr(dString: string) {
    return dString.replace(/-/g, "/")
  }

}
