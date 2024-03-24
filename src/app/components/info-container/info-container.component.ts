import { Component, Input, OnInit } from '@angular/core';
import { LiveDate } from 'src/app/types/types';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {
  @Input()
  liveDates!: LiveDate[] 
  constructor() { }

  ngOnInit(): void {
  }

}
