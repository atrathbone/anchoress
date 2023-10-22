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
      date: new Date("01-01-1987"),
      venue: "hell",
      location: "DE",
      notes: "shit",
      link: "https://www.google.com"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
