import {Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from 'src/app/responsive.service';
import {LiveDate} from 'src/app/types/types';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {
  @Input()
  liveDates!: LiveDate[]
  public resService: ResponsiveService;
  public showDates = false;

  constructor(private responsive: ResponsiveService) {
    this.resService = responsive
  }

  ngOnInit(): void {
  }

  liveDatesToggle() {
    this.showDates = !this.showDates;
  }

}
